<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();
?>
<?php
$codigo = $_POST["Junta"];
$contar = "SELECT * FROM ma_juntas WHERE codi_jun = '".$codigo."';";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$contarok = mysqli_query($dbh,$contar);
$total_records = mysqli_num_rows($contarok);
$row1 = mysqli_fetch_array($contarok);
$codi_jun = $row1["codi_jun"];
$luga_jun = $row1["luga_jun"];
$tipl_jun = $row1["tipl_jun"];
$muni_jun = $row1["muni_jun"];
$pers_jun = $row1["pers_jun"];
$fech_jun = $row1["fech_jun"];
$codi_usu = $row1["codi_usu"];
$info_jun = $row1["info_jun"];
$acti_jun = $row1["acti_jun"];
$dptores = "54";
?>
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
  <tr>
    <td>
      <table border="0" cellpadding="3" cellspacing="1" class="textonormal">
        <tr>
          <td><input name="luga_jun" type="text" class="inputxlarge" id="luga_jun" size="30" maxlength="120" value="<?php echo $luga_jun;  ?>" placeholder="Nombre del Lugar" /></td>
<td><input name="pers_jun" type="text" class="inputxlarge" id="pers_jun" size="30" maxlength="60" placeholder="Personería" value="<?php echo $pers_jun;  ?>"/></td>
<td><div class="fxBoton" style="width:100%;" onclick="javascript:EditaJuntas('../02/02Core.php', 'EditaJuntas', 'AreaEditaJuntas', <?php echo $codi_jun; ?>, document.getElementById('luga_jun'), <?php echo $muni_jun; ?>, document.getElementById('pers_jun'), document.getElementById('codi_usu'), document.getElementById('acti_jun'));">EDITAR</div></td>
<td><div class="fxBoton" style="width:100%;" onclick="javascript:getArea('../02/vacio.php', 'AreaEditaJuntas');">X</div></td>
          </tr>
        <tr>
<td><select name="codi_usu" class="inputxlarge" id="codi_usu" style="width:280px;">
<option value="0">Usuarios Representantes...</option>
<?php
$sql = "SELECT * FROM ma_usuario WHERE tipo_usu = '2' AND muni_usu = '".$muni_jun."';";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$datos = mysqli_query($dbh,$sql);
$total = mysqli_num_rows($datos);
if ($total > 0)
{
while ($registro = mysqli_fetch_array($datos))
{
$codigo = $registro['codi_usu'];
$cedula = $registro['ndoc_usu'];
$nombre = $registro['nomb_usu'];
$seleccion = "";
if ($codigo == $codi_usu)
$seleccion = 'selected="selected"';
?>
<option value="<?php echo $codigo; ?>" <?php echo $seleccion; ?>><?php echo $cedula; ?> - <?php echo $nombre; ?></option>
<?php
}
}
?>
</select></td>
<td><select name="acti_jun" class="inputxlarge" id="acti_jun">
<option value="1" <?php if ($acti_jun == "1") { echo 'selected="selected"'; } else {} ?>>Activar</option>
<option value="0"<?php if ($acti_jun == "0") { echo 'selected="selected"'; } else {} ?>>No Activar</option>
</select></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</table></td>
</tr>
</table>




<?php
mysqli_close($dbh);
?>