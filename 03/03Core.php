<?php 
require "../complementos/conexion.php";
include ("../complementos/funciones.php");
$dbh=conectar_bd(); 

$usua = $_POST['Ndoc_usu'];
$pers = $_POST['Pers_jun'];

$ssql = "SELECT * FROM ma_juntas WHERE ndoc_usu='".$usua."' AND pers_jun='".$pers."'"; 
$rs = mysqli_query($dbh,$ssql); 
$registro=mysqli_fetch_array($rs); 
$existe = mysqli_num_rows($rs); 
session_start();


$_SESSION["CODIGO_USUARIO"] = $registro["codi_usu"];
$_SESSION["CODIGO_JUNTA"] = $registro["codi_jun"];
$_SESSION["ACTIVO"] = $registro["acti_jun"];
if (empty($existe))
{
?>

<script language="javascript1.2">
//alert ("DATOS ERRONEOS, VUELVA A INTENTARLO");
swal("DATOS ERRONEOS, VUELVA A INTENTARLO!", "", "success");
getArea('../01cer.php', 'ConCertificado');
</script>
<?php
exit;
} 
else {
?>
<?php
if (empty($_SESSION["ACTIVO"])){ 
//echo "USUARIO Inactivo.";
session_destroy();
?>
<script language="javascript1.2">
swal("JUNTA INACTIVA!", "", "success");
getArea('../01cer.php', 'ConCertificado');
</script>
<?php 
exit;
}
if ($existe == 1){ 
$_SESSION["AUTENTICADO"] = "278Uajsjdxe45trhTegafW92uTeE";
?>
<script language="javascript1.5" type="text/javascript">
getArea('03/03Certificado.php', 'ConCertificado2');
</script>
<?php } ?>






<?php } 
mysqli_free_result($rs); 
mysqli_close($dbh); 
?>