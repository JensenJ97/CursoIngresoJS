/*
Julian Jensen
DIV Y
*/


function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;
	if(edad < 18 && estadoCivil !== "Soltero"){
		alert ("Es muy pequeño para NO ser soltero")
	} else {
		alert ("Todo en orden")
	}
	


}//FIN DE LA FUNCIÓN

