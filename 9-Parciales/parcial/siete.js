function Mostrar()
{
var numIngresado;
var sexo;
var promedio=0;
var contador=0;
var contVaron=0;
var bandera=true;
var min;
var maxVaron;


while(contador <=100)
{   
    numIngresado=parseInt(prompt("Ingrese un valor"));
    while(numIngresado<0 || numIngresado>10)
    {
        numIngresado=prompt("INGRESE UN VALOR ENTRE 10 Y 0");
    }
    contador++;
    sexo=prompt("Ingrese 'f' para Femenino y 'm' para Masculino ");
    while(sexo!="f" && sexo!="m")
    {
        sexo=prompt("Ingrese SOLO 'f' para Femenino y 'm' para Masculino ");
    }
    if(bandera)
    {
        bandera=false;
        min=numIngresado;
        maxVaron=numIngresado;
    }
    else 
    {
        if(numIngresado<=maxVaron && sexo=="m")
        {
            maxVaron=numIngresado;
            contVaron++;
        }
        if(numIngresado>min)
        {
            min=numIngresado;
        }
        
    }
    


}
promedio=numIngresado/contador;
alert("El promedio es de: "+promedio);
alert("la nota mas baja es de: "+min);
alert("cantidad de varones con nota mayor o igual de 6 es de: "+contVaron);
}
