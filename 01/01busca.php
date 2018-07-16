<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();

if (!isset($_POST["Opcion"])) $_POST["Opcion"] = "";

if (trim($_POST["Opcion"]) == "BuscaUsuarios")
	{
$municipio = $_POST['Municipio'];
$contar = "SELECT * FROM ma_usuario WHERE muni_usu = '".$municipio."' ORDER BY nomb_usu;";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
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
<div id="ConIntUsu"></div>
<table width="100%" border="0" cellpadding="2" cellspacing="1" class="tabla_01">
<tr class="tabla_lista_titulos">
<td>Cod.</td>
<td>Documento</td>
<td>Nombres</td>
<td>Tipo</td>
<td>Clave</td>
<td>Municipio</td>
<td>Opciones</td>
</tr>
<?php	  
while ($row = mysqli_fetch_array($contarok))
{
$codi_usu = $row["codi_usu"];
$documento = $row["ndoc_usu"];
$nombre = $row["nomb_usu"];
$depa_usu = $row["depa_usu"];
$muni_usu = $row["muni_usu"];
$tipousu = $row["tipo_usu"];
$pasv_usu = $row["pasv_usu"];
$dptores = "54";
?>
<tr onMouseOver="this.className = 'resaltar1'" onMouseOut="this.className = 'resaltar2'" class="tabla_lista_text">
<td width="6%"><?php echo $codi_usu; ?></td>
<td width="20%"><?php echo $documento; ?></td>
<td width="27%"><?php echo $nombre; ?></td>
<td width="21%"><?php if ($tipousu == "1"){ echo "Administrador "; } else {} ?>
<?php if ($tipousu == "2"){ echo "Representante "; } else {}  ?></td>
<td width="11%"><?php echo $pasv_usu; ?></td>

<td width="12%"><?php echo htmlentities(Municipio($muni_usu, $depa_usu, "nomb_mun")); ?></td>
<td width="3%"><table border="0" cellspacing="0" cellpadding="2">
<tr>
<td><a href="#" title="Eliminar" onclick="javascript:EliminaUser('../01/01Core.php', 'EliminaUser', 'log', '<?php echo $codi_usu; ?>', '<?php echo $muni_usu; ?>');"><img src="../images/eliminar.png" /></a></td>
<td><a href="#" title="Editar" onclick="javascript:MuestraUser('../01/01Edita.php', 'MuestraUser', 'ConIntUsu', '<?php echo $codi_usu; ?>');"><img src="../images/ico_editar.png" /></a></td>
</tr>
</table></td>
</tr>

<?php } ?>

</table>
<?php } ?>


<?php } ?>
<div id="log"></div>