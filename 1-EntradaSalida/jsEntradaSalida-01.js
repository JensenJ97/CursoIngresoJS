
/*
Julian Jensen 
DIV Y
*/


/*Ejercicio 2
El hotel UTN 5 Estrellas nos pide desarrollar un software para hacer sus reservas, la carga de datos pedirá lo
siguiente:
- Apellido de la persona.
- Tipo de reserva (“individual”, “Parejas” o” familiar”).
- Cantidad de personas (tiene que ser mayor a 0 y menor a 10).
- Temporada (“otoño”, “invierno”, “primavera” y “verano”).
Debemos informar:
a) La temporada en la que reservan más parejas.
b) El promedio de las personas en las habitaciones familiares.
c) El total de personas que ingresaron en el hotel, en otoño.
*/

function mostrar()
{

let respuesta = "si";

let apellido;
let reserva;
let cantidadPersonas;
let temporada;

let contadorOtonioParejas = 0;
let contadorInviernoParejas = 0;
let contadorPrimaveraParejas = 0;
let contadorVeranoParejas = 0;

let acumuladorReservasFamiliares = 0;
let cantidadRevervasFamiliares = 0;

let totalPersonasOtonio = 0;


while(respuesta == "si"){
	alert("Ingrese datos de la reserva");
	apellido = prompt("apellido");
	reserva = prompt("reserva: individual, pareja o familiar");
	while(reserva != "indiviual" && reserva != "pareja" && reserva != "familiar"){
		obraSocial = prompt("Ingrese una de las 3 reservas posibles: individual, pareja o familiar");
		}
	cantidadPersonas = prompt("ingrese cantidad de personas (de 1 a 10)");
	while(cantidadPersonas > 10 || cantidadPersonas < 1){
		cantidadPersonas = prompt("ingrese cantidad valida: entre 1 y 10");
		}
	cantidadPersonas = parseInt(cantidadPersonas);
	temporada = prompt("temporada: otoño, primavera, verano o invierno");
	while(temporada != "otoño" && temporada != "primavera" && temporada != "verano"  &&  temporada != "invierno"){
		temporada = prompt("ingrese una temporada valida: otoño, primavera, verano o invierno");
		}
		


if(reserva == "pareja"){
	switch(temporada){
		case "invierno":
			contadorInviernoParejas++;
			break;
		case "otoño":
			contadorOtonioParejas++;
			break;
		case "primavera":
			contadorPrimaveraParejas++;
			break;
		case "verano":
			contadorVeranoParejas++;
			break;
	}
}



if (reserva == "familiar"){
	if (acumuladorReservasFamiliares == 0){
		acumuladorReservasFamiliares = cantidadPersonas;
		cantidadRevervasFamiliares++;
	} else {
		acumuladorReservasFamiliares = cantidadPersonas + acumuladorReservasFamiliares;
		cantidadRevervasFamiliares++;
	}
}


if (temporada == "otoño"){
	if (totalPersonasOtonio == 0){
		totalPersonasOtonio = cantidadPersonas;
	} else {
		totalPersonasOtonio = cantidadPersonas + totalPersonasOtonio;
	}
}



respuesta = prompt("quiere ingresar otra reserva? (si o no)")
while (respuesta != "si" && respuesta != "no"){
	respuesta = prompt("quiere ingresar otra reserva? (si o no)")
}
}
console.log("el promedio de personas por habitacion familiar es " + (acumuladorReservasFamiliares/cantidadRevervasFamiliares));
console.log("la cantidad de personas que ingresaron en otoño es " + totalPersonasOtonio);

if (contadorInviernoParejas > contadorOtonioParejas && contadorInviernoParejas > contadorPrimaveraParejas && contadorInviernoParejas > contadorVeranoParejas) {
	console.log("invierno es la temporada que eligen las parejas");
} else if (contadorOtonioParejas > contadorInviernoParejas && contadorOtonioParejas > contadorPrimaveraParejas && contadorOtonioParejas > contadorVeranoParejas) {
	console.log("otoño es la temporada que eligen las parejas");
} else if (contadorPrimaveraParejas > contadorInviernoParejas && contadorPrimaveraParejas > contadorOtonioParejas && contadorPrimaveraParejas > contadorVeranoParejas) {
	console.log("primavera es la temporada que eligen las parejas");
} else {
	console.log("verano es la temporada que eligen las parejas");
}

}









































/*Ejercicio 1
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto, necesitamos desarrollar un
software para el Hospital Italiano en el sector odontológico, que nos pide recopilar la información para los 5 turnos
que dio en el día, para eso debemos tomar los siguientes datos:
- El apellido.
- Obra social (“Ioma”, “Osde” y “Omint”).
- Tipo de tratamiento (“Extracción”,” Caries” y “Brackets”).
- Edad (entre 0 y 150 años inclusive).
Debemos informar:
a) Promedio de edad de los que utilizaron Brackets.
b) La obra social más atendida.
c) El apellido de la persona más joven con caries.


function mostrar()
{

contador = 1;

let apellido;
let obraSocial;
let tratamiento;
let edad;

let acumuladorPromedioEdadBrackets = 0;
let cantidadPersonasBrackets = 0;

let contadorIoma = 0;
let contadorOsde = 0;
let contadorOmint = 0;
let obraSocialMasAtendida;

let personaMasJovenCaries;
let edadMinimaCaries = 0;

while(contador <= 5){
	alert("Ingrese paciente numero " + contador);
	apellido = prompt("apellido");
	obraSocial = prompt("obra social: Ioma, Osde u Omint");
	while(obraSocial != "Ioma" && obraSocial != "Osde" && obraSocial != "Omint"){
		obraSocial = prompt("Ingrese una de las 3 obras sociales posibles: Ioma, Osde u Omint");
		}
	tratamiento = prompt("tratamiento: Extraccion, Caries o Brackets");
	while(tratamiento != "Extraccion" && tratamiento != "Caries" && tratamiento != "Brackets"){
		tratamiento = prompt("Ingrese uno de los 3 tratamientos posibles: Extraccion, Caries o Brackets");
		}
	edad = prompt("ingrese edad del paciente (de 0 a 150)");
	while(edad > 150 || edad < 0){
		edad = prompt("ingrese una edad valida: entre 0 y 150");
		}
	edad = parseInt(edad);
	
	if(tratamiento == "Brackets"){
		acumuladorPromedioEdadBrackets += edad;
		cantidadPersonasBrackets++;
	} 

	
	switch(obraSocial){
		case "Ioma":
			contadorIoma++;
			break;
		case "Omint":
			contadorOmint++;
			break;
		case "Osde":
			contadorOsde++;
			break;
	}

	if(tratamiento == "Caries" && edadMinimaCaries == 0){
		personaMasJovenCaries = apellido;
		edadMinimaCaries = edad;
	} else if (tratamiento == "Caries" && edad<edadMinimaCaries){
		personaMasJovenCaries = apellido;
		edadMinimaCaries = edad;
	}
	contador ++;
}

if(contadorIoma > contadorOmint && contadorIoma > contadorOsde){
	obraSocialMasAtendida = "Ioma"
} else if (contadorOmint > contadorIoma && contadorOmint > contadorOsde){
	obraSocialMasAtendida = "Omint"
} else {
	obraSocialMasAtendida = "Osde"
}

console.log("el promedio de edad de las personas con Brackets es " + (acumuladorPromedioEdadBrackets/cantidadPersonasBrackets)); //Punto 1

console.log("la obra social mas atendida es " + obraSocialMasAtendida); //punto 2

console.log("el paciente mas joven con caries es " + personaMasJovenCaries); //punto 3 

}

*/