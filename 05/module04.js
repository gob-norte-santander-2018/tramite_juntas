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
							swal("Usuario creado con \u00C9xito!", "", "success");
							getArea('../01/01Index.php', 'AreaContenido');
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


swalConfirm({
					title: "Are you sure?",
					text: "You will not be able to recover this imaginary file!",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Yes, delete it!",
					cancelButtonText: "No, cancel plx!",
					closeOnConfirm: false,
					closeOnCancel: false
					},
function(isConfirm){
if (isConfirm) {
swalConfirm("Deleted!", "Your imaginary file has been deleted.", "success");
} else {
	swalConfirm("Cancelled", "Your imaginary file is safe :)", "error");
}
});
					
					
function EliminaUsuario(path, opcion, contenedor, codi_usu)
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
				
					if (confirm("\u00BFEst\u00E1 seguro que desea ELIMINAR?")) {
			
				
			
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "Opcion="+opcion+"&Codi_usu="+codi_usu;
					alert(strPARAM);
					ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
							document.getElementById(contenedor).innerHTML = ajax.responseText;
							swal("Usuario Eliminado con \u00C9xito!", "", "success");
							//swalconfirm("Eliminado!", "Se ha eliminado el registro.", "success");
							getArea('../01/01Index.php', 'AreaContenido');
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