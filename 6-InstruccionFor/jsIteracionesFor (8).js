function Mostrar()
{
var numIngresado=prompt("Escriba un numero");
var contador=0;
for(var i=2 ; i<numIngresado ; i++)
{
    if(numIngresado%i==0)
    {
        alert(numIngresado);
    }
}



}//FIN DE LA FUNCIÓN