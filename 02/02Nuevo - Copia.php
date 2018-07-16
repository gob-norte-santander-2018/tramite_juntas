<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
//$dbh=conectar_bd();
?>

<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
  <tr>
    <td>
      <table border="0" cellpadding="3" cellspacing="1" class="textonormal">
        <tr>
          <td><input name="luga_jun" type="text" class="inputxlarge" id="luga_jun" size="40" maxlength="120" placeholder="Nombre del Lugar" /></td>
          </tr>
        <tr>
<td><select name="municipio" class="inputxlarge" id="municipio" onChange="javascript:Representantes('../02/02Representantes.php', 'ConteRepre', 'ComboRepre', document.getElementById('municipio'), '', '');">
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
<option value="<?php echo $codigo; ?>" <?php echo $seleccion; ?>> <?php echo $nombre; ?></option>
<?php
			}
	}
?>
</select></td>
</tr>
<tr>
<td id="ConteRepre"><select name="usuario" class="inputxlarge" id="usuario">
<option value="0">Usuarios Representantes...</option>
</select></td>
</tr>
<tr>
  <td>
          
          
          
<select name="tipl_jun" class="inputxlarge" id="tipl_jun">
<option value="0">Tipo Junta...</option>
<?php
$sql = "SELECT * FROM tb_tipo_lugar;";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

$datos = mysqli_query($dbh,$sql);
$total = mysqli_num_rows($datos);
	
if ($total > 0)
	{
		while ($registro = mysqli_fetch_array($datos))
			{
				$codigo = $registro['codi_til'];
				$nombre = $registro['nomb_til'];
				$seleccion = "";
				if ($codigo == $coditil)
					$seleccion = 'selected="selected"';
				?>
<option value="<?php echo $codigo; ?>" <?php echo $seleccion; ?>> <?php echo $nombre; ?></option>
<?php
			}
	}
?>
</select>
            
            
            
            
            
            
            
    </td>
  </tr>
        <tr>
          <td><input name="pers_jun" type="text" class="inputxlarge" id="pers_jun" size="10" maxlength="6" placeholder="Personería" /></td>
          </tr>
<tr>
<td>

<input name="fech_jun" class="inputxlarge" id="fech_jun" size="10" placeholder="Fecha Fundada" type="date"/>
<!--<input name="fech_jun" class="inputxlarge" id="fech_jun" size="10" placeholder="Fecha Fundada" readonly/>-->
<!--<script type="text/javascript">
var cal = Calendar.setup({
onSelect: function(cal) { cal.hide() }
});
cal.manageFields("fech_jun", "fech_jun", "%Y-%m-%d");
</script>-->




</td>
</tr>
<tr>
  <td><input name="info_jun" type="text" class="inputxlarge" id="info_jun" size="60" maxlength="250" placeholder="Información Adicional"/></td>
  </tr>
<tr>
<td>

<select name="acti_jun" class="inputxlarge" id="acti_jun">
<option value="1" selected="selected">Activar</option>
<option value="0">No Activar</option>
</select>
            
</td>
</tr>
</table>


<div class="fxBoton" style="width:98%;" onclick="javascript:NuevaJunta('../02/02Core.php', 'NuevaJunta', 'log', document.getElementById('luga_jun'), document.getElementById('tipl_jun'), document.getElementById('municipio'), document.getElementById('pers_jun'), document.getElementById('fech_jun'), document.getElementById('usuario'), document.getElementById('info_jun'), document.getElementById('acti_jun'));">GUARDAR DATOS</div>


</td>
</tr>
</table>


<div id="log"></div>

<script>
Representantes('../02/02Representantes.php', 'contenidoMunicipio1', 'ComboMunicipio1', document.getElementById('pais'), 'estado', '');
</script>
<?php mysqli_close($dbh); ?>
