/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 // MARCAS = ArgentinaLuz , FelipeLamparas , JeLuz , HazIluminacion , Osram

 
 function CalcularPrecio () {
    
    let precioOriginal = 35;
    let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let descuento = 0.5
    let precioConDescuento = document.getElementById("txtIdprecioDescuento");
    let impuestos = 0.10
 
    if(cantidadLamparas == 5){
            switch(marca){
                case "ArgentinaLuz":
                descuento = 0.40;
                break;
                case "FelipeLamparas":
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                descuento = 0.30;
                break;
            }
    }
        if(cantidadLamparas == 4){
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                descuento = 0.25;
                break;
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                descuento = 0.20;
                break;
            }
        }
        if(cantidadLamparas == 3){
             switch(marca){
                case "ArgentinaLuz":
                descuento = 0.15;
                break;
                case "FelipeLamparas":
                descuento = 0.10;
                break;
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                descuento = 0.05;
                break;
            }
        }
        if (cantidadLamparas < 2) {
        descuento = 0.0
        }
    

    console.log(descuento)

    let precioFinal = precioOriginal - (precioOriginal * descuento)
    let totalCompra = precioFinal * cantidadLamparas;
    if (totalCompra > 120) {
        impuestos = impuestos * totalCompra 
        totalCompra = totalCompra + impuestos 
        alert("Usted pago $" + impuestos + " de IIBB")
        console.log("$" + impuestos + " de IIBB")
    }
    precioConDescuento.value = totalCompra;
}
 
 
 
 
 
 
 
 
 
 
 /* SOLUCION SWITCH IF
 function CalcularPrecio () {
    
    let precioOriginal = 35;
    let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let descuento = 0.5
    let precioConDescuento = document.getElementById("txtIdprecioDescuento");
    let impuestos = 0.10
 
    switch(cantidadLamparas){
        case 5:
           if(marca == "ArgentinaLuz"){
                descuento = 0.40;
           } else {
                descuento = 0.30;
            }
        break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas" ) {
                descuento = 0.25;
            } else {
                descuento = 0.20;
            }
        break;
        case 3:
             if(marca == "ArgentinaLuz"){
                descuento = 0.15;
             } else if (marca == "FelipeLamparas"){
                descuento = 0.10;
             }else{
                descuento = 0.05;
            }
        break;
        case 2:
        case 1:
        descuento = 0.0
        break;
    }

    console.log(descuento)

    let precioFinal = precioOriginal - (precioOriginal * descuento)
    let totalCompra = precioFinal * cantidadLamparas;
    if (totalCompra > 120) {
        impuestos = impuestos * totalCompra 
        totalCompra = totalCompra + impuestos 
        alert("Usted pago $" + impuestos + " de IIBB")
        console.log("$" + impuestos + " de IIBB")
    }
    precioConDescuento.value = totalCompra;
}
 
 */
 
 
 
 
 
 
 
 /* SOLUCION CON SWITCH
 
 function CalcularPrecio () {
    
    let precioOriginal = 35;
    let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let descuento = 0.5
    let precioConDescuento = document.getElementById("txtIdprecioDescuento");
    let impuestos = 0.10
 
    switch(cantidadLamparas){
        case 5:
            switch(marca){
                case "ArgentinaLuz":
                descuento = 0.40;
                break;
                case "FelipeLamparas":
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                descuento = 0.30;
                break;
            }
        break;
        case 4:
            switch(marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                descuento = 0.25;
                break;
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                descuento = 0.20;
                break;
            }
        break;
        case 3:
             switch(marca){
                case "ArgentinaLuz":
                descuento = 0.15;
                break;
                case "FelipeLamparas":
                descuento = 0.10;
                break;
                case "JeLuz":
                case "HazIluminacion":
                case "Osram":
                descuento = 0.05;
                break;
            }
        break;
        case 2:
        case 1:
        descuento = 0.0
        break;
    }

    console.log(descuento)

    let precioFinal = precioOriginal - (precioOriginal * descuento)
    let totalCompra = precioFinal * cantidadLamparas;
    if (totalCompra > 120) {
        impuestos = impuestos * totalCompra 
        totalCompra = totalCompra + impuestos 
        alert("Usted pago $" + impuestos + " de IIBB")
        console.log("$" + impuestos + " de IIBB")
    }
    precioConDescuento.value = totalCompra;
}

*/































 /* SOLUCION CON IF 

function CalcularPrecio () {
    
    let precioOriginal = 35;
    let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let descuento = 0.0
    let precioConDescuento = document.getElementById("txtIdprecioDescuento");
    let impuestos = 0.10
    
    if (cantidadLamparas >= 6){ 
        descuento =  0.50  
    } else if (cantidadLamparas == 5) {
        if(marca == "ArgentinaLuz"){
            descuento = 0.40
        } else {
              descuento = 0.30
        }
    } else if (cantidadLamparas == 4) { 
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = 0.25
        } else {
            descuento = 0.20
        }
    } else if (cantidadLamparas == 3) {
        if (marca == "ArgentinaLuz") {
            descuento = 0.15
        } else if (marca == "FelipeLamparas") {
            descuento = 0.10
        } else {
            descuento = 0.05
        }
    }
    
    let precioFinal = precioOriginal - (precioOriginal * descuento)
    
    let totalCompra = precioFinal * cantidadLamparas;
    if (totalCompra > 120) {
        impuestos = impuestos * totalCompra 
        totalCompra = totalCompra + impuestos 
        alert("Usted pago $" + impuestos + " de IIBB")
        console.log("$" + impuestos + " de IIBB")
    }
    console.log("precio final de la lampara $" + precioFinal)
    console.log("descuento del " + descuento + " por ciento")
    
    
    precioConDescuento.value = totalCompra;


}
 	
*/


