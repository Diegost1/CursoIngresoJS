function Mostrar()
{
var numIngresado;
var sexo;
var contador=0;
var contVarones=0;
var prom;
var bandera=true;
var max;
var min;

while(contador<100)
{
    numIngresado=parseInt(prompt("Ingrese una edad"));
    while(numIngresado<=0 || numIngresado>=100)
    {
        numIngresado=prompt("Ingrese un valor del 0 al 100");
    }
    contador++;
    
    sexo=prompt("Ingrese un sexo 'f' para Femenimo y 'm' para masculino")
    while(sexo!="f" && sexo!="m")
    {
        sexo=prompt("INGRESE SOLO 'F' O 'M'");
    }
    if(bandera)
    {
        bandera=false;
        max=numIngresado;
        min=numIngresado;
    }
    else
    {
        if(numIngresado<min)
        {
            min=numIngresado;
        }
        if(numIngresado>=20 && sexo=="m")
        {
            max=numIngresado;
            contVarones++;
        }
    }
}
prom=numIngresado/contador;
alert("Promedio de la edad: "+prom);
alert("La edad más baja: "+min);
alert("cantidad de varones mayores de 20: "+contVarones);
}
