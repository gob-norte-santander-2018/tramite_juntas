<?php 
require "conexion.php";
$dbh=conectar_bd(); 
$cc = $_POST["contrasena"]; 
$password = md5($cc); 
$ssql = "SELECT * FROM ma_usuario WHERE ndoc_usu='$_POST[usuario]' AND pass_usu='$password' AND tipo_usu='1'"; 
$rs = mysqli_query($dbh,$ssql); 
$registro=mysqli_fetch_array($rs); 
$existe = mysqli_num_rows($rs); 
session_start();
$_SESSION["CODIGO_USUARIO"] = $registro["codi_usu"];
$_SESSION["DOCUMENTO_USUARIO"] = $registro["ndoc_usu"];
$_SESSION["NOMBRE_USUARIO"] = $registro["nomb_usu"];
$_SESSION["TIPO_USUARIO"] = $registro["tipo_usu"];
$_SESSION["ACTIVO"] = $registro["acti_usu"];
if (empty($existe))
{ 
?>

<script language="javascript1.2">
alert ("DATOS ERRONEOS, VUELVA A INTENTARLO");
</script>
<script language="javascript1.5" type="text/javascript">
document.location = "../admin.php";
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
alert ("USUARIO Inactivo.");
</script>
<script language="javascript1.5" type="text/javascript">
document.location = "../index.php";
</script>
<?php 
exit;
}
if ($_SESSION["TIPO_USUARIO"] == "1"){ 
$_SESSION["AUTENTICADO"] = "278Uajsjdxe45trhTegafW92uTeE";
$_SESSION["TIPO"] = "t1";
?>
<script language="javascript1.5" type="text/javascript">
document.location = "../01/01.php";
</script>
<?php } ?>






<?php } 
mysql_free_result($rs); 
mysqli_close($dbh); 
?>