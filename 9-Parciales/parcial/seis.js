function Mostrar() 
{
var contador = 0;
var numIngresado;
var max;
var min;
var bandera = true;


while (contador < 24)
{
    numIngresado=prompt("Ingrese un numero")
    while(numIngresado<0)
    {
        numIngresado=prompt("INGRESE UN IMPORTE MAYOR A 0");
        
    }
    contador++;
    if(bandera)
    {
        bandera=false;
        max=numIngresado;
        min=numIngresado;
    }
    else 
        if(numIngresado<max)
        {
            max=numIngresado;
        }
        if(numIngresado>min)
        {
            min=numIngresado;
        }
    
}
alert("El mayor importe fue: "+max+" y el menor importe fue: "+min);
}