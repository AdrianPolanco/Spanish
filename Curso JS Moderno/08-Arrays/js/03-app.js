const carrito = [];

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

//Agrega un elemento a un array despues del ultimo elemento actual
carrito.push(new Producto("Burrito Sabanero", 100));
carrito.push(new Producto("Nintendo Switch", 400));

//Agrega un nuevo elemento a la primera posicion del array(índice 0) y desplaza los elementos actuales a un indice más
//Osea, el indice 0 va a pasar a ser indice 1, el indice 1 pasara a ser indice 2, etc.
carrito.unshift(new Producto("Laptop", 550));

console.table(carrito);
