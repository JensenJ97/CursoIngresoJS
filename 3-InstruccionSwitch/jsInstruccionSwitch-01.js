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
		case "Enero":
			mensaje = "que comiences bien el año!!!."
			break;
	
		case "Marzo":
			mensaje = "a clases!!!."
			break;
		
		case "Julio":
			mensaje = "se vienen las vacaciones!!!."
			break;

		case "Diciembre":
			mensaje = "Felices fiesta!!!."
			break;
	}
	alert(mensaje);

}

