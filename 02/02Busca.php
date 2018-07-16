<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();

if (!isset($_POST["Opcion"])) $_POST["Opcion"] = "";

if (trim($_POST["Opcion"]) == "BuscaJuntas")
	{
$municipio = $_POST['Municipio'];
$contar = "SELECT * FROM ma_juntas WHERE muni_jun = '".$municipio."'";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$contarok = mysqli_query($dbh,$contar);
$total_records = mysqli_num_rows($contarok);
if($total_records<=0)
{
echo "<div class='t6'>";
echo "No se encontraron JUNTAS Registradas";
echo "</div>";
} else {
echo "<div align='left' class='t6'>";
echo " ".$total_records." JUNTAS Registradas";
echo "</div>";
echo "<p>";
?>
<div id="ConIntCli"></div>
<table width="100%" border="0" cellpadding="2" cellspacing="1" class="tabla_01">
<tr class="tabla_lista_titulos">
<td>Cod.</td>
<td>Municipio</td>
<td>Nombre</td>
<td>Personería y Fecha</td>
<td>Representante</td>
<td>Estado</td>
<td>Opciones</td>
</tr>
<?php	  
while ($row = mysqli_fetch_array($contarok))
{
$codi_jun = $row["codi_jun"];
$luga_jun = $row["luga_jun"];
$muni_jun = $row["muni_jun"];
$pers_jun = $row["pers_jun"];
$codi_usu = $row["codi_usu"];
$acti_jun = $row["acti_jun"];
$dptores = "54";
?>
<tr onMouseOver="this.className = 'resaltar1'" onMouseOut="this.className = 'resaltar2'" class="tabla_lista_text">
<td width="5%"><?php echo $codi_jun; ?></td>
<td width="17%"><?php echo htmlentities(Municipio($muni_jun, 54, "nomb_mun")); ?></td>
<td width="21%"><?php echo $luga_jun; ?></td>
<td width="22%"><?php echo $pers_jun; ?></td>
<td width="29%"><?php echo htmlentities(Usuario($codi_usu, "nomb_usu")); ?> - <?php echo Usuario($codi_usu, "ndoc_usu"); ?> - <?php echo Usuario($codi_usu, "pasv_usu"); ?></td>
<td width="3%"><?php echo $acti_jun; ?></td>
<td width="3%"><table border="0" cellspacing="0" cellpadding="2">
<tr>
<td><a href="#" title="Eliminar" onclick="javascript:EliminaJunta('../02/02Core.php', 'EliminaJunta', 'log', '<?php echo $codi_jun; ?>', '<?php echo $muni_jun; ?>');"><img src="../images/eliminar.png" /></a></td>
<td><a href="#" title="Editar" onclick="javascript:MuestraJunta('../02/02Edita.php', 'MuestraJunta', 'AreaEditaJuntas', '<?php echo $codi_jun; ?>');"><img src="../images/ico_editar.png" /></a></td>
</tr>
</table></td>
</tr>

<?php } ?>

</table>
<?php } ?>


<?php } ?>
<div id="log"></div>