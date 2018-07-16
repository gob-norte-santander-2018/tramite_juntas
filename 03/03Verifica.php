<?php
require "../complementos/conexion.php";
include ("../complementos/funciones.php");
$dbh=conectar_bd();
//$junta = JuntaUsuarioPersoneria($personeria, $usuario, "codi_jun");
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link href="../styles/styles.css" rel="stylesheet" type="text/css">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>
<body>
<p>
<?php
$certificado = $_POST["Nume_cer"];

$contar = "SELECT * FROM ma_certificados WHERE nume_cer = '".$certificado."';";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$contarok = mysqli_query($dbh,$contar);
$totales = mysqli_num_rows($contarok);
$row = mysqli_fetch_array($contarok);
$codi_cer = $row["codi_cer"];
$codi_usu = $row["codi_usu"];
$ndoc_usu = $row["ndoc_usu"];
$nomb_usu = $row["nomb_usu"];
$codi_jun = $row["codi_jun"];
$fech_cer = $row["fech_cer"];
$ipvisitante = $_SERVER["REMOTE_ADDR"];
$fecha = date("Y-m-d H:i:s");


if (empty($totales)) {
echo "EL CERTIFICADO ".$certificado." NO SE ENCUENTRA EN NUESTRO SISTEMA";
?>


<?php } else { ?>


 
<p align="left" style="font-size:22px;">El Certificado No. <strong><?php echo $certificado; ?></strong></p>
<p align="left" style="font-size:22px;">Fue generado en la FECHA: <strong><?php echo $fech_cer; ?></strong></p>
<p align="left" style="font-size:22px;">Por: <strong><?php echo $nomb_usu; ?></strong> Identificado con Cédula de Ciudadanía No. <strong><?php echo $ndoc_usu; ?></strong></p>

<?php
$query = "UPDATE ma_certificados  SET veri_cer = '1', fecv_cer = '$fecha', ipve_cer = '$ipvisitante ' WHERE codi_cer = '$codi_cer '"; 
$result = mysqli_query($dbh,$query);
?>

<?php
/*
$query = "INSERT INTO ma_certificados (codi_usu , ndoc_usu, nomb_usu, fech_cer, ipso_cer, codi_jun, nume_cer) 
VALUES ('".$codi_usu."', '".$ndoc_usu."', '".$nomb_usu."', '".$fecha."', '".$ipvisitante."', '".$codi_jun."', '".$certificado."');";
$result = mysqli_query($query,$dbh);*/
?>


<?php } ?>
</body>
</html>