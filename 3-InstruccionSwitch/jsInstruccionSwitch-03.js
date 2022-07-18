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
		default:
			mensaje = "Este mes tiene 30 o más días"
			break;
	
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días."
			break;
		
		
	}
	alert(mensaje);

}