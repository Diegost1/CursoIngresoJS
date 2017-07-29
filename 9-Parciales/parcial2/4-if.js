//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var num1;
var num2;
var resultado;

num1=prompt("Ingrese el primer valor");
num1=parseInt(num1);
num2=prompt("Ingrese el segundo valor");
num2=parseInt(num2);

if(num1==num2)
{
	resultado=num1*num2;
	document.write("Son iguales la multiplicaciòn es de: "+resultado);
}
else if(num1>num2)
{
	resultado=num1-num2;
	document.write("El primero es Mayor al segundo, la resta es de: "+resultado);
}
else
{
	resultado=num1+num2;
	document.write("El primero es menor que el segundo, la suma es de: "+resultado);
}	
}

