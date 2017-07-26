/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var uno;
    var resultado;

    uno=document.getElementById("importe").value;
    uno=parseInt(uno);
    resultado=(uno-(uno*25)/100);
    document.getElementById("resultado").value=(resultado)

}
