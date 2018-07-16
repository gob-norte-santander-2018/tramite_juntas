<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();
?>
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
  <tr>
    <td>
      <table border="0" cellpadding="3" cellspacing="1" class="textonormal">
        <tr>
          <td><input name="ndoc_usu" type="text" class="inputxlarge" id="ndoc_usu" size="20" maxlength="20" placeholder="Número de Documento" /></td>
          </tr>
        <tr>
          <td><input name="nomb_usu" type="text" class="inputxlarge" id="nomb_usu" size="40" maxlength="120" placeholder="Nombre Usuario"/></td>
          </tr>
        <tr>
          <td><select name="muni_usu" class="inputxlarge" id="muni_usu">
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
				if ($codigo == $munidoc)
					$seleccion = 'selected="selected"';
				?>
<option value="<?php echo $codigo; ?>" <?php echo $seleccion; ?>><?php echo $codigo; ?> - <?php echo $nombre; ?></option>
<?php
			}
	}
?>
</select></td>
          </tr>
<tr>
  <td bgcolor="#FFFFFF"><select name="tipo_usu" class="inputxlarge" id="tipo_usu">
<option selected="selected">Tipo de Usuario</option>
<option value="1">Administrador</option>
<option value="2">Representante</option>
</select></td>
</tr>
        <tr>
          <td bgcolor="#FFFFFF"><select name="acti_usu" class="inputxlarge" id="acti_usu">
<option value="1" selected="selected">Activar</option>
<option value="0">No Activar</option>
</select></td>
        </tr>
      </table>
<div class="fxBoton" style="width:100%;" onClick="javascript:NuevoUsuario('../01/01Core.php', 'NuevoUsuario', 'AreaContenidoUsuario', document.getElementById('ndoc_usu'), document.getElementById('nomb_usu'), document.getElementById('muni_usu'), document.getElementById('tipo_usu'), document.getElementById('acti_usu'));">GUARDAR DATOS</div>

</td>
</tr>
</table>







<?php mysqli_close($dbh); ?>
