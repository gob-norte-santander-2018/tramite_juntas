<?php
require "../complementos/conexion.php";
include ("../complementos/seguridad.php");
include ("../complementos/funciones.php");
$dbh=conectar_bd();
$usuario = $_SESSION["CODIGO_USUARIO"];
$ConActual = Usuario($usuario, "pass_usu")
?>
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
  <tr>
    <td>
      <table border="0" cellpadding="3" cellspacing="1" class="textonormal">
        <tr>
          <td>
          
          <input name="usuario" id="usuario" type="hidden" size="8" maxlength="8" value="<?php echo $usuario; ?>"/>
          <input name="actual" id="actual" type="hidden" size="8" maxlength="8" value="<?php echo $ConActual; ?>"/>
          <input name="anterior" id="anterior" type="password" class="inputxlarge" size="20" maxlength="8" placeholder="Contraseña Anterior" /></td>
          </tr>
         <tr>
          <td><input name="nueva" id="nueva" type="password" class="inputxlarge" size="20" maxlength="8" placeholder="Contraseña Nueva" /></td>
          </tr>
      </table>
<div class="fxBoton" style="width:99%;" onClick="javascript:NuevoPass('../01/01Core.php', 'NuevoPass', 'muestradatos', document.getElementById('anterior'), document.getElementById('actual'), document.getElementById('nueva'), document.getElementById('usuario'));">GUARDAR DATOS</div>

</td>
</tr>
</table>


<div id="muestradatos"></div>



<?php mysqli_close($dbh); ?>
