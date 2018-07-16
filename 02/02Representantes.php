<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();
?>
<?php
if (!isset($_POST["Option"])) $_POST["Option"] = "";
if ($_POST["Option"] == "ComboRepre")
	{
?>       
<select name="usuario" class="inputxlarge" id="usuario">
<option value="0">Usuarios Representantes...</option>
<?php
$MuniLlega = $_POST["Municipio"];
echo $sql = "SELECT * FROM ma_usuario WHERE muni_usu = '".$MuniLlega."';";
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
				if ($codigo == $munidoc)
					$seleccion = 'selected="selected"';
				?>
<option value="<?php echo $codigo; ?>" <?php echo $seleccion; ?>><?php echo $cedula; ?> - <?php echo $nombre; ?></option>
<?php
			}
	}
?>
</select>  
        
        
        
        
        
        
        
        
		<?php
	}

mysqli_close($dbh); ?>
