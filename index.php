<?php
require "complementos/conexion.php";
$dbh=conectar_bd();
date_default_timezone_set('America/Bogota'); //PHP 7 se dene definir
?>
<div id="divCentralPdf" style="visibility:hidden; border:2px solid #9C0; position:fixed; z-index:100; background-color:#f0f0f0;" class="divCentralPdf"></div>
<div id="ContenedorMsn" style="visibility:hidden; z-index:100; font-family:Tahoma; font-size:11px; color:#000; top:0px; text-align:center; position:fixed;"" class="divCentroHorizontal"></div>
<div id="capaMsnAlert" style="visibility:hidden; position:fixed; " class="divCentralMsnAlert"></div>
<div id="pantalla_xtra" onClick="javascript:ocultaVentana('divCentralPdf'); desbloquearPantalla(); cerrarMsnAlert();" style="width:100%; height:100%; top:0px; left:0px; position:fixed; visibility:hidden; z-index:99;"></div>
<div id="msn" style=" position:absolute;"></div>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link href="styles/styles.css" rel="stylesheet" type="text/css">

<script src="js/javascript.js"></script>
<script src="js/moduleFunction.js"></script>
<script src="03/module03.js"></script>

<script src="complementos/alert/dist/sweetalert.min.js"></script>

<script>
function imprimir(que) {
var ventana = window.open("", "", "");
var contenido = "<html><title>CERTIFICADO EN LÍNEA</title><link href='../styles/styles.css' rel='stylesheet' type='text/css'><body onload='window.print();window.close();'>" + document.getElementById(que).innerHTML + "</body></html>";
ventana.document.open();
ventana.document.write(contenido);
ventana.document.close();
}
</script>
<script language="javascript" type="text/javascript">  
 function MostrarFecha()  
       {  
       var nombres_dias = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado")  
       var nombres_meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")  
      
       var fecha_actual = new Date()  
      
       dia_mes = fecha_actual.getDate()
       dia_semana = fecha_actual.getDay()
       mes = fecha_actual.getMonth() + 1  
       anio = fecha_actual.getFullYear()  
       document.write(nombres_dias[dia_semana] + ", " + dia_mes + " de " + nombres_meses[mes - 1] + " de " + anio)  
       }  
    </script> 
<link rel="stylesheet" type="text/css" href="complementos/alert/dist/sweetalert.css" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0" >
<tr>
<td width="93%" align="center" style="padding:10px;"><p><img src="images/logocer.jpg" width="364" height="135" /></p>
<table width="100%" border="0" cellspacing="0" cellpadding="10">
<tr>
<td><div class="fxBoton" style="width:99%;" onClick="javascript:getArea('01cer.php', 'ConCertificado');">SOLICITAR CERTIFICADO</div></td>
<td><div class="fxBoton" style="width:99%;" onClick="javascript:getArea('02cer.php', 'ConCertificado');">VERIFICAR CERTIFICADO</div></td>
</tr>
</table></td>
</tr>
</table>
</td>
</tr>
</table>
<div id="ConCertificado" style="padding:20px;">
<p class="txtcer1">&nbsp;</p>





<?php
$dbh = mysqli_connect("localhost", "root", "aiomio");
mysqli_select_db($dbh, "tramite");
$sql = "SELECT nomb_usu FROM ma_usuario LIMIT 4;";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$datos = mysqli_query($dbh,$sql);
$total = mysqli_num_rows($datos);
if ($total > 0)
{
while ($registro = mysqli_fetch_array($datos))
{
echo "<br/>".$nombre = $registro['nomb_usu'];
}
}
//pruba desde sftp
?>






<p class="txtcer1">Bienvenido al sistema de generaci&oacute;n y verificaci&oacute;n de certificados de Juntas de Acci&oacute;n Comunal de los Municipios del Departamento Norte de Santander, esta aplicaci&oacute;n est&aacute; dirigida a los representantes de las Juntas y busca respaldar su administraci&oacute;n con un documento oficial y generado totalmente en l&iacute;nea, Por favor haga clic en la opci&oacute;n que desee e ingrese los datos que se solicitan.
</p>
</div>

</body>
</html>
