/*
Julian Jensen
DIV Y
*/


function mostrar()
{
	let estacionIngresada = txtIdEstacion.value;
	let destinoIngresado = txtIdDestino.value;
	let mensaje = "No se viaja";

	switch(estacionIngresada){
		case "Verano":
			switch(destinoIngresado){
				case "Mar del plata":
				case "Cataratas":
				mensaje = "Se viaja";
				break;
				case "Cordoba":
				case "Bariloche":
				default:
				break;
			}
		break;
		
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche": 
				mensaje = "Se viaja";
				break;
				default:
				break;
			}
		break;
		
		case "Primavera":
			switch(destinoIngresado){
			case "Mar del plata":
			case "Cataratas":
			case "Cordoba":
			mensaje = "Se viaja";
			break;
			case "Bariloche":
			default:
			break;
			}
		break;	
		
		case "Otoño":
		mensaje = "Se viaja";
		
		break;

	}
	alert(mensaje);
}

	

	
	
