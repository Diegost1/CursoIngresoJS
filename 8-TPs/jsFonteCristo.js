/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/


function NumerosPares()
{      
    var numIngresado;
    var contPares=1;
    var contImpares=1;
    numIngresado=document.getElementById("numero").value;

    if(numIngresado<i)
    {
        alert("Escriba un numero positivo");
    }
    else
    {
        for(var i=1 ; i<numIngresado ; i++)
        {
           if(i%2==0)
           {
              alert("Cantidad de numeros Pares: "+contPares);
              contPares++;   
           }
           else
           {}
        }
    }

}
function NumerosImpares() //numeros impares
{
    var numIngresado;
    var contImpares=1;
    numIngresado=document.getElementById("numero").value;

    if(numIngresado<i)
    {
        alert("Escriba un numero Positivo");
    }
    else
    {
        for(var i=1 ; 1 < numIngresado ; i++)
        {
            if(i*2+1==0)
            {
                alert("Cantidad de numeros Impares: "+contImpares)
                contImpares++;
            }
            else
            {}
        }
    }
}
function NúmerosDivisibles()
{
for(contadorPositivos==numeroIngresado ; contadorPositivos ; contadorPositivos--)
    {
                
   alert(contadorPositivos);
    }  
}         
function VerificarPrimo()
{

}
function NúmerosPrimos()
{

}
     

