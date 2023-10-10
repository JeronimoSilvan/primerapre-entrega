//Preguntamos nombre y le damos la bienvenida al usuario
function mostrarBienvenida() {
    const nombreUsuario = prompt("Por favor, ingrese su nombre:");
    alert(`Bienvenido a mi tienda de boxeo, ${nombreUsuario}!`);
}

//Le preguntamos que desea comprar
function elegirCategoria() {
    const opcion = prompt("¿Qué desea comprar? Opción 1: guantes de boxeo, Opción 2: vendas, Opción 3: protector bucal o Opción 4: shorts");

    //Validar la opción ingresada
    switch (opcion) {
        case "1":
            mostrarProducto("Guantes de boxeo", 25000);
            break;
        case "2":
            mostrarProducto("Vendas", 700);
            break;
        case "3":
            mostrarProducto("Protector bucal", 2500);
            break;
        case "4":
            mostrarProducto("Shorts", 7000);
            break;
        default:
            alert("Por favor, elija un producto.");
            elegirCategoria(); // Volver a preguntar
    }
}

//Información sobre el producto y confirmar la compra
function mostrarProducto(producto, precio) {
    const confirmacion = confirm(`Usted eligió ${producto}. Su precio es de $${precio}. ¿Desea comprar este artículo?`);

    if (confirmacion) {
        realizarCompra(producto);
    } else {
        alert("Muchas gracias por su visita");
    }
}

//Función para realizar la compra
function realizarCompra(producto) {
    alert("Ingrese su dirección para poder realizar el envío del pedido");
    const direccion = prompt("Por favor, ingrese su dirección:");

    alert(`Su artículo (${producto}) será enviado a: ${direccion}`);
    alert("Muchas gracias por su compra");
}

//Llamar a la función principal
function main() {
    mostrarBienvenida();
    elegirCategoria();
}

main(); //Iniciar el programa
