/*
Julian Jensen
DIV Y
*/ 

function mostrar() {
	
	let numero = Math.ceil(Math.random() * 10)
	if(numero >= 9) {
		alert("Excelente, su nota es " + numero)
	}
	if (numero >= 4 && numero < 9) {
		alert("Aprobo, su nota es " + numero)
	} 
	if (numero < 4) {
		alert("Desaprobo, su nota es " + numero + ", vamos la proxima se puede!")
	}


}//FIN DE LA FUNCIÓN

