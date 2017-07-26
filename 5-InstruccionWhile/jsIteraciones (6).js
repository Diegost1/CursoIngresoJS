function Mostrar()
{

var num=0;
		var acumulador=0;
		var contador=1;
		var promedio=0;

		while(contador<=5)
		{
			    num= parseInt(prompt("INGRESE EL NUMERO "+contador));
				while(isNaN(num))
				{
					num=prompt("No funciona, INGRESE UN NUMERO");
					num=parseInt(num);
				}
			    acumulador+=num;
			    contador++;
		}

		promedio = acumulador/5;


			alert("LA SUMA ES: " + acumulador +"\nEL PROMEDIO ES: " + promedio);


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=promedio;

}//FIN DE LA FUNCIÓN