/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var uno;
    var dos;
    var respuesta;

    uno=document.getElementById("numeroUno").value;
    uno=parseInt(uno);
    dos=document.getElementById("numeroDos").value;
    dos=parseInt(dos);
    respuesta=uno + dos;
    alert("la suma es: "+ respuesta);


}

