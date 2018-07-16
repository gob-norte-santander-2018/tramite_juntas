<?php
session_start();
session_destroy();
?>
<html>
<head>
	<title>.:: SALIDA SEGURA ::.</title>
	<link href="../styles/styles.css" rel="stylesheet" type="text/css">

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><style type="text/css">
<!--
body {
	/*background-color: #F3F3F3;*/
}
-->
</style></head>

<body>


<p>&nbsp;</p>
<p align="center"><img src="../images/logo2.png" alt="STCGNDS"  />
<p>&nbsp;</p>
<p align="center"><span class="boton_1">Gracias por su acceso</span>
<p></p>
<br>
<?php
echo "<META HTTP-EQUIV=REFRESH CONTENT='1; URL=../admin.php'>";
?>
<!--		<script language="javascript1.5" type="text/javascript">
        document.location = "../index.html";
        </script>-->
  
</body>
</html>