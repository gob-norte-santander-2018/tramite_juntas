function UsuarioNum(path, opcion, ndoc_usu)
{
var vFuncion = 'UsuarioNum';
	try
		{
				bloquearPantalla(); mensaje("Un momento por favor...");
				strPARAM = "Opcion="+opcion+"&Ndoc_usu="+ndoc_usu;
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

function NuevoUsuario(path, opcion, contenedor, ndoc_usu, nomb_usu, muni_usu, tipo_usu, acti_usu)
	{
	var vFuncion = 'NuevoUsuario';
	var msnWait = 'Creando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				
				
				if ((ndoc_usu.value == "") || (nomb_usu.value == "") || (muni_usu.value == "") || (tipo_usu.value == ""))
				{
				//navigator.notifation.beep(400);
				swal("Faltan datos por ingresar!"); 

				 } else {
				
									
									
				 
					
					
					bloquearPantalla(); mensaje("Un momento por favor...");
strPARAM = "Opcion="+opcion+"&Ndoc_usu="+ndoc_usu.value+"&Nomb_usu="+nomb_usu.value+"&Muni_usu="+muni_usu.value+"&Tipo_usu="+tipo_usu.value+"&Acti_usu="+acti_usu.value;
					//alert(strPARAM);
					ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
							document.getElementById(contenedor).innerHTML = ajax.responseText;
							
							
							if (ajax.responseText.indexOf("YaExiste") != -1) { swal("El usuario ya existe en el sistema", ''); getArea('../01/01nuevo.php', 'AreaContenidoUsuario'); }
							if (ajax.responseText.indexOf("NoExiste") != -1) { swal("Usuario creado con \u00C9xito!", ''); getArea('../01/01nuevo.php', 'AreaContenidoUsuario'); }
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




function MuestraUser(path, opcion, contenedor, usuario)
{
var vFuncion = 'MuestraUser';
var msnWait = 'Mostrando...';
var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
	try
		{
				bloquearPantalla(); mensaje("Un momento por favor...");
				strPARAM = "Opcion="+opcion+"&Usuario="+usuario;
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
		



function BuscaUserEliminar(path, opcion, contenedor, municipio)
	{
	var vFuncion = 'BuscaUsuarios';
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



function EditaUser(path, opcion, contenedor, codi_usu, ndoc_usu, nomb_usu, muni_usu, tipo_usu, acti_usu)
	{
	var vFuncion = 'EditaUser';
	var msnWait = 'Editando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				if ((ndoc_usu.value == "") || (nomb_usu.value == ""))
				{
				//navigator.notifation.beep(400);
				swal("Faltan datos por ingresar!"); 

				 } else {
				
bloquearPantalla(); mensaje("Un momento por favor...");
strPARAM = "Opcion="+opcion+"&Codi_usu="+codi_usu+"&Ndoc_usu="+ndoc_usu.value+"&Nomb_usu="+nomb_usu.value+"&Muni_usu="+muni_usu.value+"&Tipo_usu="+tipo_usu.value+"&Acti_usu="+acti_usu.value;
//alert(strPARAM);
ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
document.getElementById(contenedor).innerHTML = ajax.responseText;
BuscaUserEliminar('../01/01busca.php', 'BuscaUsuarios', 'AreaContenidoUsuario', muni_usu.value);

swal("Usuario Editado con \u00C9xito!", "", "success");
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

function BuscaUsuarios(path, opcion, contenedor, municipio)
	{
	var vFuncion = 'BuscaUsuarios';
	var msnWait = 'Buscando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				
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
	



		
function EliminaUser(path, opcion, contenedor, codi_usu, muni_usu)
	{
	var vFuncion = 'EliminaUsuario';
	var msnWait = 'Eliminando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				//if (codi_usu.value != "")
				//{
				//swal("Esta Seguro!"); 
				
					//if (swal("Deleted!", "Your imaginary file has been deleted.", "success")) {
					if (confirm("\u00BFEst\u00E1 seguro que desea ELIMINAR?")) {
				
			
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "Opcion="+opcion+"&Codi_usu="+codi_usu;
					//alert(strPARAM);
					ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
							document.getElementById(contenedor).innerHTML = ajax.responseText;
							swal("Usuario Eliminado con \u00C9xito!", "", "success");
							BuscaUserEliminar('../01/01busca.php', 'BuscaUsuarios', 'AreaContenidoUsuario', muni_usu);
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

