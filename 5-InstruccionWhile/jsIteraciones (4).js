function Mostrar()
{
var numero;
while(!(numero >= 1 && numero <= 10))
{
	numero = prompt("ingrese un número entre 0 y 10.");
}
document.getElementById("Numero").value=numero;


}//FIN DE LA FUNCIÓN