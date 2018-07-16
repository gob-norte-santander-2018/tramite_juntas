var contAjax = 0;
var timerEnLinea = 120000;
var urlActual = "Index";
var pathGlobalTMP = "";
var contenedorGlobalTMP = "";
var campoFocusTmp = "";

function goScroll(zona) {
	$('code.'+zona).scrollIntoView('normal', $('#easing').val());
}


function MM_buscarUsuario(path, vCodiUsu, vTipoBus, capaViz) {
	var vFuncion = 'MM_buscarUsuario';
	var msnWait = 'Buscando usuario...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
	try {
			if (trimPS(vCodiUsu.value) != "")
				{
					bloquearPantalla();
					mensaje("Un momento por favor...");
					
					strPARAM = "CodiUsu="+escape(trimPS(vCodiUsu.value))+"&TipoBus="+escape(trimPS(vTipoBus));
					ajax=nuevoAjax();
					ajax.open("POST", path, true);
					ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function()
						{
							if (ajax.readyState == 4)
								{
									if (ajax.status == 200)
										{
											if (ajax.responseText.indexOf("@o176O137-") != -1)
												{
													document.getElementById(capaViz).innerHTML = ajax.responseText.split("|")[1];
												}
												else if (ajax.responseText.indexOf("@x176X137-") != -1)
													{
														document.getElementById(capaViz).innerHTML = ajax.responseText.split("|")[1];
														vCodiUsu.value = "";
														setTimeout ("limpiaCapaTem(\'" + capaViz + "\')", 3000);
													}
										}
										else
											{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: " + msnAjax); }
									desbloquearPantalla();
								}
								else mensaje(msnWait);
						}
					ajax.send(strPARAM);
				}
				else
					document.getElementById(capaViz).innerHTML = "...";
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
}

function closeForm(path, direccion, ocultaPantallaXtra)	{
	var vFuncion = 'closeForm';
	var msnWait = 'Salir del sistema...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
	try {
			if (confirm("Esta seguro que desea salir del sistema"))
				{
					strPARAM = "";
					ajax=nuevoAjax();
					ajax.open("POST", path, true);
					ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					ajax.onreadystatechange = function()
						{
							if (ajax.readyState == 4)
								{
									if (ajax.status == 200)
										{
											var result = ajax.responseText;
											if (result.indexOf("ok") != -1)
												{
													alert("Usted ha salido del sistema con exito");
													parent.document.location = direccion;
												}
												else
													alert("Ha ocurrido un problema al procesar su peticion");
										}
										else
											{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: " + msnAjax); sendError(vFuncion, 'PHP', ajax.status, ajax.responseText); }
								}
						}
					ajax.send(strPARAM);
				}
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); sendError(vFuncion, 'JS', e.name, e.message); }
}




function sLoger(indice, contenedor, vM, vC, goPage)
	{
		/*if (trimPS(vM.value) == "") { alert("Digite el usuario."); vM.focus(); return false; }
		if (trimPS(vC.value) == "") { alert("Digite la contraseña."); vC.focus(); return false; }*/
		
		if ((vM.value == "") || (vC.value == ""))
				{
				swal("Faltan datos por ingresar!"); 
				 } else {
		document.getElementById('validacion').innerHTML = "Validando...";
		strPARAM = "M="+escape(vM.value)+"&C="+(vC.value);
		alert(strPARAM);
		ajax=nuevoAjax();
		ajax.open("POST", indice, true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		ajax.onreadystatechange = function()
			{
				if (ajax.readyState == 4)
					{
						if (ajax.status == 200)
							{
								document.getElementById(contenedor).innerHTML = ajax.responseText;
								//document.getElementById('validacion').innerHTML = "...";
								var result = ajax.responseText;
								
								//document.getElementById('validacion').innerHTML = ajax.responseText;
								if (result.indexOf("Opaijd0932ud81dbaksmNcjao") != -1)
									{
										document.getElementById('validacion').innerHTML = "Correcto.";
										//alert("Datos de usuario aceptados.");
										document.location = goPage;
										getArea('../03/03Certificado.php', 'ConCertificado2');
									}
									else if (result.indexOf("no983IUSjasdUsu093A8dnimdasI") != -1)
										swal("Usted no es un Representante...");
									else if (result.indexOf("bl918oqu091eoComt87182tplet0") != -1)
										swal("Usted se encuentra inactivo en el sistema...");
										else
											swal("Los datos ingresados no son correctos...");
								document.getElementById('validacion').innerHTML = "";
							}
							else
								swal("Ha ocurrido un problema al procesar su peticion");
					}
					else
						document.getElementById('validacion').innerHTML = "Validando...";
			}
			ajax.send(strPARAM);
				 }
	}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

function getArea(path, contenedor) {
	var vFuncion = 'getArea';
	var msnWait = 'Cargando...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
	try {
			bloquearPantalla(); mensaje("Un momento por favor...");
			ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
					document.getElementById(contenedor).innerHTML = ajax.responseText;
					desbloquearPantalla();
				}
				else
					{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: " + msnAjax); }
			desbloquearPantalla();
			} else mensaje(msnWait); }
			ajax.send();
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); 
	desbloquearPantalla(); 
		 }
}













////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function limpiaCapaTem(objeto) {
	var vFuncion = 'limpiaCapaTem';
	try {
			document.getElementById(objeto).innerHTML = "...";
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validaCampo(tipoObjeto, idObjeto, msnMostrado) {
	var vFuncion = 'validaCampo';
	try {
			if ((tipoObjeto == "TXT") || (tipoObjeto == "txt"))
				{
					if (trimPS(idObjeto.value) == "")
						{
							verMensajeAlerta(msnMostrado, idObjeto, '', '');
							return true;
						}
						else
							return false;
				}
			if ((tipoObjeto == "SEL") || (tipoObjeto == "sel"))
				{
					if ((trimPS(idObjeto.value) == "") || (trimPS(idObjeto.value) == "-1"))
						{
							verMensajeAlerta(msnMostrado, idObjeto);
							return true;
						}
						else
							return false;
				}
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function cerrarMsnAlert(path, contenedor) {
	var vFuncion = 'cerrarMsnAlert';
	try {
			ocultaVentana('capaMsnAlert'); document.getElementById('mensajeAlert').innerHTML = ""; ocultaVentana('pantalla_xtra'); if (campoFocusTmp != "") { document.getElementById(campoFocusTmp).focus(); } 
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
function verMensajeAlerta(textoMensaje, vCampoFoco)	{
	var vFuncion = 'verMensajeAlerta';
	try {
			SetOpacity('pantalla_xtra'); muestraVentana('capaMsnAlert'); if (vCampoFoco != "") { campoFocusTmp =  vCampoFoco.id; } muestraVentana('mensajeAlert'); document.getElementById('mensajeAlert').innerHTML = textoMensaje; return false;
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
function muestraContadorCaracteres(objetoRecibido) {
	var vFuncion = 'muestraContadorCaracteres';
	try {
			var totalCadena = parseInt(objetoRecibido.value.length, 10); document.getElementById("Con"+objetoRecibido.id).innerHTML = totalCadena;
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function contadorCaracteres(objetoRecibido, maxCaracteres, msnCampo) {
	var vFuncion = 'contadorCaracteres';
	try {
			var cadena = objetoRecibido.value; if (parseInt(cadena.length, 10) > parseInt(maxCaracteres, 10)) { alert(msnCampo + ":\nEl máximo de caracteres permitidos es: " + maxCaracteres); objetoRecibido.focus(); return true; }
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

function cargarContenido(pagina)
    {
        // cargamos el icono en el div donde ira el contenido
        $("#AreaContenido").html("<img src='../images/loading.gif' class='Cargando...' border='0' />");
        // cargamos la pagina en el div capa
        $("#AreaContenido").load(pagina);
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cargarContenidoPrin(pagina,dato)
    {
        strPARAM = "CodiUsu="+dato;
		// cargamos el icono en el div donde ira el contenido
        $("#AreaContenidoPrin").html("<img src='../images/loading.gif' class='Cargando...' border='0' />");
        // cargamos la pagina en el div capa
        $("#AreaContenidoPrin").load(pagina);
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
function AbrirCentrado(Url,NombreVentana,width,height,extras) {
	var vFuncion = 'AbrirCentrado';
	try {
			var largo = width; var altura = height; var adicionales= extras; var top = (screen.height-altura)/2; var izquierda = (screen.width-largo)/2; nuevaVentana=window.open(''+ Url + '',''+ NombreVentana + '','width=' + largo + ',height=' + altura + ',top=' + top + ',left=' + izquierda + ',features=' + adicionales + ''); nuevaVentana.focus();
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
function soloNumerosPunto(obj) {
	var vFuncion = 'soloNumerosPunto';
	try {
			var caracteres_permitidos = "0123456789."; var cadena_completa = obj.value;var cadena = obj.value; var total_cadena = cadena.length; for (i=0; i<cadena_completa.length; i++) { var ubicacion = cadena_completa.substring(i, i + 1); if (caracteres_permitidos.indexOf(ubicacion) != -1) {} else cadena = replaceAll(cadena, ubicacion, ""); } obj.value = cadena;
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
			if ((trimPS(objetoRecibido.value) == "") || (trimPS(objetoRecibido.value) == "-1")) { alert(msnMostrado); objetoRecibido.focus(); return true; } else return false;
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function vVacio(objetoRecibido, msnMostrado) {
	var vFuncion = 'vVacio';
	try {
			if (trimPS(objetoRecibido.value) == "") { alert(msnMostrado); objetoRecibido.focus(); return true; } else return false;
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
			var idiota = 0; var caracteres_permitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,*+-;()[]%@&#$_. /:?¿¡!°" + String.fromCharCode(225, 233, 237, 243, 250, 193, 201, 205, 211, 218, 241, 209, 161, 189, 188, 190, 176, 169, 174, 175, 187); var cadena_completa = obj.value;var cadena = obj.value; var total_cadena = cadena.length; for (i=0; i<cadena_completa.length; i++) { var ubicacion = cadena_completa.substring(i, i + 1); if (caracteres_permitidos.indexOf(ubicacion) != -1) {} else { cadena = replaceAll(cadena, ubicacion, ""); idiota = idiota + 1; } } obj.value = cadena; if (idiota > 0) alert("Se han eliminado algunos caracteres que no son permitidos\nRevise de nuevo el texto introducido");
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function soloFecha(obj) {
	var vFuncion = 'soloFecha';
	try {
			var caracteres_permitidos = "0123456789-"; var cadena_completa = obj.value;var cadena = obj.value; var total_cadena = cadena.length; for (i=0; i<cadena_completa.length; i++) { var ubicacion = cadena_completa.substring(i, i + 1); if (caracteres_permitidos.indexOf(ubicacion) != -1) {} else cadena = replaceAll(cadena, ubicacion, ""); } obj.value = cadena;
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function esFechaValida(idCamFoco, txtCampo) {
	var vFuncion = 'esFechaValida';
	try {
			var fecha = idCamFoco.value;
			if (fecha != undefined && fecha != "" ){
				if (trimPS(fecha).length != 10)
					{
						verMensajeAlerta("La "+txtCampo+" no es válida,<BR>verifique el formato: (<B>AAAA-MM-DD</B>).<BR>Por ejemplo: 2005-07-22", idCamFoco);
						return false;
					}
				if (fecha.split("-").length - 1 != 2)
					{
						verMensajeAlerta("La "+txtCampo+" no es válida,<BR>verifique el formato: (<B>AAAA-MM-DD</B>).<BR>Por ejemplo: 2005-07-22", idCamFoco);
						return false;
					}
				
				var anio = fecha.split("-")[0];
				var mes = fecha.split("-")[1];
				var dia = fecha.split("-")[2];
				
				if (trimPS(anio).length != 4)
					{
						verMensajeAlerta("La "+txtCampo+" no es válida,<BR>verifique el formato: (<B>AAAA-MM-DD</B>).<BR>Por ejemplo: 2005-07-22", idCamFoco);
						return false;
					}
				if (trimPS(mes).length != 2)
					{
						verMensajeAlerta("La "+txtCampo+" no es válida,<BR>verifique el formato: (<B>AAAA-MM-DD</B>).<BR>Por ejemplo: 2005-07-22", idCamFoco);
						return false;
					}
				if (trimPS(dia).length != 2)
					{
						verMensajeAlerta("La "+txtCampo+" no es válida,<BR>verifique el formato: (<B>AAAA-MM-DD</B>).<BR>Por ejemplo: 2005-07-22", idCamFoco);
						return false;
					}
				
				anio = parseInt(fecha.split("-")[0],10);
				mes = parseInt(fecha.split("-")[1],10);
				dia = parseInt(fecha.split("-")[2],10);
		
			switch(mes){
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					numDias=31;
					break;
				case 4: case 6: case 9: case 11:
					numDias=30;
					break;
				case 2:
					if (comprobarSiBisisesto(anio)){ numDias=29 }else{ numDias=28};
					break;
				default:
					verMensajeAlerta("La "+txtCampo+" no es válida,<BR>verifique el formato: (<B>AAAA-MM-DD</B>).<BR>Por ejemplo: 2005-07-22", idCamFoco);
					return false;
			}
		 
				if (dia>numDias || dia==0){
					verMensajeAlerta("La "+txtCampo+" no es válida,<BR>verifique el formato: (<B>AAAA-MM-DD</B>).<BR>Por ejemplo: 2005-07-22", idCamFoco);
					return false;
				}
				return true;
			}
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function comprobarSiBisisesto(anio) {
	var vFuncion = 'comprobarSiBisisesto';
	try {
			if ( ( anio % 100 != 0) && ((anio % 4 == 0) || (anio % 400 == 0))) { return true; } else { return false; }
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
function Decimales(Numero, Decimales) {
	var vFuncion = 'Decimales';
	try {
			pot = Math.pow(10,Decimales);
			num = parseInt(Numero * pot) / pot;
			nume = num.toString().split('.');
		
			entero = nume[0];
			decima = nume[1];
		
			if (decima != undefined) {
				fin = Decimales-decima.length; }
			else {
				decima = '';
				fin = Decimales; }
		
			for(i=0;i<fin;i++)
			  decima+=String.fromCharCode(48); 
		
			buffer="";
			marca=entero.length-1;
			chars=1;
			while(marca>=0){
			   if((chars%4)==0){
				  buffer="."+buffer;
			   }
			   buffer=entero.charAt(marca)+buffer;
			   marca--;
			   chars++;
			}
			num=buffer+','+decima;
			return num;
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function redondear(cantidad, decimales) {
	var vFuncion = 'redondear';
	try {
			var cantidad = parseFloat(cantidad);
			var decimales = parseFloat(decimales);
			decimales = (!decimales ? 2 : decimales);
			return Math.round(cantidad * Math.pow(10, decimales)) / Math.pow(10, decimales);
			//return Math.round(cantidad * Math.pow(10, decimales)) / Math.pow(10, decimales);0
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}
function UserEnLinea() {
	var vFuncion = 'UserEnLinea';
	try {
			strPARAM = "UrlActual="+trimPS(urlActual);
			ajaxEnLinea=nuevoAjax(); ajaxEnLinea.open("POST", "../goKernel/setEnLinea.php", true); ajaxEnLinea.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			ajaxEnLinea.onreadystatechange = function() { if (ajaxEnLinea.readyState == 4) { if (ajaxEnLinea.status == 200) {
						document.getElementById('estadoEnLinea').style.backgroundColor = "#6C0";
						document.getElementById('CapaUserEnLinea').innerHTML = ajaxEnLinea.responseText;
						setTimeout ("UserEnLinea()", timerEnLinea);
				}
				else
					{ document.getElementById('estadoEnLinea').style.backgroundColor = "#F90"; document.getElementById('CapaUserEnLinea').innerHTML = "E"; setTimeout ("UserEnLinea()", timerEnLinea); }
			} /*else mensaje(msnWait);*/ }
			ajaxEnLinea.send(strPARAM);
		}
	catch(e) { document.getElementById('estadoEnLinea').style.backgroundColor = "#06F"; alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}

function ajaxPost(strURL, strPARAM, objDestino, funcion) {
    var evalTxt = "";
    eval("var xmlHttpReq" + contAjax + " = false;");
    eval("var self = this;");
    eval("self.xmlHttpReq" + contAjax + " = nuevoAjax();");
    eval("self.xmlHttpReq" + contAjax + ".open('POST', '" + strURL + "', true);");
    eval("self.xmlHttpReq" + contAjax + ".setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');");
    evalTxt += "self.xmlHttpReq" + contAjax + ".onreadystatechange = function() { ";
    evalTxt += "		if (self.xmlHttpReq" + contAjax + ".readyState == 4) { ";
    evalTxt += "			if(self.xmlHttpReq" + contAjax + ".status != 200){   ";
    evalTxt += "				alert('Ha ocurrido un error, por favor intente su petición mas tarde.'); ";
    evalTxt += "				updateObj(self.xmlHttpReq" + contAjax + ".responseText, '" + objDestino + "');";
    evalTxt += "			} else {";
    evalTxt += "				updateObj(self.xmlHttpReq" + contAjax + ".responseText, '" + objDestino + "'); eval('" + funcion + "'); ";
    evalTxt += "			}";
    evalTxt += "		} else { ";
    evalTxt += "			updateObj(\"<img src=\'../imPortal/carga.gif\' width=\'43\' height=\'10\'>\", '" + objDestino + "', self.xmlHttpReq" + contAjax + ".readyState); }";
    evalTxt += "}; ";
    evalTxt += "self.xmlHttpReq" + contAjax + ".send('" + strPARAM + "');";
    eval(evalTxt);
    contAjax++;
}

function updateObj(str, objDestino) {
    if ("#" + objDestino == "#") { } else {
        document.getElementById(objDestino).innerHTML = str;
    }
    var elements = document.getElementsByTagName('script');
    var code = '';
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id == "ajax") {
            code += elements[i].innerHTML;
            elements[i].id = "ajax_E" + contAjax;
        }
    }
    eval(code);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function openPdf(path, contenedor, vFilePdf, vTituPdf) {
	var vFuncion = 'openPdf';
	var msnWait = 'Abriendo archivo PDF...';
	var msnAjax = 'Ha ocurrido un problema al procesar su peticion...';
	try {
			bloquearPantalla(); mensaje("Un momento por favor...");
			strPARAM = "FilePdf="+vFilePdf+"&TituPdf="+escape(vTituPdf);
			ajax=nuevoAjax(); ajax.open("POST", path, true); ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			ajax.onreadystatechange = function() { if (ajax.readyState == 4) { if (ajax.status == 200) {
					SetOpacityOscuro('pantalla_xtra');
					muestraVentana(contenedor);
					document.getElementById(contenedor).innerHTML = ajax.responseText;
					document.getElementById('msn').innerHTML = "";
					ocultaVentana('ContenedorMsn');
					//desbloquearPantalla();
				}
				else
					{ alert("[Ajax: " + vFuncion + "][ES: " + ajax.status + "]\nMensaje: " + msnAjax); desbloquearPantalla(); }
			//desbloquearPantalla();
			} else mensaje(msnWait); }
			ajax.send(strPARAM);
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); desbloquearPantalla(); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function eliminaObjeto(objeto) {
	var pepas = document.getElementById(objeto);
	var padre = pepas.parentNode;
	padre.removeChild(pepas); 
}

//Estilo botones:
function dvSelecciona(vCadenaId, vCodigo, vTxtId, vIdDestino, vTxtDestino, vParam) {
	var vFuncion = 'dvSelecciona';
	try {
			var capas = document.getElementsByTagName('div');
			for (var i=0;i<capas.length;i++) {
				if(capas[i].id.indexOf(vCadenaId) != -1){
					var valorId = capas[i].id;
					var codiUsu = valorId.split("_")[1];
					document.getElementById(valorId).style.fontWeight = "normal";
				}
			}
			document.getElementById(vIdDestino).value = vCodigo;
			document.getElementById(vCadenaId+vCodigo).style.fontWeight = "bold";
			document.getElementById(vTxtDestino).innerHTML = vTxtId;

			document.getElementById(vTxtDestino).style.position = "relative";
		}
	catch(e) { }
}
function divDataView(vId) {
	var vFuncion = 'divDataView';
	try {
			document.getElementById(vId).style.visibility = "visible";
		}
	catch(e) { }
}
function divDataClose(vId) {
	var vFuncion = 'divDataClose';
	try {
			document.getElementById(vId).style.visibility = "hidden";
		}
	catch(e) { }
}
function divEnlaceOver(vId) {
	var vFuncion = 'divEnlaceOver';
	try {
			document.getElementById(vId).style.backgroundColor = "#E9E9E9";
			document.getElementById(vId).style.color = "#666666";
			document.getElementById(vId).style.borderColor = "#cccccc";
		}
	catch(e) { }
}
function divEnlaceOut(vId) {
	var vFuncion = 'divEnlaceOut';
	try {
			document.getElementById(vId).style.backgroundColor = "#F2F2F2";
			document.getElementById(vId).style.color = "#999999";
			document.getElementById(vId).style.borderColor = "#DDDDDD";
		}
	catch(e) { }
}
function divDatosEnlaceOver(vId) {
	var vFuncion = 'divDatosEnlaceOver';
	try {
			document.getElementById(vId).style.backgroundColor = "#F7F7F7";
			document.getElementById(vId).style.color = "#666666";
		}
	catch(e) { }
}
function divDatosEnlaceOut(vId) {
	var vFuncion = 'divDatosEnlaceOut';
	try {
			document.getElementById(vId).style.backgroundColor = "#FFFFFF";
			document.getElementById(vId).style.color = "#999999";
		}
	catch(e) { }
}
//Fin estilo botones.

//goViewVideo('iUlYOVt4NAo', 'MUCHAS COSAS NO PASARIAN');
function goViewVideo(video, titulo) {
	var vFuncion = 'goViewVideo';
	try {
			var objVideo = '<div style="padding-top:2px; padding-bottom:2px; width:100%; background-color:#333;">' + titulo + '</div><div style="padding-top:0px;"><object width="400" height="240" id="objVideo">';
			objVideo = objVideo + '<param name="movie" value="http://www.youtube.com/v/'+video+'?fs=1&amp;hl=es_ES&amp;rel=0">';
			objVideo = objVideo + '</param>';
			objVideo = objVideo + '<param name="allowFullScreen" value="true">';
			objVideo = objVideo + '</param>';
			objVideo = objVideo + '<param name="allowscriptaccess" value="always">';
			objVideo = objVideo + '</param>';
			objVideo = objVideo + '<embed src="http://www.youtube.com/v/'+video+'?fs=1&amp;hl=es_ES&amp;rel=0" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="400" height="240"></embed>';
			objVideo = objVideo + '</object></div>';
			objVideo = objVideo + '<div style="padding-top:2px; padding-bottom:2px; width:100%; background-color:#333; font-weight:bold;"><a href="javascript:;" class="vinculoBlanco11" onclick="javascript:ocultaVentanaYouTube(\'contenidoYoutube\');">CERRAR</a></div>';
			document.getElementById('contenidoYoutube').innerHTML = objVideo;
			muestraVentana('contenidoYoutube');
			goScroll('zonaYouTube');
		}
	catch(e) { }
}

function ocultaVentanaYouTube(capa) {
	var vFuncion = 'ocultaVentanaYouTube';
	try {
			document.getElementById(capa).style.visibility = 'hidden';
			eliminaObjeto('objVideo');
		}
	catch(e) { alert("[Catch: " + vFuncion + "]\n" + e.name + " - "+e.message); }
}