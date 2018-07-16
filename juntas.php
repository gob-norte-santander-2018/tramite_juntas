<?php
require "complementos/conexion.php";
include ("complementos/funciones.php");
//$dbh=conectar_bd();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="0">
<title>REPRESENTANTES</title>
<link href="styles/styles_admin.css" rel="stylesheet" type="text/css">
<style type="text/css">
body {
	font-family: Arial, Helvetica, sans-serif;
}
</style>
<script>
function mensaje_confirmar(_f)
{
var frase="¿Está seguro que desea VACIAR LA TABLA JUNTAS?";
return confirm(frase);
}
</script>
</head>
<body>




<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">

<tr>
<td><table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td width="1679" bgcolor="#F4F4F4">REPRESENTANTES</td>
<td width="175" bgcolor="#F4F4F4">


<form id="nuevo2" name="nuevo" method="post" action="">
<input name="vaciar" type="submit" class="boton_1" id="vaciar" value="VACIAR TABLA JUNTAS" onClick="return mensaje_confirmar(document.vaciar)" />
</form>
<?php
if (isset($_POST['vaciar']))
{
//echo $_POST['clasifica'];
$sql3="TRUNCATE ma_juntas;"; 
$resultado3= mysqli_query ($sql3,$dbh); 
?>
<script language="javascript1.2" type="text/javascript"> alert ("TABLA VACIADA."); </script>
<meta http-equiv="refresh" content="1">
<?php } ?>


</td>
</tr>
</table></td>
</tr>
<tr>
<td>





<form action="" method="post" name="ph2"  enctype="multipart/form-data" >
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
<tr>
<td width="502">
<table border="0" cellpadding="3" cellspacing="1">
<tr>
<td valign="middle">Archivo Plano:</td>
<td><input name="sel_file" type="file" class="textbox" id="sel_file" size="15" />
* Archivo en Formato .CSV delimitado por comas</td>
</tr>
</table>
<div align="left">
<input name="guardar" type="submit" class="boton_1" id="guardar" value="Cargar Plano" />
</div></td>
</tr>
</table>
</form>



<?php
if (isset($_POST['guardar']))
{
        //Aqui es donde seleccionamos nuestro csv
         $fname = $_FILES['sel_file']['name'];
         echo 'Cargando nombre del archivo: '.$fname.' <br>';
         $chk_ext = explode(".",$fname);
 
         if(strtolower(end($chk_ext)) == "csv")
         {
             //si es correcto, entonces damos permisos de lectura para subir
             $filename = $_FILES['sel_file']['tmp_name'];
             $handle = fopen($filename, "r");
 
             while (($data = fgetcsv($handle, 5000, ";")) !== FALSE)
             {
               
			   //separa departamento y municipio
				$nombre = $data[0];
				$personeria = $data[1];
				$cedula = $data[2];
				
				$codi_usu = UsuarioCedula($cedula, "codi_usu");
				$municipio = UsuarioCedula($cedula, "muni_usu");
				$nomb_usu = UsuarioCedula($cedula, "nomb_usu");
				$pass_usu = UsuarioCedula($cedula, "pass_usu");
	

				 $sql = "INSERT INTO ma_juntas (luga_jun, muni_jun, pers_jun, codi_usu, ndoc_usu, nomb_usu, pass_usu, acti_jun) VALUES
				('".$nombre."'
				,'".$municipio."'
				,'".$personeria."'
				,'".$codi_usu."'
				,'".$cedula."'
				,'".$nomb_usu."'
				,'".$pass_usu."'
				,'1'
				);";
                mysqli_query($sql) or die('Error: '.mysql_error());
				

	
				
             }
             //cerramos la lectura del archivo "abrir archivo" con un "cerrar archivo"
             fclose($handle);
             echo "Importacion exitosa!";
			 ?>
			 <meta http-equiv="refresh" content="1">
         <?php
         }
         else
         {
            //si aparece esto es posible que el archivo no tenga el formato adecuado, inclusive cuando es cvs, revisarlo para             
//ver si esta separado por " , "
             echo "Archivo invalido!";
         }
    }
?>


<table width="100%" border="0" cellpadding="4" cellspacing="0">
<tr>
<td><table width="100%" border="0" cellpadding="4" cellspacing="0">
<tr>
<td valign="top"></td>
</tr>
<tr>
<td valign="top"><?php
$tabla="ma_juntas";
$archivo="juntas.php";

if (!isset($_GET['pg'])) $_GET['pg'] = "";
$pg=$_GET['pg'];

if (!isset($pg))
$pg = 0;
$cantidad = 70;
$inicial = $pg * $cantidad;

//realizamos la busqueda en la base de datos
$pegar = "SELECT * FROM $tabla LIMIT $inicial,$cantidad";
$cad=mysqli_query($pegar,$dbh);


//calculamos las paginas a mostrar

$contar = "SELECT * FROM $tabla";
$contarok = mysqli_query($dbh,$contar);
$total_records = mysqli_num_rows($contarok);
$pages = intval($total_records / $cantidad);

if($total_records<=0)
{
echo "No se encontraron JUNTAS Registrados";
} else {
echo " ".$total_records." JUNTAS Registrados";
echo "<p>";
?>
<table width="100%"  cellspacing="0" cellpadding="0">
<tr>
<td width="1204"><table width="100%" border="0" cellspacing="1" cellpadding="2">
<tr class="tabla_lista_titulos">
<td>C&oacute;digo</td>
<td>Nombre</td>
<td>Presoneria y Fecha</td>
<td>Representante</td>
<td>Municipio</td>
</tr>
<?php	  

while ($row = mysqli_fetch_array($cad))
{
$codigo = $row["codi_jun"];
$luga_jun = $row["luga_jun"];
$muni_jun = $row["muni_jun"];
$pers_jun = $row["pers_jun"];
$codi_usu = $row["codi_usu"];
$ndoc_usu = $row["ndoc_usu"];
$nomb_usu = $row["nomb_usu"];
$depa_jun = 54;

?>
<form action="" method="post" name="usuario" id="usuario">
<tr onmouseover="this.className = 'resaltar1'" onmouseout="this.className = 'resaltar2'" class="tabla_lista_text">
<td width="2%"><?php echo $codigo; ?></td>
<td width="9%"><?php echo $luga_jun; ?></td>
<td width="16%"><?php echo $pers_jun; ?></td>
<td width="15%"><?php echo $ndoc_usu; echo " - ";  echo $nomb_usu; ?></td>
<td width="15%"><?php echo htmlentities(Municipio($muni_jun, $depa_jun, "nomb_mun")); ?></td>
</tr>
</form>
<?php
}
?>
</table></td>
</tr>
<tr>
<td></td>
</tr>
</table>
<?php
}
echo "<div class='t6'>";
//creando los enlaces de paginacion de resultados
echo "<p>";
if ($pg <>0)
{
$url = $pg - 1;
echo "<a href='$archivo?pg=".$url."'>&laquo; Anterior</a>&nbsp;";
}
else {
echo " ";
}
for ($i = 0; $i<($pages + 1); $i++) {
if ($i == $pg) {
echo "<b>&nbsp;$i&nbsp;</b>";
}
else {
echo "<a href='$archivo?pg=".$i."'>".$i."</a>&nbsp;";
}
}
if ($pg < $pages) {
$url = $pg + 1;
echo "<a href='$archivo?pg=".$url."'>Siguiente &raquo;</a>";
}
else {
echo " ";
}
echo "</div>";
?></td>
</tr>
</table></td>
</tr>
<tr>
<td></td>
</tr>
</table>
</td>
      </tr>
    </table>
    </td>
  </tr>
</table>
</body>
</html>