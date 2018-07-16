<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();
?>
<script src="../02/module02.js"></script>
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" class="tabla_01">
  <tr>
    <td></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellpadding="0" cellspacing="0" class="tabla_01">
        <tr>
          <td width="403" bgcolor="#F4F4F4"><table border="0" cellspacing="0" cellpadding="5">
            <tr>
            <td><span class="titulos_principales">Juntas</span></td>
              <td>
              
              
              
<!--              <a href="#" onclick="javascript:getArea('../02/02Index.php', 'AreaContenido');"><img src="../images/ico_listar.png" width="30" height="30" alt="Listar" /></a>
-->              
              
              
<a href="#" onclick="javascript:getArea('../02/02Index.php', 'AreaContenido');"><img src="../images/ico_listar.png" width="30" height="30" alt="Listar" /></a>


</td>
              <td><a href="#" onclick="javascript:getArea('../02/02Nuevo.php', 'AreaContenidoCliente');" title="NUEVO"><img src="../images/ico_nuevog.png" width="30" height="30" alt="Nuevo" /></a></td>
              <td>&nbsp;</td>
            </tr>
          </table></td>
          <td width="597" bgcolor="#F4F4F4">
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
<option value="<?php echo $codigo; ?>" <?php echo $seleccion; ?>> <?php echo $nombre; ?></option>
<?php
			}
	}
?>
</select>








</td>
                  <td bgcolor="#E9E9E9">
                  
                  
                  
<a href="#" onClick="javascript:BuscaJuntas('../02/02Busca.php', 'BuscaJuntas', 'AreaContenidoCliente', document.getElementById('muni_jun'));"><img src="../images/examinar2.png" width="30" height="30" alt="Listar" /></a>
                  
                  
                  
                  </td>
                </tr>
              </table>
</td>
        </tr>
    </table></td>
  </tr>
  <tr>
    <td>
<!--<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'A');">A</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'B');">B</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'C');">C</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'D');">D</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'E');">E</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'F');">F</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'G');">G</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'H');">H</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'I');">I</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'J');">J</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'K');">K</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'L');">L</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'M');">M</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'N');">N</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'Ñ');">Ñ</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'O');">O</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'P');">P</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'Q');">Q</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'R');">R</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'S');">S</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'T');">T</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'U');">U</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'V');">V</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'W');">W</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'X');">X</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'Y');">Y</div>
<div class="fxBotonLetras" style="width:auto; float:left; margin-right:3px;" onClick="javascript:BuscaLetras('../02/02Lista.php', 'BuscaLetras', 'AreaContenidoCliente', 'Z');">Z</div>
-->
</td>
  </tr>
<tr><td id="AreaEditaJuntas"></td></tr><tr>
<tr><td id="AreaContenidoCliente"></td></tr><tr>
    <td></td>
  </tr>
</table>


