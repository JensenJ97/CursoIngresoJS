/*
Julian Jensen
DIV Y
*/

function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	let mensaje = ""
	

	switch(mes){
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno."
			break;
		
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio."
			break;
		
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			mensaje = "Ya pasamos el frio, ahora calor!!!."
			break;
	}
	alert(mensaje);

}

