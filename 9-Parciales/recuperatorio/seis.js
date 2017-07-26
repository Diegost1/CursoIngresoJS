function Mostrar()
{
var numIngresado;
var contador=0;
var max;
var min;
var bandera=true;
numIngresado=parseInt(numIngresado);

while(contador<50)
{
    numIngresado=prompt("Ingrese un numero");
    while(isNaN(numIngresado<0))
    {
        numIngresado=prompt("Ingrese solo numero mayores que 0");
    }
    contador++;
    if(bandera)
    {
        bandera=false;
        max=numIngresado;
        min=numIngresado;
    }
    else
    {
        if(numIngresado>max)
        {
            max=numIngresado;
            alert("El mas pesado: "+max+" Kg");
        }
        if(numIngresado<min)
        {
            min=numIngresado;
            alert("El menos pesado: "+min+" kg");
        }
    }
    contador++;
}
}
