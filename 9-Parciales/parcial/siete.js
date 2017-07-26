function Mostrar()
{
var notas;
var alumnos=parseInt(alumnos);
var sexo=prompt("Ingrese f o m ");
var promedio;
var notaBaja;
alumnos=100;
for(var i=1 ; i < alumnos ; i++)
{
    notas=prompt("Escriba las notas(del 1 al 10)");
    while(isNaN(notas))
    {   
        notas=prompt("ESCRIBA LAS NOTAS(del 1 al 10)");
    }
    while(sexo!="f" && sexo != "m");
    {
        while(isNaN(sexo))
        {
            sexo=prompt("Ingrese 'f' o 'm' ");
        }
    }

}

}
