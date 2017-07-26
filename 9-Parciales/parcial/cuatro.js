function Mostrar()
{   
var num_a;
var num_b;
var resultado;
num_a=prompt("Escriba el primer numero");
num_a=parseInt(num_a);
num_b=prompt("Escriba el segundo numero");
num_b=parseInt(num_b);

if(num_a==num_b)
{
    resultado=num_a*num_b;
    document.write("El resultado de la multiplicacion es de: "+resultado);
}
else if(num_a>num_b)
{
    resultado=num_a-num_b;
    document.write("El resultado de la resta es de: "+resultado)
}
else
{
    resultado=num_a+num_b;
    document.write("El resultado de la suma es de: "+resultado);
}

}
