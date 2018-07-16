function NuevaJunta(path, opcion, contenedor, luga_jun, tipl_jun, muni_jun, pers_jun, fech_jun, codi_usu, info_jun, acti_jun)
	{
	var vFuncion = 'NuevaJunta';
	var msnWait = 'Creando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				if ((luga_jun.value == "") || (tipl_jun.value == "") || (muni_jun.value == "") || (pers_jun.value == "") || (fech_jun.value == "") || (codi_usu.value == ""))
				{
				//navigator.notifation.beep(400);
				swal("Faltan datos por ingresar!"); 

				 } else {
				


					bloquearPantalla(); mensaje("Un momento por favor...");
					
strPARAM = "Opcion="+opcion+"&Luga_jun="+luga_jun.value+"&Tipl_jun="+tipl_jun.value+"&Muni_jun="+muni_jun.value+"&Pers_jun="+pers_jun.value+"&Fech_jun="+fech_jun.value+"&Codi_usu="+codi_usu.value+"&Info_jun="+info_jun.value+"&Acti_jun="+acti_jun.value;
alert(strPARAM);
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
var msnWait = 'Buscando...';
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



function EditaJuntas(path, opcion, contenedor, codi_jun, luga_jun, tipl_jun, muni_jun, pers_jun, fech_jun, codi_usu, info_jun, acti_jun)
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
strPARAM = "Opcion="+opcion+"&Codi_jun="+codi_jun+"&Luga_jun="+luga_jun.value+"&Tipl_jun="+tipl_jun.value+"&Muni_jun="+muni_jun.value+"&Pers_jun="+pers_jun.value+"&Fech_jun="+fech_jun.value+"&Codi_usu="+codi_usu.value+"&Info_jun="+info_jun.value+"&Acti_jun="+acti_jun.value;
//alert(strPARAM);
ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
document.getElementById(contenedor).innerHTML = ajax.responseText;
swal("Junta Editada con \u00C9xito!", "", "success");
//location.reload(); 
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



function EliminaJunta(path, opcion, contenedor, codi_jun)
	{
	var vFuncion = 'EliminaJunta';
	var msnWait = 'Editando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
if (confirm("\u00BFEst\u00E1 seguro que desea ELIMINAR?")) {
bloquearPantalla(); mensaje("Un momento por favor...");
strPARAM = "Opcion="+opcion+"&Codi_jun="+codi_jun;
//alert(strPARAM);
ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
document.getElementById(contenedor).innerHTML = ajax.responseText;
swal("Junta Eliminada con \u00C9xito!", "", "success");
//location.reload(); 
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







function BuscaLetras(path, opcion, contenedor, letra)
	{
	var vFuncion = 'BuscaLetras';
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
					strPARAM = "Opcion="+opcion+"&Letra="+letra;
					//alert(strPARAM);
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



/*
function NuevoCliente(path, opcion, contenedor, nnit_cli, nomb_cli, dire_cli, depa_cli, muni_cli, tele_cli, site_cli, mail_cli, con1_cli, car1_cli, tel1_cli, regi_cli, con2_cli, car2_cli, tel2_cli, acti_cli)
{
	var vFuncion = 'NuevoCliente';
	var msnWait = 'Creando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
	try {
			//if (vVacio(documento, "Ingrese Documento")) return false;
			//if (vVacio(nombre, "Ingrese Nombre Completo")) return false;
			//alert (tipo);
		/*   ¿ = \u00BF é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
/*		strPARAM = "Opcion="+opcion+"&Nnit_cli="+nnit_cli.value+"&Nomb_cli="+nomb_cli.value+"&Dire_cli="+dire_cli.value+"&Depa_cli="+depa_cli.value+"&Muni_cli="+muni_cli.value+"&Tele_cli="+tele_cli.value+"&Site_cli="+site_cli.value+"&Mail_cli="+mail_cli.value+"&Con1_cli="+con1_cli.value+"&Car1_cli="+car1_cli.value+"&Tel1_cli="+tel1_cli.value+"&Regi_cli="+regi_cli.value+"&Con2_cli="+con2_cli.value+"&Car2_cli="+car2_cli.value+"&Tel2_cli="+tel2_cli.value+"&Acti_cli="+acti_cli.value;
			alert(strPARAM);
			bloquearPantalla(); mensaje("Un momento por favor...");
			ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
					document.getElementById(contenedor).innerHTML = ajax.responseText;
					swal("Cliente creado con \u00C9xito!", "", "success");
					getArea('../02/02Index.php', 'AreaContenido');
					desbloquearPantalla();
				}
				else
					{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: " + msnAjax); }
			desbloquearPantalla();
			} else mensaje(msnWait); }
			ajax.send(strPARAM);
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); 
	desbloquearPantalla(); 
		 }
}
*/

function mod1BuscaUsuario(path, contenedor, opcion, vTextoBuscar)
	{
		var vFuncion = 'mod1BuscaUsuario';
		var msnWait = 'Buscando usuario...';
		try
			{
				if (vVacio(vTextoBuscar, "Digite un número de documento, nombre o apellido")) return false;
				bloquearPantalla();
				mensaje("Un momento por favor...");
				strPARAM = "vDataOpc="+opcion+"&textoBuscar="+escape(trimPS(vTextoBuscar.value));
				ajax=nuevoAjax();
				ajax.open("POST", path, true);
				ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajax.onreadystatechange = function()
					{
						if (ajax.readyState == 4)
							{
								if (ajax.status == 200)
									{
										SetContainerHTML(contenedor, ajax.responseText, true);
									}
									else
										{ $.jGrowl("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su peticion..."); }
								desbloquearPantalla();
							}
							else
							mensaje(msnWait);
					}
				ajax.send(strPARAM);
			}
			catch(e) { $.jGrowl("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}
	
function setArea(indice, contenedor) {
	var vFuncion = 'setArea';
	var msnWait = 'Cargando opcion...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
	try
		{
			document.getElementById(contenedor).innerHTML = "";
			bloquearPantalla(); mensaje("Un momento por favor...");
			strPARAM = "Param="+rnd();
			ajax=nuevoAjax();
			ajax.open("POST", indice, true);
			ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			ajax.onreadystatechange = function()
				{
					if (ajax.readyState == 4)
						{
							if (ajax.status == 200)
								{
									SetContainerHTML(contenedor, ajax.responseText, true);
								}
								else
									{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: " + msnAjax); }
							desbloquearPantalla();
						}
						else mensaje(msnWait);
				}
			ajax.send(strPARAM);
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
}
