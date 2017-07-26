function Mostrar()
{
var numIngresado=prompt("Escriba un numero");
var contador=0;
for(var i=1 ; i<=numIngresado ; i++)
{
   if(i%2==0)
   {
       contador++;
   }
}
alert(contador);



}//FIN DE LA FUNCIÓN