<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php /*session_start(); $yo = $_SESSION["CODIGO_USUARIO"]; 
session_destroy(); $yo = $_SESSION["CODIGO_USUARIO"];
if (!empty($yo)) { echo "RECIENTEMENTE SE CERRO MAL LA SESION, DEBE SIEMPRE HACER CLIC EN EL BOTON Cerrar Sesión"; ?> 
<meta http-equiv="refresh" content="5;url=index.html">

<? } else { */
date_default_timezone_set('America/Bogota'); //PHP 7 se dene definir
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title><?php echo $TITLE; ?></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="-1" />
<link href="styles/styles.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" href="images/favicon.ico" />
<script src="js/jquery.js" type="text/javascript"></script>
<script> 
$(document).ready(function(){
    $(document).bind("contextmenu",function(e){
        return false;
    });
}); 
</script>
</head>
<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="Degradado_Superior">
<tr>
<td align="center" class="Degradado_cuadro" style="padding:10px;"><img src="images/logo2.png" width="690" height="49" /></td>
</tr>
<tr>
<td width="93%" align="center" class="Degradado_cuadro" style="padding:10px;">



<form action="complementos/control.php" method="post" name="aut" id="aut">
<table align="center" cellspacing="0" cellpadding="2" border="0">
  <tr>
      <td colspan="3" align="center"><font face="Arial, Helvetica, sans-serif">
        <?php 
		$errorusuario = isset($_GET['errorusuario']) ? $_GET['errorusuario'] : null ;
		if ($errorusuario!="si")
		{ 
		
		echo "<span class='textonormal'>Ingrese sus datos de acceso</span>";
		} 
		else 
			{ 
			echo "<span class='textonormal'>Datos erroneos</span>";
			}
	?>
      </font></td>
</tr>
    <tr>
      <td><input name="usuario" type="text" class="bordersi" size="20" maxlength="20" placeholder="Usuario" /></td>
<td><input name="contrasena" type="password" class="bordersi" size="20" maxlength="20" placeholder="Contraseña" /></td>
<td><input name="enviar" type="submit" class="boton_1"  value="Entrar" /></td>
    </tr>
</table>
</form>

<?php 
/*echo $fecha_now = date("Y-m-d h:m:s");
echo " = ";
echo $fechamoodle = strtotime($fecha_now); 
*/
$fecha = strtotime("now");
//echo " = ";
//echo date('d/m/Y', 1363734165);//} ?>















</td>
</tr>
</table>

</body>
</html>
