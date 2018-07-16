<?php
header('Content-Type: text/html; charset=iso-8859-1');
require "../complementos/conexion.php";
//$dbh=conectar_bd();

if (!isset($_POST["Option"])) $_POST["Option"] = "";
if ($_POST["Option"] == "ComboMunicipio1")
	{
		?>
		&nbsp;&nbsp;&nbsp;<select id="municipio1" name="municipio1" class="inputxlarge">
        <option value="0">Municipio...</option>
        <?php
		$dpto1 = $_POST["Dep1"];
        $sql = "SELECT * FROM tb_municipio WHERE codi_est = '1' AND codi_dep = '$dpto1' ORDER BY nomb_mun;";
        $datos = mysqli_query($dbh,$sql);
        $total = mysqli_num_rows($datos);
            
        if ($total > 0)
            {
                while ($registro = mysqli_fetch_array($datos))
                    {
                        $codigo = $registro['codi_mun'];
                        $nombre = $registro['nomb_mun'];
                        ?>
                        <option value="<?php echo $codigo; ?>"><?php echo $nombre; ?></option>
                        <?php
                    }
            }
        ?>
        </select>
		<?php
	}

if ($_POST["Option"] == "ComboMunicipio2")
	{
		?>
		&nbsp;&nbsp;&nbsp;<select id="municipio2" name="municipio2" class="inputxlarge">
        <option value="0">Municipio...</option>
        <?php
        $dpto2 = $_POST["Dep2"];
        $sql = "SELECT * FROM tb_municipio WHERE codi_est = '1' AND codi_dep = '$dpto2' ORDER BY nomb_mun;";
        $datos = mysqli_query($dbh,$sql);
        $total = mysqli_num_rows($datos);
            
        if ($total > 0)
            {
                while ($registro = mysqli_fetch_array($datos))
                    {
                        $codigo = $registro['codi_mun'];
                        $nombre = $registro['nomb_mun'];
                        ?>
                        <option value="<?php echo $codigo; ?>"><?php echo $nombre; ?></option>
                        <?php
                    }
            }
        ?>
        </select>
		<?php
	}

if ($_POST["Option"] == "ComboMunicipio3")
	{
		?>
		&nbsp;&nbsp;&nbsp;<select id="municipio3" name="municipio3" class="inputxlarge">
        <option value="0">Municipio...</option>
        <?php
        $dpto3 = $_POST["Dep3"];
        $sql = "SELECT * FROM tb_municipio WHERE codi_est = '1' AND codi_dep = '$dpto3' ORDER BY nomb_mun;";
        $datos = mysqli_query($dbh,$sql);
        $total = mysqli_num_rows($datos);
            
        if ($total > 0)
            {
                while ($registro = mysqli_fetch_array($datos))
                    {
                        $codigo = $registro['codi_mun'];
                        $nombre = $registro['nomb_mun'];
                        ?>
                        <option value="<?php echo $codigo; ?>"><?php echo $nombre; ?></option>
                        <?php
                    }
            }
        ?>
        </select>
		<?php
	}

if ($_POST["Option"] == "ComboMunicipio4")
	{
		?>
		<select id="municipio4" name="municipio4" class="textbox">
        <option value="0">Selecciona Uno...</option>
        <?php
        $dpto4 = $_POST["Dep4"];
        $sql = "SELECT * FROM tb_municipio WHERE codi_dep = '$dpto4' ORDER BY nomb_mun;";
        $datos = mysqli_query($dbh,$sql);
        $total = mysqli_num_rows($datos);
            
        if ($total > 0)
           {
                while ($registro = mysqli_fetch_array($datos))
                    {
                        $codigo = $registro['codi_mun'];
                        $nombre = $registro['nomb_mun'];
                        ?>
                        <option value="<?php echo $codigo; ?>"><?php echo $nombre; ?></option>
                        <?php
                    }
            }
        ?>
        </select>
		<?php
	}
	
?>