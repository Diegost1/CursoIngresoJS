function Mostrar()
{
	// declarar variables
	var num=0;
	var numMax;
	var numMin;
	var respuesta=true;
	var primera=true;
	
	while(respuesta==true)
	{	
		num=prompt("Ingrese un numero: ")
		if(primera)
		{
			numMax=num;
			numMin=num;
			primera=false;
		}	
		else if(num < numMin)
		{
			numMin=num;
		}	
		else if(num > numMax)
		{
			numMax=num;
		}
		respuesta=confirm("¿Quiere ingresar otro numero?");
		
	}
	
document.getElementById("maximo").value=numMax;
document.getElementById("minimo").value=numMin;


}//FIN DE LA FUNCIÓN