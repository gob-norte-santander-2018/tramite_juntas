<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
error_reporting(E_ALL);

if (!isset($_SESSION["CUSU_BIO"])) $_SESSION["CUSU_BIO"] = "";
if (!isset($_SESSION["ACTI_BIO"])) $_SESSION["ACTI_BIO"] = "";
if ($_SESSION["ACTI_BIO"] != "278UajsjdtrhTegafW92uTeE") { header ("Location: ../complementos/salir.php"); exit(); }

//require '../CxNet/Conexion.php';
//require '../Core/Core.php';

require "../complementos/conexion.php";
include ("../complementos/funciones.php");
if (!isset($_SESSION["SECC_BIO"])) $_SESSION["SECC_BIO"] = "";
?>
<?php
$emprUsu = "";
$docuUsu = "";
$tipoUsu = "";
//$tipoUsu = Usuario($_SESSION["CUSU_BIO"], "tipo_usu");
?>
<!--PERSONAS-->

<script language="javascript1.5" type="text/javascript">
document.location = "../03/03Certificado.php";
</script>
