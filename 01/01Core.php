<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();


if (!isset($_POST["Opcion"])) $_POST["Opcion"] = "";

if (trim($_POST["Opcion"]) == "UsuarioNum")
	{
$ndoc_usu = $_POST["Ndoc_usu"];
$sql_usu = "SELECT codi_usu FROM ma_usuario WHERE ndoc_usu = '".$ndoc_usu."';";
$query_usu = mysqli_query($dbh,$sql_usu);
$resultado = mysqli_num_rows($query_usu);
return $resultado;
	}
?>


<?php
if (trim($_POST["Opcion"]) == "NuevoPass")
	{

$Actual = $_POST["Actual"];
$Anterior = md5($_POST["Anterior"]);

if ($Anterior != $Actual)
{
echo "MalAnterior"; } else {

$Usuario = $_POST["Usuario"];	
$Nueva = $_POST["Nueva"];
$Pass = md5($Nueva);	

$query = "UPDATE ma_usuario SET pasv_usu = '".$Pass."', pass_usu = '".$Pass."' WHERE codi_usu = '".$Usuario."';";
$result = mysqli_query($dbh,$query);
echo "Bieeen0630";
} 
}
?>


<?php
if (trim($_POST["Opcion"]) == "NuevoUsuario")
	{
$ndoc_usu = $_POST["Ndoc_usu"];
$nomb_usu = $_POST["Nomb_usu"];
$depa_usu = "54";
$muni_usu = $_POST["Muni_usu"];
$tipo_usu = $_POST["Tipo_usu"];
$acti_usu = $_POST["Acti_usu"];
//$pa = "gnds".$ndoc_usu;
//$pass = md5($pa);
//$pasv = md5($pa);
$pass_vista = rand(1, 9999);
$pass = md5($pass_vista);


$sql_usu = "SELECT codi_usu FROM ma_usuario WHERE ndoc_usu = '".$ndoc_usu."';";
$result = mysqli_query($dbh,$sql_usu);
echo $totalSel = mysqli_num_rows($result);
if (!empty($totalSel))
{ echo "YaExiste"; } else {
$query = "INSERT INTO ma_usuario (ndoc_usu , nomb_usu, depa_usu, muni_usu, pass_usu, pasv_usu, tipo_usu, acti_usu) 
VALUES ('".$ndoc_usu."', '".$nomb_usu."', '".$depa_usu."', '".$muni_usu."', '".$pass."', '".$pass_vista."', '".$tipo_usu."', '".$acti_usu."');";
$result = mysqli_query($dbh,$query);
echo "NoExiste";
} 
}

if (trim($_POST["Opcion"]) == "EditaUser")
	{
$codi_usu = $_POST["Codi_usu"];
$ndoc_usu = $_POST["Ndoc_usu"];
$nomb_usu = $_POST["Nomb_usu"];
$muni_usu = $_POST["Muni_usu"];
$tipo_usu = $_POST["Tipo_usu"];
$acti_usu = $_POST["Acti_usu"];

$query = "UPDATE ma_usuario SET 
ndoc_usu = '".$ndoc_usu."', 
nomb_usu = '".$nomb_usu."', 
muni_usu = '".$muni_usu."', 
tipo_usu = '".$tipo_usu."', 
acti_usu = '".$acti_usu."' 
WHERE codi_usu = '".$codi_usu."';";
$result = mysqli_query($dbh,$query);
}

if (trim($_POST["Opcion"]) == "EliminaUser")
	{
$codi_usu = $_POST["Codi_usu"];
$query = "DELETE FROM ma_usuario WHERE codi_usu = '".$codi_usu."';";
$result = mysqli_query($dbh,$query);
}


if (trim($_POST["Opcion"]) == "ReinciaUsuario")
	{
$codi_usu = $_POST["Codi_usu"];
$docu_usu = $_POST["Docu_usu"];
$NewPass = $numero;
$NewPassMd5 = md5($numero);
$query = "UPDATE FROM ma_usuario SET pass_usu = '".$NewPassMd5."', pasv_usu = '".$NewPass."' WHERE codi_usu = '".$codi_usu."';";
$result = mysqli_query($dbh,$query);
}
?>