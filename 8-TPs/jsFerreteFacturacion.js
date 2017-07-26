/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var PrecioUno;
var PrecioDos;
var PrecioTres;
var resultado;
var promedio;

    PrecioUno=document.getElementById("PrecioUno").value;
    PrecioUno=parseInt(PrecioUno);
    PrecioDos=document.getElementById("PrecioDos").value;
    PrecioDos=parseInt(PrecioDos);
    PrecioTres=document.getElementById("PrecioTres").value;
    PrecioTres=parseInt(PrecioTres);

function Sumar () 
{   PrecioUno=document.getElementById("PrecioUno").value;
    PrecioUno=parseInt(PrecioUno);
    PrecioDos=document.getElementById("PrecioDos").value;
    PrecioDos=parseInt(PrecioDos);
    PrecioTres=document.getElementById("PrecioTres").value;
    PrecioTres=parseInt(PrecioTres);

    resultado=PrecioUno + PrecioDos + PrecioTres ;
    alert("Facturación suma: "+resultado);
}
function Promedio () 
{   PrecioUno=document.getElementById("PrecioUno").value;
    PrecioUno=parseInt(PrecioUno);
    PrecioDos=document.getElementById("PrecioDos").value;
    PrecioDos=parseInt(PrecioDos);
    PrecioTres=document.getElementById("PrecioTres").value;
    PrecioTres=parseInt(PrecioTres);

    resultado=PrecioUno + PrecioDos + PrecioTres ;
    promedio=resultado/3;
	alert("El promedio es: "+promedio);
}
function PrecioFinal () 
{
    PrecioUno=document.getElementById("PrecioUno").value;
    PrecioUno=parseInt(PrecioUno);
    PrecioDos=document.getElementById("PrecioDos").value;
    PrecioDos=parseInt(PrecioDos);
    PrecioTres=document.getElementById("PrecioTres").value;
    PrecioTres=parseInt(PrecioTres);

    resultado=PrecioUno + PrecioDos + PrecioTres ;
    promedio=(resultado +(resultado *21)/100);
    alert("El precio final es: "+promedio);


}