//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var ancho;
var	largo;
var resultado;
var perimetro;

ancho=document.getElementById("ancho").value;
ancho=parseInt(ancho);
largo=document.getElementById("largo").value;
largo=parseInt(largo);

perimetro=(2*ancho)+(2*largo);
resultado=perimetro*6;
alert("Se necesitara de alambre: "+resultado+" metros.");
	
}

