let menu;
let respuesta;
let num1;
let num2;
let respuestaGaseosa;
let menuGaseosa;

alert("Bienvenido a la gondola de las gaseosas");

respuestaGaseosa=prompt("¿Desea comprar gaseosa? Si o No, respetando mayusculas");

while(respuestaGaseosa == "Si");
{
    menuGaseosa=parseInt(prompt("Ingrese 1 para saber el valor de la CocaCola, 2 para saber el valor de la Fanta, 3 para saber el valor de la Sprite, 4 para saber el valor de la Pepsi, 5 para saber el valor de la Seven Up"));

    switch(menuGaseosa)
    {
        case 1:
            CocaCola();
            respuestaGaseosa=prompt("¿Desea continuar haciendo operaciones? Si o No");
            break;
        case 2:
            Fanta();
            respuestaGaseosa=prompt("¿Desea continuar haciendo operaciones? Si o No");
            break;
        case 3:
            Sprite();
            respuestaGaseosa=prompt("¿Desea continuar haciendo operaciones? Si o No");
            break;
        case 4:
            Pepsi();
            respuestaGaseosa=prompt("¿Desea continuar haciendo operaciones? Si o No");
            break;
        case 5:
            SevenUp();
            respuestaGaseosa=prompt("¿Desea continuar haciendo operaciones? Si o No");
            break;
        default:
            alert("Opcion invalida.");
            break;

    }
}
alert("Hasta la proxima");

function CocaCola ()
{
    let precio;
    let iva;
    let resultadoCocaCola;

    precio=250;

    iva=precio*1.21;

    resultadoCocaCola=alert("El precio de la CocaCola es "+precio+" pero con el IVA agregado el precio es: "+iva);

}
function Fanta ()
{
    let precio;
    let iva;
    let resultadoFanta;

    precio=270;

    iva=precio*1.21;

    resultadoFanta=alert("El precio de la Fanta es "+precio+" pero con el IVA agregado el precio es: "+iva);
}
function Sprite ()
{
    let precio;
    let iva;
    let resultadoSprite;

    precio=280;

    iva=precio*1.21;

    resultadoSprite=alert("El precio de la Sprite es "+precio+" pero con el IVA agregado el precio es: "+iva);
}
function Pepsi ()
{
    let precio;
    let iva;
    let resultadoPepsi;

    precio=220;

    iva=precio*1.21;

    resultadoPepsi=alert("El precio de la Pepsi es "+precio+" pero con el IVA agregado el precio es: "+iva);
}
function SevenUp ()
{
    let precio;
    let iva;
    let resultadoSevenup;

    precio=240;

    iva=precio*1.21;

    resultadoSevenup=alert("El precio de la Sevenup es "+precio+" pero con el IVA agregado el precio es: "+iva);
}

