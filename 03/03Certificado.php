<?php
require "../complementos/conexion.php";
include ("../complementos/funciones.php");
$dbh=conectar_bd();
$usuario = $_POST["Ndoc_usu"];
$contrasena = md5($_POST["Pass_usu"]);

$junta = JuntaUsuarioPass($contrasena, $usuario, "codi_jun");
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
$contar = "SELECT * FROM ma_juntas WHERE codi_jun = '".$junta."';";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$contarok = mysqli_query($dbh,$contar);
$totales = mysqli_num_rows($contarok);
$row = mysqli_fetch_array($contarok);
$codi_jun = $row["codi_jun"];
$luga_jun = $row["luga_jun"];
$tipl_jun = $row["tipl_jun"];
$muni_jun = $row["muni_jun"];
$pers_jun = $row["pers_jun"];
$fech_jun = $row["fech_jun"];
$codi_usu = $row["codi_usu"];
$ndoc_usu = $row["ndoc_usu"];
$nomb_usu = $row["nomb_usu"];
$info_jun = $row["info_jun"];
$acti_jun = $row["acti_jun"];
$ipvisitante = $_SERVER["REMOTE_ADDR"];
$fecha = date("Y-m-d H:i:s");
$random = rand(10,1000000);

if (empty($totales)) {
echo "LOS DATOS INGRESADOS NO CORRRESPONDEN A UN REPRESENTANTE O SON ERRÓNEOS";
?>


<?php } else { ?>


 
<p align="center"><a href="javascript:imprimir('seleccion')" style="border:none" title="Imprimir"><img src="images/print.png" width="41" height="40" /></a></p>
<div id="seleccion">
<table width="1000" align="center" cellpadding="2" cellspacing="2" style="font-size:18px; background:#FFF; border: solid 1px #CCCCCC; padding:20px;">
<td><table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="37%"><img src="images/logocer.jpg" width="364" height="135" /></td>
<td align="right" width="63%"><span style="font-size:24px;">Certificado No. <?php echo $certificado = "CER".$random; ?></span></td>
</tr>
</table>
<p>&nbsp;</p>
<p align="center" style="font-size:32px;"><span style="font-size:28px;">LA SECRETARIA DE DESARROLLO SOCIAL</span></p>
<p align="center" style="font-size:32px;">HACE CONSTAR</p>
<p>Que el(a) señor(a) <strong><?php echo $nomb_usu; ?></strong> Identificado(a) con cédula de ciudadanía No. <strong><?php echo $ndoc_usu; ?></strong> está registrado(a) como Representante de la Junta de Acción Comunal <strong><?php echo $luga_jun; ?></strong> del Municipio <strong><?php echo Municipio($muni_jun, '54', "nomb_mun"); ?> del
 Departamento
 , con Personería y fecha de fundación: <strong><?php echo $pers_jun; ?></strong> 
</strong> </p>
<p>Se expide a solicitud del interesado el <strong>Día: <?php echo date("d");?> Mes: <?php echo date("m");?> del Año: <?php echo date("Y");?></strong></p>
<p>&nbsp;</p>
<p align="center">Nota: El número de certificado corresponde a la firma y autenticación de la constancia</p></td>
</tr>
</table>
</div>

<?php
$query = "INSERT INTO ma_certificados (codi_usu , ndoc_usu, nomb_usu, fech_cer, ipso_cer, codi_jun, nume_cer) 
VALUES ('".$codi_usu."', '".$ndoc_usu."', '".$nomb_usu."', '".$fecha."', '".$ipvisitante."', '".$codi_jun."', '".$certificado."');";
$result = mysqli_query($dbh,$query);
?>
<?php } ?>
</body>
</html>