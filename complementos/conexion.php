<?php 
$TITTLE = ".:: TRAMITE ASOCIACIONES ::.";
date_default_timezone_set('America/Bogota'); //PHP 7 se dene definir

function conectar_bd()
    {
	$conexion = mysqli_connect("SERVIDOR_BASE_DE_DATOS", "NOMBRE_USUARIO_BD","CONTRASEÑA_SERVIDOR_BASE_DE_DATOS", "NOMBRE_BASE_DE_DATOS");
    if (!$conexion) { echo "No se pudo conectar a la base de datos";  } else { return $conexion; }
	}
	

function desconectar_bd()
{ mysqli_close(); }
?>
