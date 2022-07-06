/*
Julian Jensen
DIV Y

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
	
	let nombre = txtIdNombre.value
	//con la funcion parseInt() convertimos un valor de tipo string en un numero entero
	let edad = parseInt(txtIdEdad.value)	

    //entre comillas figura el texto literal, y con los signos + concatenamos los valores de las diferentes variables	
	alert("Usted se llama " + nombre +" y tiene " + edad + " años");
}

