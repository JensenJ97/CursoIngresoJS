/*
Julian Jensen
DIV Y
*/


function mostrar()
{
	let estacionIngresada = txtIdEstacion.value;
	let destinoIngresado = txtIdDestino.value;
	let estadiaBase = 15000
	let aumento = 0
	let descuento = 0 

	switch(estacionIngresada){
		case "Verano":
			switch(destinoIngresado){
				case "Bariloche":
				descuento = 0.20;
				break;
				case "Cataratas":
				case "Cordoba":
				aumento = 0.10;
				break;
				case "Mar del plata":
				aumento = 0.20;
				break;
			}
		break;
		
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche": 
				aumento = 0.20;
				break;
				case "Cataratas":
				case "Cordoba":
				descuento = 0.10;
				break;
				case "Mar del plata":
				descuento = 0.20;
				break;
			}
		break;
		
		case "Primavera":
		case "Otoño":
			switch(destinoIngresado){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				aumento = 0.10;
				break;
			}
		break;

	}

	let precioFinal = estadiaBase + (aumento * estadiaBase) - (descuento * estadiaBase);

	alert("el precio final de la estadia es de $" + precioFinal);
	if (aumento > 0){
		console.log("el aumento es del " + aumento + " por ciento");
	} else {
		console.log("el descuento es del " + descuento + " por ciento");
	}	
}


