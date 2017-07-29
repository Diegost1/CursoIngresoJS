//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var numIngresado;
var resultado;
numIngresado=prompt("Ingrese un importe");
numIngresado=parseInt(numIngresado);
resultado=(numIngresado+(numIngresado*21)/100);
alert("el importe màs el IVA es de: "+resultado);
document.getElementById("importe").value=resultado;
	
}

