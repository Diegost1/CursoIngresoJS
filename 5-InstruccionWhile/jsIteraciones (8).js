function Mostrar()
{	
	var num=0;
	
	var positivo=0;
	var negativo=1;
	var respuesta=true;
	
	negativo=parseInt(negativo);
	positivo=parseInt(positivo);
	
while(respuesta ==true)
	{	
		num=parseInt(prompt("ESCRIBA UN NUMERO: "))
		if(num>=0)
			{
				positivo+=num;
			}
			else
			{	
				negativo*=num;
			}
		respuesta=confirm("¿Quiere ingresar otro numero?");

	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}


//FIN DE LA FUNCIÓN