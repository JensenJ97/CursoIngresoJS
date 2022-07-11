/*
Julian Jensen
DIV Y

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = parseInt(txtIdSueldo.value)
	let aumento = parseInt(sueldo) * 0.10
	let resultado = sueldo + aumento
	let textoResultado = document.getElementById("txtIdResultado")
	textoResultado.value = resultado
	alert("el aumento es " + aumento);
}
