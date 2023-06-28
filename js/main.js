// VARIABLES
let inicio;
let subtotal = 0;
let precioFinal = 0;


// CLASES

//Constructor de productos que se usaria si el dueño de la 
//tienda quisiera agregar nuevos
class Producto{
    nombre;
    precio;
    editorial;
    categoria;

    constructor(nombre, precio, editorial, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.editorial = editorial;
        this.categoria = categoria;
    }
}

// Constructor de cada item de la factura
class ItemFactura{
    nombre;
    precio;
    cantidad;
    subtotal;

    constructor(nombre, precio, cantidad, subtotal){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.subtotal = subtotal;
    }
}

// PRODUCTOS
const producto1 = new Producto('Catan', 35000, 'Devir','juego de mesa');
const producto2 = new Producto('Bang!', 22000, 'Edge','juego de cartas');
const producto3 = new Producto('Sushi go', 18000, 'Devir', 'juego de cartas');
const producto4 = new Producto('Cubo Rubik', 5800, 'Hasbro', 'puzzle');
const producto5 = new Producto('Manual de D&D', 21500, 'Fanstasy Flight Games', 'juego de rol')
const producto6 = new Producto('Set de Dados', 7750, 'T&G', 'dados')


// ARRAYS
const catalogo = [producto1, producto2, producto3, producto4, producto5, producto6]; // Catalogo de productos
const catalogoString = catalogo.map((producto, index) => `
${index +1} - ${producto.nombre}:  $${producto.precio}.`); // Lo convierto en un string para mostrar en prompt

const arrayItems = []; //Creo un array vacio que se lleará cada vez que se agregue un elemento



// FUNCIONES
// Calculo del precio total de la compra
function totalProductos(precio, cantidad){
    precioFinal = precioFinal + precio*cantidad;
    return precioFinal;
}

// Funcion principal del carrito
function carrito(){
    let eleccion = parseInt(prompt('Escoja un producto de la lista:\n' + catalogoString.join('')));
    while (eleccion <= 0 || eleccion > catalogo.length){
        eleccion = parseInt(prompt('El valor escogido es incorrecto. Escoja un producto de la lista:\n' + catalogoString.join('')));
    } //Validacion del valor ingresado, debe encontrarse entre 0 y la cantidad de productos a la venta
    
    cantidad = parseInt(prompt('Introduzca la cantidad que desea llevar:'));
    while (cantidad < 0){
        cantidad = parseInt(prompt('El valor ingresado no es válido. Introduzca la cantidad que desea llevar:')); 
    } // Validacion del valor ingresado, tiene que ser un número positivo
    
    subtotal = catalogo[eleccion-1].precio*cantidad; // Calculo del subtotal
    const nuevoItem = new ItemFactura(catalogo[eleccion-1].nombre, catalogo[eleccion-1].precio, cantidad, subtotal); // Uso el constructor para crear un item de factura
    arrayItems.push(nuevoItem); // Agrego el item a mi lista de items
    precioFinal = precioFinal + subtotal; //Sumo el subtotal al precio final

    let seguir = prompt('Producto agregado al carrito. ¿Desea seguir comprando? Ingrese si o no.'); // Doy opcion de seguir comprando
    validarInicio(seguir);
}


// VALIDACION DE INICIO
function validarInicio(respuesta){
    while (respuesta.toLowerCase() !== 'no' && respuesta.toLowerCase() !== 'si'){
        respuesta = prompt('Valor ingresado, no válido. Inténtelo nuevamente con si o no:');
    }
    if (respuesta.toLowerCase() == 'si'){
        carrito();
    }else {
        const stringItemFactura = arrayItems.map((item, index) => (index+1)+' - Producto: '+item.nombre+' | Precio: $'+item.precio+' | Cantidad: '+item.cantidad+' | Subtotal: $'+item.subtotal); // Convierto arrayItems en un string para mostrar en el ticket
        return alert('TICKET DE COMPRA\n\n' + stringItemFactura.join('\n\n')+ '\n\n' + 'Total a pagar = $' + precioFinal + '.');
    }
}


//INICIO DEL PROGRAMA
inicio = prompt('Bienvenido al seleccionador de productos. ¿Desea iniciar? Escriba si o no:');
validarInicio(inicio);
