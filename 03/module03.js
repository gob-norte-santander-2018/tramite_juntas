function Ingresar(path, opcion, contenedor, ndoc_usu, pass_usu)
	{
	var vFuncion = 'Ingresar';
	var msnWait = 'Ingresando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				if ((ndoc_usu.value == "") || (pass_usu.value == ""))
				{
				swal("Faltan datos por ingresar!"); 
				 } else {
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "Opcion="+opcion+"&Ndoc_usu="+ndoc_usu.value+"&Pass_usu="+pass_usu.value;
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
			}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}

function Verifica(path, opcion, contenedor, nume_cer)
	{
	var vFuncion = 'Verifica';
	var msnWait = 'Verificando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				if (nume_cer.value == "")
				{
				swal("Faltan datos por ingresar!"); 
				 } else {
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "Opcion="+opcion+"&Nume_cer="+nume_cer.value;
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
			}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}

function GeneraCertificado(path, opcion, contenedor, ndoc_usu, pers_jun)
	{
	var vFuncion = 'GeneraCertificado';
	var msnWait = 'Creando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
		try
			{
				/*   é = \u00E9   ó = \u00F3  á = \u00E1   í = \u00ED   ú = \u00FA   Á = \u00C1   É = \u00C9    Í = \u00CD   Ó = \u00D3   Ú = \u00DA   ñ = \u00F1   */
				if ((ndoc_usu.value == "") || (pers_jun.value == ""))
				{
				swal("Faltan datos por ingresar!"); 
				 } else {
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "Opcion="+opcion+"&Ndoc_usu="+ndoc_usu.value+"&Pers_jun="+pers_jun;
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
			}
			catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
	}