<?php
function thumb($imagefile, $w) {
//Recibimos los valores del alto y ancho deseado
$ValorAncho = $_GET["ancho"];
$ValorAlto = $_GET["alto"];
    /* Obtener extensi�n del archivo */
    $dot = (strlen($imagefile) - strrpos($imagefile, ".")-1)*(-1);
    $ext = substr($imagefile, $dot);
    $ext = strtolower($ext);   
       
    /* Ver que las im�genes sean de alguno de los formatos soportados. Por medio de la funci�n strtolower(), pasamos la extensi�n a min�sculas */
   
    if(strtolower($ext) == "gif") {
        if (!$src_img = imagecreatefromgif($imagefile)) {
            echo "Error abriendo $imagefile!"; exit;
        }
    } else if(strtolower($ext) == "jpg" or strtolower($ext) == "jpeg" or strtolower($ext) == "JPG") {
        if (!$src_img = imagecreatefromjpeg($imagefile)) {
            echo "Error abriendo $imagefile!"; exit;
        }
    } else if(strtolower($ext) == "png") {
        if (!$src_img = imagecreatefrompng($imagefile)) {
            echo "Error abriendo $imagefile!"; exit;
        }
    } else {
        echo "Formato de im�gen no soportada"; exit;
    }
   
    /*La funci�n getimagesize devuelve una matriz con la siguiente estructura:
        array {
            [0] => "ancho en pixeles"
            [1] => "alto en pixeles"
            [2] => "tipo de im�gen (1=GIF; 2=JPG; 3=PNG)"
            [3] => "width=xxx height=yyy" (para usar con el tag img de HTML)
        }
    */
   
$hw = getimagesize($imagefile);
 
 
//*Aqu� definimos los valores de la imagen como deseamos que se vea en la p�gina*/
//$ValorAncho = 140;
//$ValorAlto  = 105;

/* (NUEVA ALTURA PROPORCIONADA) A trav�s del cociente entre el alto y el cociente entre la anchura original y la anchura nueva, mantenemos las proporciones de la im�gen.*/



		if ($hw[0] < $hw[1])
            {
			 if (($hw[0] > $ValorAncho) && ($hw[1] > $ValorAlto)) //IF para proporcionar las imagenes cuyo valor alto y ancho son mayores al espacio de la web
            	{													//y su ancho es menor a su alto

				 $new_h = $ValorAlto;
                 $new_w= $new_h * ($hw["0"]/$hw["1"]);
				}
			}
			  else
				{
				 if ($hw[0] > $hw[1])
				  {
				  if (($hw[0] > $ValorAncho) && ($hw[1] > $ValorAlto)) //IF para proporcionar las imagenes cuyo valor alto y ancho son menores al espacio de la web
					{													//y su ancho es mayor a su alto
			  	$new_w = $ValorAncho;
              	$new_h= $new_w / ($hw["0"]/$hw["1"]);
				
            		}
				  }
                } 
		 
	 if (($hw[0] <= $ValorAncho) && ($hw[1] <= $ValorAlto))//IF para proporcionar las imagenes cuyo valor alto y ancho son menores al espacio de la web
     {													   
     $new_h = $hw[1];
     $new_w= $hw[0];
     }
      else
        {
               if (($hw[0] < $ValorAncho) && ($hw[1] > $ValorAlto)) //IF para proporcionar las imagenes cuyo valor alto es menor y ancho mayor al espacio de la web
                {
                $new_h = $ValorAlto;
                $new_w= $new_h * ($hw["0"]/$hw["1"]);
                }
                else
                {
                    if (($hw[0] > $ValorAncho) && ($hw[1] < $ValorAlto)) //IF para proporcionar las imagenes cuyo valor alto es mayor y ancho menor al espacio de la web
                    {
                    $new_w = $ValorAncho;
                    $new_h= $new_w / ($hw["0"]/$hw["1"]);
                    }
                }
            }
   
   


    /* Intentamos crear una im�gen 'true color'. Esta funci�n es soportada a partir de GD 2.0, por lo que en caso de no funcionar, se usar� la funci�n imageCreate */
    $dst_img = @imagecreatetruecolor($new_w, $new_h);
    if(!$dst_img) {
      $dst_img = imageCreate($new_w, $new_h);
    }
   
    /* Se crea la im�gen con los valores obtenidos y borramos las im�genes de la memoria. */
    imagecopyresampled($dst_img,$src_img,0,0,0,0,$new_w,$new_h,imagesx($src_img),imagesy($src_img));
    imagepng($dst_img);
    ImageDestroy($src_img);
    ImageDestroy($dst_img);
}

/* Se indica el tipo de archivo */
header("Content-type: image/png");

/* Llamamos a la funci�n para crear la imagen peque�a con los valores obtenidos por GET */
thumb($_GET[image], $_GET[w]);

?>