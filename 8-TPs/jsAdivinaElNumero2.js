/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var num;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*101)+1;  //Genero el numero secreto
	console.log(numeroSecreto); //Para que salga en la consola	
}

function verificar()
{
	num=document.getElementById("numero").value;
	num=parseInt(num);

	contadorIntentos++;
	num=parseInt(num);
	while(isNaN(num))		//Verificacion / Pedir Solo numeros
	{
		num=alert("INGRESE SOLO NUMEROS");  
	}
	while(num==numeroSecreto)
	{
		
		
		if(contadorIntentos==1)
		{
			alert("Usted es un Psiquico: "+contadorIntentos);
			break;
		}
		else if(contadorIntentos==2)
		{
			alert("Excelente Percepción");
			break;
		}
		else if(contadorIntentos==3)
		{
			alert("Esto es Suerte");
			break;
		}
		else if(contadorIntentos==4)
		{
			alert("Excelente técnica");
			break;
		}
		else if(contadorIntentos==5)
		{
			alert("Usted está en la media");
			break;
		}
		else if((contadorIntentos>6)&&(contadorIntentos<10))
		{
			alert("falta técnica");
			break;
		}
		else if((contadorIntentos>10)&&(contadorIntentos<100))
		{
			alert("Afortunado en el amor");
			break;
		}
		else
		{}
		
	}
	
	document.getElementById("intentos").value=(contadorIntentos);

}