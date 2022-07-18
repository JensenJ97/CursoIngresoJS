/*
Julian Jensen
DIV Y
*/

function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	if(edad >= 13 && edad <= 17){
		alert ("Usted es adolescente")
	} if (edad >= 18) {
		alert ("Usted es mayor de edad")
	} if (edad <= 12){
		alert ("Usted es un niño")
	}


}