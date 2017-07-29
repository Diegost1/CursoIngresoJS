//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var importe;
var contador=0;
var bandera=true;
var mayor;
var menor;

while(contador<7)
{			
	importe=prompt("Ingrese un importe");
	contador++;
		
	while(importe<0)
	{
		importe=prompt("Ingrese un importe del 1 a 7 ");		
	}

	if(bandera)
	{
		bandera=false;
		mayor=importe;
		menor=importe;
	}
	else if (importe>mayor)
		{
			mayor=importe;
			
		}
		else if(importe<menor)
		{
			menor=importe;
		}
}	
	alert("Mayor importe: "+mayor+" Menor importe: "+menor);
}

