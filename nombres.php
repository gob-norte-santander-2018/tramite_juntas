<?php
require "complementos/conexion.php";
include ("complementos/funciones.php");
//$dbh=conectar_bd();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta http-equiv="Expires" content="0">
<title></title>
<link href="../styles/styles.css" rel="stylesheet" type="text/css">

</head>

<body>


<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" class="tabla_01">
  <tr>
    <td>
    
    

<table width="100%" border="0" cellpadding="4" cellspacing="0" class="tabla_01">
<tr>
<td>
<?php
$contar = "SELECT a.codi_usu,b.codi_usu,a.ndoc_usu,a.nomb_usu,b.codi_jun FROM ma_usuario a, ma_juntas b WHERE a.codi_usu = b.codi_usu AND b.nomb_usu = '' ORDER BY b.nomb_usu;";
$contarok = mysqli_query($dbh,$contar);
$total_records = mysqli_num_rows($contarok);
if($total_records<=0)
{
echo "<div class='t6'>";
echo "No se encontraron USUARIOS Registrados";
echo "</div>";
} else {
echo "<div align='left' class='t6'>";
echo " ".$total_records." USUARIOS Registrados";
echo "</div>";
echo "<p>";
?>

<table width="100%" cellpadding="0" cellspacing="0" class="tabla_01">

<tr>

<td width="67%">




<form name="usuarios" enctype="multipart/form-data" action="" method="post"> 
<table width="100%" border="0" cellpadding="2" cellspacing="1" style="border:1px thin #999;">
<tr>
<td>Cod.</td>
<td>Documento</td>
<td>Nombre</td>
<td>codido Junta</td>
</tr>

<?php	  
while ($row = mysqli_fetch_array($contarok))
{
$codigo = $row["codi_usu"];
$documento = $row["ndoc_usu"];
$nombres = $row["nomb_usu"];
$codi_jun = $row["codi_jun"];
?>



<tr>

<td width="4%"><input name="codigo[]" id="codigo[]" type="hidden" value="<?php echo $codigo; ?>" /><?php echo $codigo; ?></td>

<td width="8%"><input name="documento[]" id="documento[]" type="hidden" value="<?php echo $documento; ?>" /><?php echo $documento; ?></td>

<td width="19%"><input name="nombres[]" id="nombres[]" type="hidden" value="<?php echo $nombres; ?>" /><?php echo $nombres; ?></td>

<td width="15%"><?php echo $codi_jun; ?></td>
</tr>

<?php } } ?>

</table>

<input name="guardar" type="submit" class="boton_1" id="guardar" value="guardar"/>

</form>

</td>

</tr>

<tr>

<td></td>

</tr>

</table>
<?php
if (isset($_POST['guardar']))
{
$recibo = $_POST["codigo"];
$cuenta = count($recibo);
for ($i=0; $i < $cuenta; $i++) {
$codigo = $_POST["codigo"];
$documento = $_POST["documento"];
$nombres = $_POST["nombres"];



$nume = "UPDATE ma_juntas SET ndoc_usu = '$documento[$i]', nomb_usu = '$nombres[$i]' WHERE codi_usu = '$codigo[$i]'";
//$nume = "UPDATE usuarios_adicionales SET acud_est = '$codigo[$i]' WHERE acud_est = '$documento[$i]'";
//$nume = "UPDATE asignatura_curso_docente SET codi_doc = '$codigo[$i]' WHERE codi_doc = '$documento[$i]'";

//$nume = "UPDATE usuarios SET codi_int = '$codigo[$i]' WHERE docu_usu = '$documento[$i]'";
$resultado = mysqli_query ($nume,$dbh);
}
?>
<script language="javascript1.2" type="text/javascript">
alert ("ACTUALIZADOS CON Exito.");
</script>
<meta http-equiv="refresh" content="1">
<?php } ?>
</td>
</tr>
</table>
</td>
  </tr>
  <tr>
    <td></td>
  </tr>
</table>

</body>

</html>