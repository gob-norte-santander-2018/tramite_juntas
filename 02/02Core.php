<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();


if (!isset($_POST["Opcion"])) $_POST["Opcion"] = "";

if (trim($_POST["Opcion"]) == "NuevaJunta")
	{
$luga_jun = $_POST["Luga_jun"];
$muni_jun = $_POST["Muni_jun"];
$pers_jun = $_POST["Pers_jun"];
$codi_usu = $_POST["Codi_usu"];
$acti_jun = $_POST["Acti_jun"];
$documento = Usuario($codi_usu,"ndoc_usu");
$nombre = Usuario($codi_usu,"nomb_usu");
$pass = Usuario($codi_usu,"pass_usu");

$query = "INSERT INTO ma_juntas (luga_jun, muni_jun, pers_jun, codi_usu, ndoc_usu, nomb_usu, pass_usu, acti_jun) VALUES (
'".$luga_jun."', 
'".$muni_jun."', 
'".$pers_jun."', 
'".$codi_usu."', 
'".$documento."', 
'".$nombre."', 
'".$pass."', 
'".$acti_jun."');";
$result = mysqli_query($dbh,$query);
}


if (trim($_POST["Opcion"]) == "EditaJuntas")
	{
$codi_jun = $_POST["Codi_jun"];
$luga_jun = $_POST["Luga_jun"];
$muni_jun = $_POST["Muni_jun"];
$pers_jun = $_POST["Pers_jun"];
$codi_usu = $_POST["Codi_usu"];
$acti_jun = $_POST["Acti_jun"];
$documento = Usuario($codi_usu,"ndoc_usu");
$nombre = Usuario($codi_usu,"nomb_usu");
$pass = Usuario($codi_usu,"pass_usu");


$query = "UPDATE ma_juntas SET 
luga_jun = '".$luga_jun."', 
muni_jun = '".$muni_jun."', 
pers_jun = '".$pers_jun."', 
codi_usu = '".$codi_usu."', 
ndoc_usu = '".$documento."', 
nomb_usu = '".$nombre."', 
pass_usu = '".$pass."', 
acti_jun = '".$acti_jun."' 
WHERE codi_jun = '".$codi_jun."';";
$result = mysqli_query($dbh,$query);
}


if (trim($_POST["Opcion"]) == "EliminaJunta")
	{
$juntallega = $_POST["Codi_jun"];
$query = "DELETE FROM ma_juntas WHERE codi_jun = '".$juntallega."';";
$result = mysqli_query($dbh,$query);
}

?>