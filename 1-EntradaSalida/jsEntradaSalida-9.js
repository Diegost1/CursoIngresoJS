/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var uno;
    var resultado;

    uno=document.getElementById("sueldo").value;
    uno=parseInt(uno);
    resultado=(uno+(uno*10)/100);
    resultado=document.getElementById("resultado").value=(resultado);

    
}
