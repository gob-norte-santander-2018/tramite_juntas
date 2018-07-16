<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link href="styles/styles.css" rel="stylesheet" type="text/css">

<script src="js/javascript.js"></script>
<script src="js/moduleFunction.js"></script>
<script src="03/module03.js"></script>

<script src="complementos/alert/dist/sweetalert.min.js"></script>
<link rel="stylesheet" type="text/css" href="complementos/alert/dist/sweetalert.css" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="Degradado_Superior">
<tr>
<td width="93%" align="center" class="Degradado_cuadro" style="padding:10px;">



<table width="100%" border="0" align="center" cellpadding="2" cellspacing="8">
<tr><td><input name="certificado" id="certificado" type="text" class="inputxlarge" maxlength="20" style="width:100%;" placeholder="Número de Certificado" required="required" /></td></tr>
<tr><td><div class="fxBoton" style="width:99%;" onClick="javascript:Verifica('03/03Verifica.php', 'Verifica', 'ConCertificado', document.getElementById('certificado'));">VERIFICAR CERTIFICADO</div></td></tr>
<tr><td id="validacion" style="color:#000;"></td></tr>
</table>



</td>
</tr>
</table>



<div id="ConCertificado2" style="padding:20px;"></div>

</body>
</html>
