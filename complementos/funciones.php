<?php
function Junta($codigo, $campo)
{
	$dbh = conectar_bd();
	//$dbh = mysqli_connect("localhost", "root", "aiomio");
        //mysqli_select_db($dbh, "tramite");
	$sql = "SELECT $campo FROM ma_juntas WHERE codi_jun = '" . $codigo . "';";
	$query = mysqli_query($dbh,$sql);
	$array = mysqli_fetch_array($query);
        mysqli_close($dbh);
	return $array[$campo];
	 
}


function JuntaUsuario($codigo, $campo)
{
	$dbh = conectar_bd();
	$sql = "SELECT $campo FROM ma_juntas WHERE codi_usu = '" . $codigo . "';";
	$query = mysqli_query($dbh,$sql);
	$array = mysqli_fetch_array($query);
        mysqli_close($dbh);
	return $array[$campo]; 
}


function JuntaUsuarioPass($codigo1, $codigo2, $campo)
{
	$dbh = conectar_bd();
	$sql = "SELECT $campo FROM ma_juntas WHERE pass_usu = '" . $codigo1 . "' AND ndoc_usu = '" . $codigo2 . "';";
	$query = mysqli_query($dbh,$sql);
	$array = mysqli_fetch_array($query);
        mysqli_close($dbh);
	return $array[$campo];
	 
}


function Usuario($codigo, $campo)
{
	$dbh = conectar_bd();
	$sql = "SELECT $campo FROM ma_usuario WHERE codi_usu = '" . $codigo . "';";
	$query = mysqli_query($dbh,$sql);
	$array = mysqli_fetch_array($query);
        mysqli_close($dbh); 
	return $array[$campo];
	
}

function UsuarioCedula($codigo, $campo)
{
	$dbh = conectar_bd();
	$sql = "SELECT $campo FROM ma_usuario WHERE ndoc_usu = '" . $codigo . "';";
	$query = mysqli_query($dbh,$sql);
	$array = mysqli_fetch_array($query);
        mysqli_close($dbh); 
        return $array[$campo];
}
	
	



function Departamento($codigo, $campo)
{
	$dbh = conectar_bd();
	$sql = "SELECT $campo FROM tb_departamento WHERE codi_dep = '" . $codigo . "';";
	$query = mysqli_query($dbh,$sql);
	$array = mysqli_fetch_array($query);
        mysqli_close($dbh);
	return $array[$campo];
	 
}


function TipoLugar($codigo, $campo)
{
	$dbh = conectar_bd();
	$sql = "SELECT $campo FROM tb_tipo_lugar WHERE codi_til = '" . $codigo . "';";
	$query = mysqli_query($dbh,$sql);
	$array = mysqli_fetch_array($query);
        mysqli_close($dbh); 
	return $array[$campo];
	
}
function Municipio($muni, $depa, $campo)
{
	$dbh = conectar_bd();
	$sql = "SELECT $campo FROM tb_municipio WHERE codi_mun = '" . $muni . "'AND codi_dep  = '" . $depa . "';";
	$query = mysqli_query($dbh,$sql);
	$array = mysqli_fetch_array($query);
        mysqli_close($dbh);
	return $array[$campo];
	 
}


function FunCPSMes($mes) //26/01/2012
	{
		$resultado = "";
		if ($mes == "01") $resultado = "Enero";
		if ($mes == "02") $resultado = "Febrero";
		if ($mes == "03") $resultado = "Marzo";
		if ($mes == "04") $resultado = "Abril";
		if ($mes == "05") $resultado = "Mayo";
		if ($mes == "06") $resultado = "Junio";
		if ($mes == "07") $resultado = "Julio";
		if ($mes == "08") $resultado = "Agosto";
		if ($mes == "09") $resultado = "Septiembre";
		if ($mes == "10") $resultado = "Octubre";
		if ($mes == "11") $resultado = "Noviembre";
		if ($mes == "12") $resultado = "Diciembre";
		return $resultado;
	}

if (!isset($_POST["Option"])) $_POST["Option"] = "";
if ($_POST["Option"] == "ComboMunicipio1")
	{
		?>
		<select id="estado" name="estado" class="textbox">
        <option value="0">Selecciona Uno...</option>
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
		<select id="estado2" name="estado2" class="textbox">
        <option value="0">Selecciona Uno...</option>
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
		<select id="estado3" name="estado3" class="textbox">
        <option value="0">Selecciona Uno...</option>
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
		<select id="estado4" name="estado4" class="textbox">
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