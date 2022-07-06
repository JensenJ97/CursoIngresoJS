/* 
Julian Jensen
DIV Y

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaramos la variable mensaje, que tendra el valor que se ingrese por prompt
	let mensaje = prompt("ingrese texto que quiera mostrar")
	
	//accedemos al elemento html por id y decimos que su valor es igual a la variable mensaje
	txtIdNombre.value = mensaje
}

