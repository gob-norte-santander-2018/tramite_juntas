contAjax = 0;

function nuevoAjax()
	{ 
		var xmlhttp = false; 
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); // Creacion del objeto AJAX para navegadores no IE.
		}
		catch(e) { 
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // Creacion del objet AJAX para IE.
			}
			catch(E) {
				xmlhttp = false;
			}
		}
		if (!xmlhttp && typeof XMLHttpRequest != 'undefined')
			xmlhttp = new XMLHttpRequest();
		return xmlhttp;
	}

function municipio4(path, contenedor, opcion, idcodigo, idMun, vaMun)
	{
		var vFuncion = 'municipio4';
		try
			{
				codigo = idcodigo.value;
				strPARAM = "Option="+opcion+"&Dep4="+codigo;
				ajax4=nuevoAjax(); ajax4.open("POST", path, true); ajax4.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajax4.onreadystatechange = function() { if (ajax4.readyState == 4) { if (ajax4.status == 200) {
						document.getElementById(contenedor).innerHTML = ajax4.responseText;
						if (idMun != "")
							document.getElementById(idMun).value = vaMun;
					}
					else
						{ alert("[Ajax: " + vFuncion + "][ES: " + ajax4.status + "]\nMensaje: Ha ocurrido un problema al procesar su peticion..."); }
				}
				}
				ajax4.send(strPARAM);
			}
		catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
	}