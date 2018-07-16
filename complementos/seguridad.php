<?php

//Inicio la sesión

session_start();

$hola = $_SESSION["CODIGO_USUARIO"];

//COMPRUEBA QUE EL USUARIO ESTA AUTENTIFICADO

if ($_SESSION["AUTENTICADO"] != "278Uajsjdxe45trhTegafW92uTeE") {

	//si no existe, envio a la página de autentificacion

	header("Location: ../index.php");

	//ademas salgo de este script

	exit();

}	

?>