/*
Julian Jensen
DIV Y
*/

function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	if(edad >= 13 && edad <= 17){
		alert("Usted es adolescente")
	} else {
		alert("Usted no es adolescente")
	}


}