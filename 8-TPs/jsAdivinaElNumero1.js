/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numIngresado;



function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*101)+1; //Genero el número RANDOM entre 1 y 100
	console.log(numeroSecreto);
		//alert(numeroSecreto );    
}

function verificar()
{   numIngresado=document.getElementById("numero").value;

    contadorIntentos==contadorIntentos++;

    if(numIngresado==numeroSecreto)
    {
      alert("Usted es un ganador!!! y en solo:"+contadorIntentos+ " intentos");
      contadorIntentos=0;
      
    }
    else if(numIngresado<numeroSecreto)
    {
      alert("Falta...");
    }
    else if(numIngresado>numeroSecreto)
    {
      alert("Se pasó...");
    }

    document.getElementById("intentos").value=contadorIntentos;
}