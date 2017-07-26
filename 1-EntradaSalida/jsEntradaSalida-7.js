/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno;
    var dos;
    var resultado;

    uno=document.getElementById("numeroUno").value; 
    uno=parseInt(uno);
    dos=document.getElementById("numeroDos").value;
    dos=parseInt(dos);
    resultado=uno + dos;
    alert("la suma es: "+ resultado);

}

function restar()
{
	var uno;
    var dos;
    var resultado;

    uno=document.getElementById("numeroUno").value;
    uno=parseInt(uno);
    dos=document.getElementById("numeroDos").value;
    dos=parseInt(dos);
    resultado=uno - dos;
    alert("la resta es: "+ resultado);
}

function multiplicar()
{ 
	var uno;
    var dos;
    var resultado;

    uno=document.getElementById("numeroUno").value;
    uno=parseInt(uno);
    dos=document.getElementById("numeroDos").value;
    dos=parseInt(dos);
    resultado=uno * dos;
    alert("la multiplicacion es: "+ resultado);
}

function dividir()
{
	var uno;
    var dos;
    var resultado;

    uno=document.getElementById("numeroUno").value;
    uno=parseInt(uno);
    dos=document.getElementById("numeroDos").value;
    dos=parseInt(dos);
    resultado=uno / dos;
    alert("la division es: "+ resultado);
}

