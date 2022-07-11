/*

Julian Jensen 
DIV Y 

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	let numero1 = parseInt(txtIdNumeroUno.value)
	let numero2 = parseInt(txtIdNumeroDos.value)
	alert("la suma es " + (numero1+numero2));	
}

function restar()
{
	let numero1 = parseInt(txtIdNumeroUno.value)
	let numero2 = parseInt(txtIdNumeroDos.value)
	alert("la resta es " + (numero1-numero2));
	
}

function multiplicar()
{ 
	let numero1 = parseInt(txtIdNumeroUno.value)
	let numero2 = parseInt(txtIdNumeroDos.value)
	alert("la multiplicacion es " + (numero1*numero2));
}

function dividir()
{
	let numero1 = parseInt(txtIdNumeroUno.value)
	let numero2 = parseInt(txtIdNumeroDos.value)
	alert("la division es " + (numero1/numero2));
}

