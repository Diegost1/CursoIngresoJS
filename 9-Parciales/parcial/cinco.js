function Mostrar()
{
var DiaDeSemana;
DiaDeSemana=prompt("Escriba un Dia de semana");

switch(DiaDeSemana)
{
    case"lunes":
    case"martes":
    case"miercoles":
    case"jueves":
    case"viernes":
    {
        alert("A trabajar !!!");
        break;
    }
    case"sabado":
    case"domingo":
    {
        alert("Es fin de semana!!!");
        break;
    }


}

}
