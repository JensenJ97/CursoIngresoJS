/*
Julian Jensen
DIV Y

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
let largo
let ancho
let radio

function tomarNumeros(){
    largo = parseInt(document.getElementById("txtIdLargo").value)
    ancho = parseInt(document.getElementById("txtIdAncho").value)
    radio = parseInt(document.getElementById("txtIdRadio").value)
    return
}


function Rectangulo () {
    tomarNumeros();
    let rectangulo = (largo * 2) + (ancho * 2)
    //multiplico porque son 3 hilos de alambre
    let alambre = rectangulo * 3
    alert ("se necesitan " + alambre + " metros de alambre")

}

function Circulo () {
    tomarNumeros();
    //con Math.round redondeo el valor de pi
    let circunferencia =  2 *(Math.round(Math.PI)) * radio
    let alambre = circunferencia * 3
    alert("se necesitan " + alambre + " metros de alambre" )

	
}
function Materiales () {
    tomarNumeros();
    let areaRectangulo = largo * ancho
    let cemento = areaRectangulo * 2
    let cal = areaRectangulo * 3 
    alert ("necesitamos " + cemento + " bolsas de cemento y " + cal + " bolsas de cal")
	
}

