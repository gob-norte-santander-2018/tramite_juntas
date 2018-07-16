function NuevaJunta(path, opcion, contenedor, luga_jun, muni_jun, pers_jun, codi_usu, acti_jun)
	{
	var vFuncion = 'NuevaJunta';
	var msnWait = 'Creando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				if ((luga_jun.value == "") || (muni_jun.value == "") || (pers_jun.value == "") || (codi_usu.value == ""))
				{
				//navigator.notifation.beep(400);
				swal("Faltan datos por ingresar!"); 

				 } else {
				


					bloquearPantalla(); mensaje("Un momento por favor...");
					
strPARAM = "Opcion="+opcion+"&Luga_jun="+luga_jun.value+"&Muni_jun="+muni_jun.value+"&Pers_jun="+pers_jun.value+"&Codi_usu="+codi_usu.value+"&Acti_jun="+acti_jun.value;
//alert(strPARAM);
					ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
							document.getElementById(contenedor).innerHTML = ajax.responseText;
							swal("Junta creada con \u00C9xito!", "", "success");
							//getArea('../02/02Index.php', 'AreaContenido');
							desbloquearPantalla();
						}
						else
							{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su petici\u00F3n..."); }
					} else mensaje(msnWait); }
					ajax.send(strPARAM);
				}
			}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}


function MuestraJunta(path, opcion, contenedor, junta)
{
var vFuncion = 'MuestraJunta';
var msnWait = 'Mostrando...';
var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
	try
		{
				bloquearPantalla(); mensaje("Un momento por favor...");
				strPARAM = "Opcion="+opcion+"&Junta="+junta;
				//alert(strPARAM);
				ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
						document.getElementById(contenedor).innerHTML = ajax.responseText;
						desbloquearPantalla();
					}
					else
						{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su petici\u00F3n..."); }
				} else mensaje(msnWait); }
				ajax.send(strPARAM);
			}
		catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
}


function BuscaJuntasEliminar(path, opcion, contenedor, municipio)
	{
	var vFuncion = 'BuscaJuntas';
	var msnWait = 'Buscando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "Opcion="+opcion+"&Municipio="+municipio;
					//alert(strPARAM);
					ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
							document.getElementById(contenedor).innerHTML = ajax.responseText;
							desbloquearPantalla();
						}
						else
							{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su petici\u00F3n..."); }
					} else mensaje(msnWait); }
					ajax.send(strPARAM);
				}
			//}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}


function EditaJuntas(path, opcion, contenedor, codi_jun, luga_jun, muni_jun, pers_jun, codi_usu, acti_jun)
	{
	var vFuncion = 'EditaJuntas';
	var msnWait = 'Editando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				if ((luga_jun.value == ""))
				{
				//navigator.notifation.beep(400);
				swal("Faltan datos por ingresar!"); 

				 } else {
				
bloquearPantalla(); mensaje("Un momento por favor...");
strPARAM = "Opcion="+opcion+"&Codi_jun="+codi_jun+"&Luga_jun="+luga_jun.value+"&Muni_jun="+muni_jun+"&Pers_jun="+pers_jun.value+"&Codi_usu="+codi_usu.value+"&Acti_jun="+acti_jun.value;
//alert(strPARAM);
ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
document.getElementById(contenedor).innerHTML = ajax.responseText;
BuscaJuntasEliminar('../02/02Busca.php', 'BuscaJuntas', 'AreaContenidoCliente', muni_jun);
swal("Junta Editada con \u00C9xito!", "", "success");
desbloquearPantalla();
						}
						else
							{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su petici\u00F3n..."); }
					} else mensaje(msnWait); }
					ajax.send(strPARAM);
				}
			}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}



function BuscaJuntas(path, opcion, contenedor, municipio)
	{
	var vFuncion = 'BuscaJuntas';
	var msnWait = 'Buscando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				//if (palabra.value == "")
				//{
				//navigator.notifation.beep(400);
				//swal("Ingrese Palabra para buscar!"); 

				 //} else {
				
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "Opcion="+opcion+"&Municipio="+municipio.value;
					ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
							document.getElementById(contenedor).innerHTML = ajax.responseText;
							//swal("Cliente creado con \u00C9xito!", "", "success");
							//getArea('../02/02Index.php', 'AreaContenido');
							desbloquearPantalla();
						}
						else
							{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su petici\u00F3n..."); }
					} else mensaje(msnWait); }
					ajax.send(strPARAM);
				}
			//}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}

function EliminaJunta(path, opcion, contenedor, codi_jun, muni_jun)
	{
	var vFuncion = 'EliminaJunta';
	var msnWait = 'Eliminando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
if (confirm("\u00BFEst\u00E1 seguro que desea ELIMINAR?")) {
bloquearPantalla(); mensaje("Un momento por favor...");
strPARAM = "Opcion="+opcion+"&Codi_jun="+codi_jun+"&Muni_jun="+muni_jun;
//alert(strPARAM);
ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
document.getElementById(contenedor).innerHTML = ajax.responseText;
swal("Junta Eliminada con \u00C9xito!", "", "success");
BuscaJuntasEliminar('../02/02Busca.php', 'BuscaJuntas', 'AreaContenidoCliente', muni_jun);
//alert(muni_jun);
desbloquearPantalla();
						}
						else
							{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su petici\u00F3n..."); }
					} else mensaje(msnWait); }
					ajax.send(strPARAM);
				}
		}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}



function BuscaLetras(path, opcion, contenedor, letra)
	{
	var vFuncion = 'BuscaLetras';
	var msnWait = 'Buscando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "Opcion="+opcion+"&Letra="+letra;
					//alert(strPARAM);
					ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
							document.getElementById(contenedor).innerHTML = ajax.responseText;
							desbloquearPantalla();
						}
						else
							{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su petici\u00F3n..."); }
					} else mensaje(msnWait); }
					ajax.send(strPARAM);
				}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}
	
	
function Representantes(path, contenedor, opcion, municipio, idMun, vaMun)
	{
		var vFuncion = 'Representantes';
		try
			{		
				strPARAM = "Option="+opcion+"&Municipio="+municipio.value;
				ajax1=nuevoAjax(); ajax1.open("POST", path, true); ajax1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajax1.onreadystatechange = function() { if (ajax1.readyState == 4) { if (ajax1.status == 200) {
						document.getElementById(contenedor).innerHTML = ajax1.responseText;
						if (idMun != "")
							document.getElementById(idMun).value = vaMun;
					}
					else
						{ alert("[Ajax: " + vFuncion + "][ES: " + ajax1.status + "]\nMensaje: Ha ocurrido un problema al procesar su peticion..."); }
				}
				}
				ajax1.send(strPARAM);
			}
		catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
	}