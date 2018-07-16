<?php
//require "complementos/conexion.php";
////$dbh=conectar_bd();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

</head>
<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="Degradado_Superior">
<tr>
<td width="93%" align="center" class="Degradado_cuadro" style="padding:10px;">



<table width="100%" border="0" align="center" cellpadding="2" cellspacing="8">
<tr><td><input name="cedula" id="cedula" type="text" class="inputxlarge" maxlength="20" style="width:100%;" placeholder="Cédula Representante" required="required" /></td></tr>
<tr><td><input name="contrasena" id="contrasena" type="text" class="inputxlarge" maxlength="6" style="width:100%;" placeholder="Clave" required="required" /></td></tr>
<tr><td><div class="fxBoton" style="width:99%;" onClick="javascript:Ingresar('03/03Certificado.php', 'Ingresar', 'ConCertificado', document.getElementById('cedula'), document.getElementById('contrasena'));">SOLICITAR CERTIFICADO</div></td></tr>
<tr><td id="validacion" style="color:#000;"></td></tr>
</table>

</td>
</tr>
</table>





<div id="ConCertificado2" style="padding:20px;"></div>










</td>
</tr>
</table>

</body>
</html>
