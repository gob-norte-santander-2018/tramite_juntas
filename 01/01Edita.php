<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();
?>
<?php
$codigo = $_POST["Usuario"];
$contar = "SELECT codi_usu, ndoc_usu, nomb_usu, depa_usu, muni_usu, tipo_usu FROM ma_usuario WHERE codi_usu = '".$codigo."';";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$contarok = mysqli_query($dbh,$contar);
$total_records = mysqli_num_rows($contarok);
$row = mysqli_fetch_array($contarok);
$codi_usu = $row["codi_usu"];
$documento = $row["ndoc_usu"];
$nombre = $row["nomb_usu"];
$depa_usu = $row["depa_usu"];
$muni_usu = $row["muni_usu"];
$tipousu = $row["tipo_usu"];
$pasv_usu = $row["pasv_usu"];
$acti_usu = $row["acti_usu"];
$dptores = "54";
if ($tipousu == 1) { $estado1 = 'selected=selected'; } else {}
if ($tipousu == 2) { $estado2 = 'selected=selected'; } else {}
?>
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
  <tr>
    <td>
      <table border="0" cellpadding="3" cellspacing="1" class="textonormal">
        <tr>
          <td><input name="ndoc_usu" type="text" class="inputxlarge" id="ndoc_usu" size="20" maxlength="20" placeholder="Número de Documento" value="<?php echo $documento; ?>"/></td>
<td><select name="tipo_usu" class="inputxlarge" id="tipo_usu">
<option value="1" <?php echo $estado1; ?>>Administrador</option>
<option value="2" <?php echo $estado2; ?>>Representante</option>
</select></td>
<td><div class="fxBoton" style="width:100%;" onclick="javascript:EditaUser('../01/01Core.php', 'EditaUser', 'ConIntUsu', <?php echo $codi_usu; ?>, document.getElementById('ndoc_usu'), document.getElementById('nomb_usu'), document.getElementById('municipio'), document.getElementById('tipo_usu'), document.getElementById('acti_usu'));">EDITAR</div></td>
<td><div class="fxBoton" style="width:100%;" onclick="javascript:getArea('../02/vacio.php', 'ConIntUsu');">X</div></td>
          </tr>
        <tr>
<td><input name="nomb_usu" type="text" class="inputxlarge" id="nomb_usu" size="40" maxlength="120" placeholder="Nombre Usuario" value="<?php echo $nombre; ?>"//></td>
<td><select name="acti_usu" class="inputxlarge" id="acti_usu">
<option value="1" <?php if ($acti_usu == "1") { echo 'selected="selected"'; } else {} ?>>Activar</option>
<option value="0"<?php if ($acti_usu == "0") { echo 'selected="selected"'; } else {} ?>>No Activar</option>
</select></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
  <td><select name="municipio" class="inputxlarge" id="municipio">
<option value="0">Municipio...</option>
<?php
$sql = "SELECT * FROM tb_municipio;";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$datos = mysqli_query($dbh,$sql);
$total = mysqli_num_rows($datos);

if ($total > 0)
{
while ($registro = mysqli_fetch_array($datos))
{
$codigo = $registro['codi_mun'];
$nombre = $registro['nomb_mun'];
$seleccion = "";
if ($codigo == $muni_usu)
	$seleccion = 'selected="selected"';
?>
<option value="<?php echo $codigo; ?>" <?php echo $seleccion; ?>> <?php echo $nombre; ?></option>
<?php
}
}
?>
</select></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</table></td>
</tr>
</table>




<?php
mysqli_close($dbh);
?>