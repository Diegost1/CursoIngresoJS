/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
    var cantidad;
    var Marcas;
    var descuento;
    var precio=35;
    var aumento;

    cantidad=document.getElementById("Cantidad").value;
    Marcas=document.getElementById("Marca").value;
    descuento=document.getElementById("precioDescuento").value;
   

    precio=parseInt(precio);
    cantidad=parseInt(cantidad);


switch(Marcas)

  {
    case "ArgentinaLuz":
    {
        if(cantidad>6)
         {
            descuento=(cantidad*precio-(cantidad*precio*50/100));
         }
         else if(cantidad == 5)
         {
            descuento=(cantidad*precio-(cantidad*precio*40/100));
         }
         else if(cantidad == 4)
         {
             descuento=(cantidad*precio-(cantidad*precio*25/100));
         }
         else if(cantidad== 3)
         {
            descuento=(cantidad*precio-(cantidad*precio*15/100));
         }
        else if(cantidad<2)
        {
            descuento=cantidad*precio;
            alert("No tiene descuento.");
        }
         break;
    }
       
    case "FelipeLamparas":
    {
        if(cantidad>6)
        {
            descuento=(cantidad*precio-(cantidad*precio*50/100));
        }
        else if(cantidad== 5)
        {
            descuento=(cantidad*precio-(cantidad*precio*30/100));
        }
        else if(cantidad== 4)
        {
            descuento=(cantidad*precio-(cantidad*precio*25/100));
        }
        else if(cantidad== 3)
        {
            descuento=(cantidad*precio-(cantidad*precio*10/100));
        }
        else if(cantidad<2)
        {
            descuento=cantidad*precio;
            alert("No tiene descuento.");
        }
        break;
     }
     case "JeLuz":
     {
        if(cantidad>=6)
        {
            descuento=(cantidad*precio-(cantidad*precio*50/100));
        }
        else if(cantidad == 5)
        {
            descuento=(cantidad*precio-(cantidad*precio*30/100))
        }
        else if(cantidad == 4)
        {
            descuento=(cantidad*precio-(cantidad*precio*20/100))
        }
        else if(cantidad == 3)
        {
            descuento=(cantidad*precio-(cantidad*precio*5/100))
        }
        else if(cantidad<2)
        {
            descuento=cantidad*precio;
            alert("No tiene descuento.");
        }
        break;
     }
     case"HazIluminacion":
     {
        if(cantidad>6)
        {
           descuento=(cantidad*precio-(cantidad*precio*50/100))
        }
        else if(cantidad== 5)
        {
            descuento=(cantidad*precio-(cantidad*precio*30/100))
        }
        else if(cantidad== 4)
        {
            descuento=(cantidad*precio-(cantidad*precio*20/100))
        }
        else if(cantidad== 3)
        {
            descuento=(cantidad*precio-(cantidad*precio*5/100))
        }
        else if(cantidad<2)
        {
            descuento=cantidad*precio;
            alert("No tiene descuento.");
        }
        break;
     }
     case"Osram":
    {
        if(cantidad>6)
        {
            descuento=(cantidad*precio-(cantidad*precio*50/100))
        }
        else if(cantidad == 5)
        {
            descuento=(cantidad*precio-(cantidad*precio*30/100))
        }
        else if(cantidad== 4)
        {
            descuento=(cantidad*precio-(cantidad*precio*20/100))
        }
        else if(cantidad== 3)
        {
            descuento=(cantidad*precio-(cantidad*precio*5/100))
        }
        else if(cantidad<2)
        {
            descuento=cantidad*precio;
            alert("No tiene descuento.");
        }
        break;
    }

  }
      if(descuento>120)
    {
        aumento=(precio+(precio*10)/100)
        alert("IIBB Usted pago %10: "+aumento);
    }
    document.getElementById("precioDescuento").value=descuento;
}