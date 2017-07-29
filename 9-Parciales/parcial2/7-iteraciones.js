//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var notas;
var contAlumnos=0;
var contVarones=0;
var sexo;
var bandera=true;
var menor;
var mayor;
var prom;
var acumNotas=0


notas=parseInt(notas);

while(contAlumnos<6)
{	
	notas=prompt("Ingrese las notas");
	contAlumnos++;
	
	while(notas<10)
	{
		notas=prompt("Ingrese una nota de 1 a 10");
	}
	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("Ingrese el sexo 'f' para femenino y 'm' para masculino");
	}
	
	if(bandera)
	{
		bandera=false;
		notas=mayor;
		notas=menor;
	}
	else if(notas>mayor&&notas<menor)
	{
		acumNotas+=notas;
		prom=parseInt(prom);
		prom=acumNotas/contAlumnos;
		

	}
	else if(notas < menor)
	{
		menor=notas;
	}
	else if(notas>=mayor&&sexo!="m")
	{
		contVarones++;
		notas=mayor		
	}

alert("El promedio de las notas es de: "+promedio+ " La nota mas baja: "+menor+ "cantidad de varones: "+contVarones+" su nota mas alta fue: "+mayor);

}	


}

