/*

Julian Jensen
DIV Y


1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
let numeroUno 
let numeroDos 
let numeroTres 


function tomarNumeros(){
    numeroUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    numeroDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    numeroTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    return
}


function Sumar () {
    tomarNumeros();
    let suma = numeroUno+numeroDos+numeroTres;
    alert("la suma es " + suma)
	
}

function Promedio () {
    tomarNumeros();
    let promedio = (numeroDos+numeroDos+numeroTres)/3
    alert("el promedio es " + promedio)
	
}
function PrecioFinal () {
    tomarNumeros();
    let PrecioIva = (numeroUno + numeroDos + numeroTres) * 0.21
    let precioFinal = (PrecioIva + (numeroUno + numeroDos + numeroTres))
    alert("el precio final es " + precioFinal)
	
}