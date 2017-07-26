function Mostrar()
{
var mes;

mes=prompt("Escriba un mes del año");

switch(mes)
{
    case"enero":
    {
        alert("Comienza el año");
        break;
    }
    case"diciembre":
    {
        alert("Se vienen las fiestas");
        break;
    }
    case"febrero":
    case"marzo":
    case"abril":
    case"mayo":
    case"junio":
    case"julio":
    case"agosto":
    case"septiembre":
    case"octubre":
    case"noviembre":
    {
        alert("No es ni diciembre, ni Enero");
        break;
    }
}


}
