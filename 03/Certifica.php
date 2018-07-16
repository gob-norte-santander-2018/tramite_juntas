<?php
header('Content-Type: text/html; charset=utf-8');
session_start();

require "../complementos/conexion.php";
include ("../complementos/funciones.php");

if (!isset($_POST["M"]))
	$_POST["M"] = "";
if (!isset($_POST["C"]))
	$_POST["C"] = "";
if ($_POST["M"] == "" and $_POST["C"] == "")
	echo "";
	else
		{
	$_POST["C"];
	//$dbh=conectar_bd();
	$sql = "SELECT codi_jun, codi_usu, acti_jun FROM ma_juntas WHERE ndoc_usu = '" . trim($_POST["M"]) . "' AND pers_jun = '" . trim($_POST["C"]) . "';";
	//echo "<br>".$sql = "SELECT a.acti_usu,a.tipo_usu,b.codi_usu,b.ndoc_usu,b.nomb_usu, FROM ma_usuario a, ma_juntas b WHERE a.codi_usu = b.codi_usu  AND b.ndoc_usu = '" . $_POST["M"] . "' AND b.pers_jun = '" . $_POST["C"] . "';";
	
			$query = mysqli_query($dbh,$sql);
			$array = mysqli_fetch_array($query);
			$total = mysqli_num_rows($query);

			if ($total > 0)
				{
					$codiEst = $array['acti_jun'];
					$codiUsu = $array['codi_usu'];
					$tipoUsu = '2';
					
					if ($codiEst == 0)
						{
							echo "bl918oqu091eoComt87182tplet0";
							$_SESSION["ACTI_BIO"] = "";
							$_SESSION["CUSU_BIO"] = "";
							exit();
						}
					if ($tipoUsu == 0)
						{
							echo "no983IUSjasdUsu093A8dnimdasI";
							$_SESSION["ACTI_BIO"] = "";
							$_SESSION["CUSU_BIO"] = "";
							exit();
						}
					
					$_SESSION["ACTI_BIO"] = "278UajsjdtrhTegafW92uTeE";
					$_SESSION["CUSU_BIO"] = $array['codi_usu'];
					$_SESSION["JUNTA_BIO"] = $array['codi_jun'];
					
					echo "Opaijd0932ud81dbaksmNcjao";
				}
				else
					{
						echo "irojq8918293hjasdu821u88HSASTFtfasdsa";
						$_SESSION["ACTI_BIO"] = "";
						$_SESSION["CUSU_BIO"] = "";
					}
			mysqli_close($dbh);
		}
?>