function Mostrar()
{
var numIngresado;
var contador=0;
var respuesta=true;
var contNumPares=0;
var prom;
var acum=0;
var bandera=true;
var max;
var min;


while(respuesta==true)
{
    numIngresado=parseInt(prompt("Ingrese un importe"));
    while(numIngresado<0)
    {
        numIngresado=prompt("INGRESE UN IMPORTE POSITIVO");
    }
    contador++;
    acum+=numIngresado;
    if(numIngresado%2==0)
    {
        contNumPares++;
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
    respuesta=confirm("¿Quiere seguir ingresando números?");
}
prom=numIngresado/contador;
document.write("La cantidad de numeros pares: "+contNumPares+"<br>");
document.write("El promedio de todos los numeros: "+prom+"<br>");
document.write("La suma de los números: "+acum+"<br>");
document.write("El Máximo: "+max+" , el Minímo: "+min+"<br>");
}
