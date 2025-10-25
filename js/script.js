// -----------------------------------------------------------
// PROGRAMA: CONSULTAR PRECIO DE PRODUCTOS
// -----------------------------------------------------------

// 1️ Defini un array 
const productos = [
    { nombre: "Gajos dulces", precio: 500 },
    { nombre: "Bon o bon", precio: 300 },
    { nombre: "Chocolates surtidos", precio: 800 },
    { nombre: "Alfajores variados", precio: 600 },
    { nombre: "Caramelos masticables", precio: 250 },
    { nombre: "Leche ", precio: 150 },
    { nombre: "Pan", precio: 200 },
    { nombre: "Queso", precio: 400 },
];
// Agregar un nuevo producto al array
productos.push({ nombre: "Jamon", precio: 250 });

// Función para mostrar el precio total según cantidad
function mostrarPrecioProducto() {
    let productoIngresado = prompt("Ingrese el nombre del producto que desea consultar (Gajos dulces,Bon o bon, Chocolates surtidos,Alfajores variados,Caramelos masticables,Leche, Pan,Queso,Jamon:")  ;
    let cantidad = Number(prompt("¿Cuántas unidades desea llevar?"));

    if (!productoIngresado || isNaN(cantidad) || cantidad <= 0) {
        console.log("Datos inválidos. Intente nuevamente ");
        return;
    } 


    let productoEncontrado = buscarProducto(productoIngresado);

    if (productoEncontrado) {
        let precioTotal = productoEncontrado.precio * cantidad;
        let precioConDescuento = aplicarDescuentoPorCantidad(cantidad, precioTotal);

        console.log(` Producto: ${productoEncontrado.nombre}`);
        console.log(` Precio unitario: $${productoEncontrado.precio}`);
        console.log(`Cantidad: ${cantidad}`);
        console.log(`Precio final: $${precioConDescuento}`);
    } else {
        console.log( `El producto "${productoIngresado}" no se encuentra en el sistema.`);
    }
}
// Función  buscar un producto 
function buscarProducto(nombreProducto) {
   
    return productos.find(producto => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());
}

// Función para aplicar un descuento 
function calcularPrecioConDescuento(precio, descuento) {
    return precio - (precio * descuento / 100);
}


function aplicarDescuentoPorCantidad(cantidad, precioTotal) {
    const descuento = 10; // 10%
    if (cantidad >= 2) {
        console.log(` Aplicado un descuento del ${descuento}% por llevar ${cantidad} productos.`);
        return calcularPrecioConDescuento(precioTotal, descuento);
    } else {
        console.log(`No se aplica descuento (lleva menos de 2 productos).`);
        return precioTotal;
    }
}


// Bucle principal para repetir consultas
function iniciarConsulta() {
    let continuar = true;

    while (continuar) {
        mostrarPrecioProducto();
        let respuesta = prompt("¿Querés consultar otro producto? (si/no)");
        if (respuesta.toLowerCase() !== "si") {
            continuar = false;}
             else  {
            console.log("Gracias por usar el sistema. ¡Hasta luego!");
        }
    }
  }

// Ejecución
iniciarConsulta();

