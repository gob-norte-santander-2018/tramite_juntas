<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();
?>
<script src="../01/module01.js"></script>
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" class="tabla_01">
  <tr>
    <td></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellpadding="0" cellspacing="0" class="tabla_01">
        <tr>
          <td width="403" bgcolor="#F4F4F4"><table border="0" cellspacing="0" cellpadding="5">
            <tr>
            <td><span class="titulos_principales">Usuarios</span></td>
              <td><a href="#" onclick="javascript:getArea('../01/01Index.php', 'AreaContenido');" title="LISTAR"><img src="../images/ico_listar.png" width="30" height="30" alt="Listar" /></a></td>
              <td><a href="#" onclick="javascript:getArea('../01/01nuevo.php', 'AreaContenidoUsuario');" title="NUEVO USUARIO"><img src="../images/ico_nuevog.png" width="30" height="30" alt="Nuevo" /></a></td>
              <td>&nbsp;</td>
            </tr>
          </table></td>
          <td width="597" bgcolor="#F4F4F4">
          
<!--<table border="0" align="right" cellpadding="2" cellspacing="2">
<tr>
<td bgcolor="#F4F4F4">
<input name="palabra" id="palabra" value="" type="text" class="inputxlarge" size="40%" maxlength="80" />
</td>
<td bgcolor="#F4F4F4">
<a href="#" onClick="javascript:BuscaUsuarios('../01/01busca.php', 'BuscaUsuarios', 'AreaContenidoUsuario', document.getElementById('palabra'));"><img src="../images/examinar2.png" width="30" height="30" alt="Listar" /></a></td>
</tr>
</table>
-->  
              
              
              
<table border="0" align="right" cellpadding="2" cellspacing="2">
<tr>
<td bgcolor="#F4F4F4">
<select name="muni_jun" class="inputxlarge" id="muni_jun">
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
</select>
</td>
<td bgcolor="#E9E9E9">
<a href="#" onClick="javascript:BuscaUsuarios('../01/01busca.php', 'BuscaUsuarios', 'AreaContenidoUsuario', document.getElementById('muni_jun'));"><img src="../images/examinar2.png" width="30" height="30" alt="Listar" /></a>
</td>
</tr>
</table>            
              
              
              
              
              
              
              
              
              
              
              
              
              
</td>
        </tr>
    </table></td>
  </tr>

<tr><td id="AreaContenidoUsuario">

<?php //include ("../01/01lista.php"); ?>


</td></tr>
  <tr>
    <td></td>
  </tr>
</table>