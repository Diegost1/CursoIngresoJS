/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var uno;
    var dos;
    var resultado;

    uno=document.getElementById("numeroDividendo").value;
    uno=parseInt(uno);
    dos=document.getElementById("numeroDivisor").value;
    dos=parseInt(dos);
    resultado=uno / dos;
    alert("el resto es: " +resultado);


}
