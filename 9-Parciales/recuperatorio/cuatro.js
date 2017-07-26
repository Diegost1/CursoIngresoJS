function Mostrar()
{
var num1;
var num2;
var resultado;

num1=prompt("Escriba el primer numero");
num1=parseInt(num1);
num2=prompt("Escriba el segundo numero");
num2=parseInt(num2);
resultado=parseInt(resultado);

resultado=num1+num2;
if(resultado>0)
{
    document.write("El resultado es positivo: "+resultado);
}
else if(resultado<0)
{
    document.write("El resultado es Negativo: "+resultado);
}
else
{
    document.write("El resultado es igual a CERO: "+resultado);
}

}
