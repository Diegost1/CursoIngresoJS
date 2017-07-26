/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var NumeroIngresado;
var conversor=0;

function FahrenheitCentigrados () 
{
    NumeroIngresado=document.getElementById("Temperatura").value;
    NumeroIngresado=parseInt(NumeroIngresado);
    conversor=parseInt(conversor);
	conversor=(NumeroIngresado-32)/1.8;
    alert(NumeroIngresado+"° Fahrenheit son: "+conversor+"° Centígrados");
}

function CentigradosFahrenheit () 
{
    NumeroIngresado=document.getElementById("Temperatura").value;
    NumeroIngresado=parseInt(NumeroIngresado);
    conversor=parseInt(conversor);
	conversor=(NumeroIngresado*1.8)+32;
    alert(NumeroIngresado+"° Centígrados son: "+conversor+"° Fahrenheit");
}
