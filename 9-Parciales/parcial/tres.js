function Mostrar()
{
var ancho;
var largo;
var resultado;
largo=document.getElementById("largo").value;
ancho=document.getElementById("ancho").value;
resultado=(largo*2+ancho*2)*3;
alert("Costaran "+resultado+" de alambre");

}
