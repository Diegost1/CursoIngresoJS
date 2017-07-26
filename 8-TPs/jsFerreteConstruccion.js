/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largo=0;
var ancho=0;
var radio=0;
var resultado=0;
var alambre=0;


function Rectangulo () 
{
    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho);

    largo=largo*2
    ancho=ancho*2
    resultado=(largo+ancho)*3;
    alert("Se necesitará: "+resultado+" De alambre");
}
function Circulo () 
{   
    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);

    respuesta=(2*(Math.PI)*radio)*3;
    alert("Se necesitará comprar: "+respuesta+" De alambre");
}
function Materiales () 
{   
    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho);  
    var area=largo+ancho;
    var cal=area*2;
    var cemento=area*3;

    alert("Se necesitará de Cal: "+cal+ " y de cemento: "+cemento);

}