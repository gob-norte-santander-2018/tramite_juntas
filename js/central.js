function modNE(path, opcion, vCodiUni, vCapaDel)
	{
		var vFuncion = 'modNE';
		var msnWait = 'En consulta...';
		try
			{
				if (confirm("¿Está seguro que desea continuar?")) {
					bloquearPantalla(); mensaje("Un momento por favor...");
					strPARAM = "vDataOpc="+opcion+"&xyz="+rnd()+"&CodiUni="+escape(trimPS(vCodiUni));
					ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
							desbloquearPantalla();
							if (ajax.responseText.indexOf("a9ieo2TrefE152a0p01pde") != -1)
								{ verMensajeAlerta("Error de parámetros", ''); }
							else if (ajax.responseText.indexOf("insmqtagxx1527sxcafCXVaisdu9") != -1)
								{ $.jGrowl("No se ha podido eliminar"); }
							else if (ajax.responseText.indexOf("83udu27Hagt2191isdaidiodsa") != -1)
								{ $.jGrowl("Registro eliminado!");
								eliminarElemento(vCapaDel);
								}
							else
								{ $.jGrowl("Error desconocido<BR>"); }
						}
						else
							{ $.jGrowl("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: Ha ocurrido un problema al procesar su peticion..."); sendError(vFuncion, 'PHP', ajax.status, ajax.responseText); }
					} else mensaje(msnWait); }
					ajax.send(strPARAM);
				}
			}
			catch(e) { $.jGrowl("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); sendError(vFuncion, 'JS', e.name, e.message); }
	}

function setOcultarMenuHerramientas() {

	var vFuncion = 'setOcultarMenuHerramientas';

	try {

			document.getElementById('menuHerramientas').style.display = "none";

			document.getElementById('imgMh').src = "../imPortal/001.png";

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); sendError(vFuncion, 'JS', e.name, e.message); }

}

function setMenuHerramientas() {

	var vFuncion = 'setMenuHerramientas';

	try {

			if (document.getElementById('menuHerramientas').style.display == "none")

				{

					document.getElementById('menuHerramientas').style.display = "block";

					document.getElementById('imgMh').src = "../imPortal/003.png";

				}

				else if (document.getElementById('menuHerramientas').style.display == "block")

					{

						document.getElementById('menuHerramientas').style.display = "none";

						document.getElementById('imgMh').src = "../imPortal/001.png";

					}

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); sendError(vFuncion, 'JS', e.name, e.message); }

}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sendError(vFuncionO, vTipo, vEstado, vTextoError) {

	var vFuncion = 'sendError';

	var msnWait = 'Enviando información de advertencia al administrador...';

	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';

	try

		{

			bloquearPantalla();

			mensaje("Un momento por favor...");

			strPARAM = "Funcion="+escape(vFuncionO)+"&Tipo="+escape(vTipo)+"&Estado="+escape(vEstado)+"&TextoError="+escape(vTextoError);

			ajax=nuevoAjax(); ajax.open("POST", "../error/goError.php", true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			ajax.onreadystatechange = function() {

				if (ajax.readyState == 4)

					{

						if (ajax.status == 200)

							{

								if (ajax.responseText.indexOf("xzxcagfiow726asPow") != -1)

									var i = 1;

									else if (ajax.responseText.indexOf("a9ieo2TrefE152a0p01pde") != -1)

										alert("sendError: Error en escritura de archivo");

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SetContainerHTML(id,html,processScripts)

	{

		mydiv = document.getElementById(id);

		mydiv.innerHTML = html;

		if(processScripts!=false)

			{

				var elementos = mydiv.getElementsByTagName('script');

				for(i=0;i<elementos.length;i++)

					{

						var elemento = elementos[ i ];

						nuevoScript = document.createElement('script');

						nuevoScript.text = elemento.innerHTML;	

						nuevoScript.type = 'text/javascript';

						if(elemento.src!=null && elemento.src.length>0)

							nuevoScript.src = elemento.src;

						elemento.parentNode.replaceChild(nuevoScript,elemento);

					}

			}

	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bloquearPantallaImp()	{

	var vFuncion = 'bloquearPantallaImp';

	try {

			SetOpacity('pantalla_imp');

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SetOpacityFade(capa) { document.getElementById(capa).style.visibility = "visible"; document.getElementById(capa).style.backgroundColor="#000000"; document.getElementById(capa).style.filter="alpha(opacity=60)"; document.getElementById(capa).style.mozopacity="0.60"; document.getElementById(capa).style.opacity="0.60"; }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function establecerdivCentralImp() {

	document.getElementById('divCentralImp').innerHTML = "";

	document.getElementById('divCentralImp').style.width = 400 + "px";

	document.getElementById('divCentralImp').style.marginLeft = "-" + 200 + "px";

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function eliminarElemento(vIdElemento) {

	var vFuncion = 'eliminarElemento';

	try {

			elemento = document.getElementById(vIdElemento);

			elemento.parentNode.removeChild(elemento);

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function validaMail(elemento) {

	var vFuncion = 'validaMail';

	try {

			var s = elemento.value; var filter = /^[A-Za-z][A-Za-z0-9_.]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/; if (s.length == 0 ) return 0; else { if (filter.test(s)) return 0; else return 1; return false; }

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SetOpacity(capa) {

	var vFuncion = 'SetOpacity';

	try {

			document.getElementById(capa).style.visibility = "visible"; document.getElementById(capa).style.backgroundColor="#ffffff"; document.getElementById(capa).style.filter="alpha(opacity=0)"; document.getElementById(capa).style.mozopacity="0"; document.getElementById(capa).style.opacity="0";

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

function SetOpacityOscuro(capa) {

	var vFuncion = 'SetOpacity';

	try {

			document.getElementById(capa).style.visibility = "visible"; document.getElementById(capa).style.backgroundColor="#000000"; document.getElementById(capa).style.filter="alpha(opacity=60)"; document.getElementById(capa).style.mozopacity="0.60"; document.getElementById(capa).style.opacity="0.60";

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function limpiaCaja(objetoRecibido, tipo) {

	var vFuncion = 'limpiaCaja';

	try {

			if (tipo == "select") objetoRecibido.value = "-1"; else objetoRecibido.value = "";

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rnd() {

	var vFuncion = 'rnd';

	try {

			var randomnumber = Math.floor(Math.random()*1234567890); return randomnumber;

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mensaje(texto) {

	var vFuncion = 'mensaje';

	try {

			muestraVentana('ContenedorMsn'); document.getElementById('msn').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+texto+"&nbsp;&nbsp;&nbsp;&nbsp;";

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bloquearPantalla()	{

	var vFuncion = 'bloquearPantalla';

	try {

			SetOpacity('pantalla_xtra');

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function desbloquearPantalla() {

	var vFuncion = 'desbloquearPantalla';

	try {

			ocultaVentana('ContenedorMsn'); document.getElementById('msn').innerHTML = ""; ocultaVentana('pantalla_xtra');

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ocultaVentana(capa) {

	var vFuncion = 'ocultaVentana';

	try {

			document.getElementById(capa).style.visibility = 'hidden';

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function muestraVentana(capa) {

	var vFuncion = 'muestraVentana';

	try {

			document.getElementById(capa).style.visibility = 'visible';

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ocultaVentanaDis(capa) {

	var vFuncion = 'ocultaVentanaDis';

	try {

			document.getElementById(capa).style.display = 'none';

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function muestraVentanaDis(capa) {

	var vFuncion = 'muestraVentanaDis';

	try {

			document.getElementById(capa).style.display = 'block';

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function replaceAll(str, desde, hasta) {

	var vFuncion = 'replaceAll';

	try {

			var idx = str.indexOf(desde); while(idx > -1) { str = str.replace(desde, hasta); idx = str.indexOf(desde); } return str;

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isObject(v) {

	var vFuncion = 'isObject';

	try {

			return v && typeof v == "object";

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function soloNumeros(obj) {

	var vFuncion = 'soloNumeros';

	try {

			var caracteres_permitidos = "0123456789"; var cadena_completa = obj.value;var cadena = obj.value; var total_cadena = cadena.length; for (i=0; i<cadena_completa.length; i++) { var ubicacion = cadena_completa.substring(i, i + 1); if (caracteres_permitidos.indexOf(ubicacion) != -1) {} else cadena = replaceAll(cadena, ubicacion, ""); } obj.value = cadena;

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function trimPS(strText) {

	var vFuncion = 'trim';

	try {

			

			while (strText.substring(0,1) == ' ') { strText = strText.substring(1, strText.length); } while (strText.substring(strText.length-1,strText.length) == ' ') { strText = strText.substring(0, strText.length-1); } return strText;

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

	

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function vVacio2(objetoRecibido, msnMostrado) {

	var vFuncion = 'vVacio2';

	try {

			if ((trimPS(objetoRecibido.value) == "") || (trimPS(objetoRecibido.value) == "-1")) { $.jGrowl(msnMostrado); objetoRecibido.focus(); return true; } else return false;

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function vVacio(objetoRecibido, msnMostrado) {

	var vFuncion = 'vVacio';

	try {

			if (trimPS(objetoRecibido.value) == "") { $.jGrowl(msnMostrado); objetoRecibido.focus(); return true; } else return false;

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function deshabilitaBoton(objetoRecibido) {

	var vFuncion = 'deshabilitaBoton';

	try {

			document.getElementById(objetoRecibido).disabled = true;

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function habilitaBoton(objetoRecibido) {

	var vFuncion = 'habilitaBoton';

	try {

			document.getElementById(objetoRecibido).disabled = false;

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function soloTexto(obj)	{

	var vFuncion = 'soloTexto';

	try {

			var idiota = 0; var caracteres_permitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,*+-;()[]%@&#$_. /:?¿¡!°" + String.fromCharCode(225, 233, 237, 243, 250, 193, 201, 205, 211, 218, 241, 209, 161, 189, 188, 190, 176, 169, 174, 175, 187);

			var cadena_completa = obj.value;var cadena = obj.value; var total_cadena = cadena.length; for (i=0; i<cadena_completa.length; i++) { var ubicacion = cadena_completa.substring(i, i + 1); if (caracteres_permitidos.indexOf(ubicacion) != -1) {} else { cadena = replaceAll(cadena, ubicacion, ""); idiota = idiota + 1; } } obj.value = cadena; if (idiota > 0) alert("Se han eliminado algunos caracteres que no son permitidos\nRevise de nuevo el texto introducido");

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cIH(objeto) {

	var vFuncion = 'cIH';

	try {

			document.getElementById(objeto).innerHTML = "";

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ocultaVentanaDif(contenedor) {

	var vFuncion = 'ocultaVentanaDif';

	try {

			$("."+contenedor).fadeOut("fast");

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function muestraVentanaDif(contenedor) {

	var vFuncion = 'muestraVentanaDif';

	try {

			$("."+contenedor).fadeIn("fast");

		}

	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function eliminaObjeto(objeto) {

	var pepas = document.getElementById(objeto);

	var padre = pepas.parentNode;

	padre.removeChild(pepas); 

}