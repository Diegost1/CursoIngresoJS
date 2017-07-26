function Mostrar()
{
var numero_a;
var numero_b;
var numero_c;
var resultado;
var promedio;

numero_a=document.getElementById("precioUno").value;
numero_a=parseInt(numero_a);
numero_b=document.getElementById("precioDos").value;
numero_b=parseInt(numero_b);
numero_c=document.getElementById("precioTres").value;
numero_c=parseInt(numero_c);
resultado=parseInt(resultado);

resultado=numero_a+numero_b+numero_c;
alert("El resultado de la suma es de: "+resultado);

promedio=resultado/3;
alert("El promedio de los numeros es: "+promedio);
}
