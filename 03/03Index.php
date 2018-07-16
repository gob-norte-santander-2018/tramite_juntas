<?php
require "../complementos/conexion.php";
include ("../complementos/funciones.php");
$dbh=conectar_bd();
?>
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
              <td><a href="#" onclick="javascript:getArea('../02/02Index.php', 'AreaContenido');"><img src="../images/ico_listar.png" width="30" height="30" alt="Listar" /></a></td>
              <td><a href="#" onclick="javascript:getArea('../02/02nuevo.php', 'AreaContenidoCliente');" title="NUEVO"><img src="../images/ico_nuevog.png" width="30" height="30" alt="Nuevo" /></a></td>
              <td>&nbsp;</td>
            </tr>
          </table></td>
          <td width="597" bgcolor="#F4F4F4"><form id="buscar" name="buscar" method="post" action="">
              <table border="0" align="right" cellpadding="2" cellspacing="2">
                <tr>
                  <td bgcolor="#F4F4F4">
                  <input name="palabra" value="<?php if (isset($_POST['palabra'])) echo $_POST['palabra']; ?>" type="text" class="t6" size="40%" maxlength="80" />
                   </td>
                  <td bgcolor="#E9E9E9"><input name="buscar" id="buscar" type="submit" class="t6" value="Buscar" /></td>
                </tr>
              </table>
        </form></td>
        </tr>
    </table></td>
  </tr>
  <tr>
    <td>
</td>
  </tr>
<tr><td id="AreaContenidoCliente"><?php include ("../03/03lista.php"); ?></td></tr>
  <tr>
    <td></td>
  </tr>
</table>