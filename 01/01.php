<?php
include ("../complementos/seguridad.php");
require "../complementos/conexion.php";
$dbh=conectar_bd();
?>
<div id="divCentralPdf" style="visibility:hidden; border:2px solid #9C0; position:fixed; z-index:100; background-color:#f0f0f0;" class="divCentralPdf"></div>
<div id="ContenedorMsn" style="visibility:hidden; z-index:100; font-family:Tahoma; font-size:11px; color:#000; top:0px; text-align:center; position:fixed;"" class="divCentroHorizontal"></div>
<div id="capaMsnAlert" style="visibility:hidden; position:fixed; " class="divCentralMsnAlert"></div>
<div id="pantalla_xtra" onClick="javascript:ocultaVentana('divCentralPdf'); desbloquearPantalla(); cerrarMsnAlert();" style="width:100%; height:100%; top:0px; left:0px; position:fixed; visibility:hidden; z-index:99;"></div>
<div id="msn" style=" position:absolute;"></div>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php
$yo = $_SESSION["CODIGO_USUARIO"];
?>


<link href="../styles/styles.css" rel="stylesheet" type="text/css">


<script src="../src/js/jscal2.js"></script>
<script src="../src/js/lang/es.js"></script>
<script src="../js/javascript.js"></script>
<script src="../js/moduleFunction.js"></script>
<script src="../js/validaciones.js"></script>
<script src="../01/module01.js"></script>
<script src="../02/module02.js"></script>
<script src="../03/module03.js"></script>


<script src="../complementos/alert/dist/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="../complementos/alert/dist/sweetalert.css" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>




<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" >
<tr><td>
<!---------------------INICIA EN CABEZADO--------------------------------->
<?php include("../complementos/encabezado.php"); ?>
<!---------------------TERMINA EN CABEZADO--------------------------------->
</td></tr>
<tr><td>
<!---------------------INICIA EN MENU--------------------------------->
<?php include("../complementos/menu_1.php"); ?>
<!---------------------TERMINA EN MENU--------------------------------->
</td></tr>
<tr><td><div id="AreaContenido"></div></td></tr>
<tr><td><?php include("../complementos/footer.php"); ?></td></tr>
</table>
       



</body>


</html>