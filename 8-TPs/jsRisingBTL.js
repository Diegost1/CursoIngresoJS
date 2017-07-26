/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
var Edad;
var Sexo;
var EstadoCivil;
var Sueldo;
var NumLegajo;
var Nacionalidad;



function ComenzarIngreso () 
{   
    if((Edad>18)&&(Edad<90))
    {
        Edad=prompt("Escriba su edad")       
    }
    else if((Sexo!="M")&&(Sexo!="F"))
    {
        Sexo=prompt("Escriba su sexo")
    }
    else if((EstadoCivil=1)&&(EstadoCivil=2)&&(EstadoCivil=3)&&(EstadoCivil=4))
    {
        EstadoCivil=prompt("Escriba su estado civil, 1 para Soltero, 2 para Casado, 3 para Divorciado y 4 para viudo");
        switch(EstadoCivil)
        {
            case "1":
            {
                EstadoCivil="Soltero/a";
            }
            case "2":
            {
                EstadoCivil="Casado/a";
            }
            case "3":
            {
                EstadoCivil="Divorciado/a";
            }
            case "4":
            {
                EstadoCivil="Viudo/a"
            }
        }
    }
    else{}
    document.getElementById("Edad").value=Edad;
    document.getElementById("Sexo").value=Sexo;
    document.getElementById("EstadoCivil").value=EstadoCivil;
    document.getElementById("Sueldo").value=Sueldo;
    document.getElementById("Legajo").value=NumLegajo;
    document.getElementById("Nacionalidad").value=Nacionalidad;
    
}

