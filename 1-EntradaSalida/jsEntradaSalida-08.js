/*

Julian Jensen
DIV Y

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo = parseInt(txtIdNumeroDividendo.value)
	let divisor = parseInt(txtIdNumeroDivisor.value) 
	let cociente = parseInt(dividendo/divisor)
	let resto = dividendo - (divisor * cociente)
	
	alert("el resto es "+ resto);
}


//resto = dividendo - divisor x cociente 