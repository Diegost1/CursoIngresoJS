function Mostrar()
{
var numIngresado;
var contador=0;
var max;
var min;
var bandera=true;
numIngresado=parseInt(numIngresado);

while(contador<5)
{
    numIngresado=prompt("Ingrese un numero");
    while(numIngresado<=0)
    {
        numIngresado=prompt("Ingrese solo numero mayores que 0");
    }
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
        }
        if(numIngresado<min)
        {
            min=numIngresado;
        }

    }    
    contador++;
}
alert("El mas pesado fue: "+max+" Kg "+" y el menos pesado fue: "+min+" Kg");
}
