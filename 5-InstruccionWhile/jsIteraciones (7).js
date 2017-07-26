function Mostrar()
{
		
		var num=0;
		var contador=1;
		var promedio=0;
		var respuesta="si";
		var acumulador=0;

		contador=parseInt(contador);
		promedio=parseInt(promedio);

		while(respuesta=="si")
		{
			num=parseInt(prompt("ESCRIBA UN NUM "+contador));
			acumulador+=num;
			contador++;
			respuesta=prompt("¿Quiere seguir escribiendo numeros?");
			
		}
		promedio = acumulador/contador;
		alert("LA SUMA ES: " + acumulador +" EL PROMEDIO ES: " + promedio);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;
	
}//FIN DE LA FUNCIÓN