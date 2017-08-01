function Mostrar()
{
var numIngresado;
var respuesta=true;
var contador=0;
var contPares=0;
var prom;
var acum=0;
var bandera=true;
var max;
var min;

while(respuesta==true)
{
    numIngresado=parseInt(prompt("Ingrese un numero positivo"));
    while(numIngresado<=0)
    {
        numIngresado=prompt("INGRESE SOLO NUMEROS POSITIVOS");
    }
    contador++;
    acum+=numIngresado;
    if(numIngresado%2==0)
    {
        contPares=contPares+1;
    }
    else if(bandera)
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
    respuesta=confirm("desea seguir escribiendo valores?");
}
prom=numIngresado/contador;
document.write("Cantidad de numeros Pares: "+contPares+"<br>");
document.write("Promedio de los numeros Ingresados: "+prom+"<br>");
document.write("La suma de todos los numeros: "+acum+"<br>");
document.write("el numero Maximo es: "+max+" y el numero minimo es: "+min+"<br>");
}
