function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var Numero=Math.floor(Math.random()*10)+1;


if(Numero >= 9)
{
	alert("Excelente: "+Numero);
}
else if(Numero >= 4)
{
	alert("APROBÓ: "+Numero);
}
else
{
	alert("Vamos, la próxima se puede: "+Numero);
}

}//FIN DE LA FUNCIÓN