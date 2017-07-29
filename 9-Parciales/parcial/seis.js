function Mostrar()
{
var contador=0;
var numIngresados;
var max;
var min;
var bandera=true;


while(contador<24)
{   
    contador++;
    numIngresados=prompt("Escriba el valor de las ventas(mayor a 0)");
    while(numIngresados<0)
    {
        numIngresados=prompt("Escriba el valor de las ventas(MAYOR A 0)");
    }
    if(bandera)
    {
        bandera=false;
        max=numIngresados;
        min=numIngresados;
    }
    else
    {
        if(numIngresados>max)
        {
            max=numIngresados;
        }
    }
        if(numIngresados<min)
        {
            min=numIngresados;
        }
   
}


}
