function Mostrar()
{
var numeroIngresado;
var iva;

numeroIngresado=prompt("Ingrese un numero");
numeroIngresado=parseInt(numeroIngresado);
iva=(numeroIngresado+(numeroIngresado*21)/100);
alert("Mas el 21% de IVA es: "+iva);
document.getElementById("importeFinal").value=iva;


}
