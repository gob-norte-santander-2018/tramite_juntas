<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();
?>
<?php
$letrallega = $_POST["Letra"];
$letra = $letrallega."%";
$contar = "SELECT * FROM ma_certificados WHERE nomb_usu LIKE '$letra' AND veri_cer = '0';";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$contarok = mysqli_query($dbh,$contar);
$totales = mysqli_num_rows($contarok);

if($totales<=0)
{
echo "<div class='t6'>";
echo "No se encontraron CERTIFICADOS SOLICITADOS Registrados";
echo "</div>";
} else {
echo "<div align='left' class='t6'>";
echo " ".$totales." CERTIFICADOS SOLICITADOS Registrados para Representantes que inician con la Letra ".$letrallega;
echo "</div>";
echo "<p>";
?>
<div id="AreaEditaUsuario"></div>
<table width="100%" border="0" cellpadding="2" cellspacing="1" class="tabla_01">
<tr class="tabla_lista_titulos">
<td>Cod.</td>
<td>Docu. Rep.</td>
<td>Nombre</td>
<td>Fecha</td>
<td>IP</td>
<td>Número</td>
<td>Junta</td>
</tr>
<?php	  
while ($row = mysqli_fetch_array($contarok))
{
$codi_cer = $row["codi_cer"];
$codi_usu = $row["codi_usu"];
$ndoc_usu = $row["ndoc_usu"];
$nomb_usu = $row["nomb_usu"];
$codi_jun = $row["codi_jun"];
$ipso_cer = $row["ipso_cer"];
$nume_cer = $row["nume_cer"];
$fech_cer = $row["fech_cer"];
$dptores = "54";
?>
<tr onMouseOver="this.className = 'resaltar1'" onMouseOut="this.className = 'resaltar2'" class="tabla_lista_text">
<td width="7%"><?php echo $codi_cer ; ?></td>
<td width="7%"><?php echo $ndoc_usu; ?></td>
<td width="24%"><?php echo htmlentities($nomb_usu); ?></td>
<td width="20%"><?php echo $fech_cer; ?></td>
<td width="8%"><?php echo $ipso_cer; ?></td>
<td width="11%"><?php echo $nume_cer; ?></td>
<td width="23%"><?php 
$codi_jun; 
$junta = Junta($codi_jun, "luga_jun"); 
$muni = Junta($codi_jun, "muni_jun");
$munici = Municipio($muni, $dptores, "nomb_mun");
echo htmlentities($junta)." de ".htmlentities($munici);

 ?></td>
</tr>








<?php } ?>
</table>
<?php } ?>