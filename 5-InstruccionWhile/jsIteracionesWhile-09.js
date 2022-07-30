/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero = true;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let maximo = document.getElementById("txtIdMaximo");
	let minimo = document.getElementById("txtIdMinimo");
	//iniciar variables
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("ingrese un numero"));
		if(banderaDelPrimero == true){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		respuesta=prompt("desea continuar?");
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}	 
	}	
	maximo.value=numeroMaximo;
	minimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN