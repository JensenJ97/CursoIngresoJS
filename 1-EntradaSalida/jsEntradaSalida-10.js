/*
Julian Jensen
DIV Y 

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = parseInt(txtIdImporte.value)
	let descuento = parseInt(importe) * 0.25
	let resultado = importe - descuento
	let textoResultado = document.getElementById("txtIdResultado")
	textoResultado.value = resultado
	alert("el descuento es " + descuento);
}
