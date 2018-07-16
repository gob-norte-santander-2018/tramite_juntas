<?php
$contar = "SELECT * FROM ma_juntas WHERE nomb_usu LIKE 'A%' ORDER BY muni_jun;";
mysqli_query($dbh,"SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");
$contarok = mysqli_query($dbh,$contar);
$total_records = mysqli_num_rows($contarok);
if($total_records<=0)
{
echo "<div class='t6'>";
echo "No se encontraron JUNTAS Registradas";
echo "</div>";
} else {
echo "<div align='left' class='t6'>";
echo " ".$total_records." JUNTAS Registradas para Representantes que inician con la Letra A";
echo "</div>";
echo "<p>";
?>
<div id="ConIntCli"></div>
<table width="100%" border="0" cellpadding="2" cellspacing="1" class="tabla_01">
<tr class="tabla_lista_titulos">
<td>Cod.</td>
<td>Municipio</td>
<td>Tipo Lugar</td>
<td>Lugar</td>
<td>Personería</td>
<td>Representante</td>
<td>Fecha</td>
<td>Info Adicional</td>
<td>Estado</td>
<td>Opciones</td>
</tr>
<?php	  
while ($row = mysqli_fetch_array($contarok))
{
$codi_jun = $row["codi_jun"];
$luga_jun = $row["luga_jun"];
$tipl_jun = $row["tipl_jun"];
$muni_jun = $row["muni_jun"];
$pers_jun = $row["pers_jun"];
$fech_jun = $row["fech_jun"];
$codi_usu = $row["codi_usu"];
$info_jun = $row["info_jun"];
$acti_jun = $row["acti_jun"];
$dptores = "54";
?>

<tr onMouseOver="this.className = 'resaltar1'" onMouseOut="this.className = 'resaltar2'" class="tabla_lista_text">
<td width="3%"><?php echo "54".$muni_jun ; ?></td>
<td width="9%"><?php echo Municipio($muni_jun, 54, "nomb_mun"); ?></td>
<td width="8%"><?php echo TipoLugar($tipl_jun, "nomb_til"); ?></td>
<td width="24%"><?php echo $luga_jun; ?></td>
<td width="4%"><?php echo $pers_jun; ?></td>
<td width="20%"><?php echo Usuario($codi_usu, "nomb_usu"); ?></td>
<td width="7%"><?php echo $fech_jun; ?></td>
<td width="19%"><?php echo $info_jun; ?></td>
<td width="3%"><?php echo $acti_jun; ?></td>
<td width="3%"><table border="0" cellspacing="0" cellpadding="2">
<tr>
<td>fgfg<a href="#" title="Eliminar" onclick="javascript:MuestraJunta('../02/02Core.php', 'MuestraJunta', 'AreaEditaUsuario', '<?php echo $codi_jun; ?>');"><img src="../images/eliminar.png" /></a></td>
<td><a href="#" title="Editar" onclick="javascript:MuestraJunta('../02/02Edita.php', 'MuestraJunta', 'AreaEditaUsuario', '<?php echo $codi_jun; ?>');"><img src="../images/ico_editar.png" /></a></td>
<td>&nbsp;</td>
</tr>
</table>
</td>
</tr>

<?php } ?>

</table>

<?php } ?>