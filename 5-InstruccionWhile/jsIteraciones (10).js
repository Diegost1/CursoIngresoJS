
function Mostrar()

{
	//declarar contadores y variables 
	var num;
	var contadorPos=1;
	var contadorNeg=1;
	var numPositivo=0;
	var numNegativo=0;
	var respuesta=true;
	var contadorCeros=0;
	var CantidadDelosPar=0;
	var promedioPositivo=0;
	var promedioNegativo=0;
	var DifPositivoNegativo=0;

	while(true)
	{
		num=parseInt(prompt("INGRESE UN NUMERO: "))
		while(isNaN(num))
		{
			num=parseInt(prompt("INGRESE SOLO NUMEROS"));
		}
		
		if(num<0)
		{
			numNegativo=numNegativo+num;
			contadorNeg=contadorNeg+1;
			
		}
		else if(num>0)
		{
			numPositivo=numPositivo+num;
			contadorPos=contadorPos+1;
		}
		else if(num==0)
		{
			contadorCeros=contadorCeros+1;
		}
		else if(num%2==0)
		{
			CantidadDelosPar=CantitdadDelosPar+1;
		}

		respuesta=confirm("¿Quiere seguir ingresando numeros?");
		
		promedioPositivo=numNegativo/contadorNeg;
		promedioNegativo=numPositivo/contadorPos;

		DifPositivoNegativo=numPositivo+numNegativo;

		
	}

}//FIN DE LA FUNCIÓN