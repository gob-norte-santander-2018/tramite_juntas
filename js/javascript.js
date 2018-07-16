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