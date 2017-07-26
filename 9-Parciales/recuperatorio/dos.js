function Mostrar()
{
var numIngresado;
var resultado;
numIngresado=prompt("Ingrese un numero");
numIngresado=parseInt(numIngresado);
resultado=numIngresado-(numIngresado*25)/100;
document.getElementById("importeFinal").value=resultado;
}
