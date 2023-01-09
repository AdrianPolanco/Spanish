const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

//Sumar precio de los productos del carrito con forEach

//Debemos usar let ya que la variable se ira sumando, por lo que no puede ser un const
let total = 0;

carrito.forEach((item) => (total += item.precio));

console.log(total);

//Haciendo lo mismo con .reduce()

let resultado = carrito.reduce(
    (total, producto) => total + producto.precio,
    50
);

// carrito.reduce((total, producto) => total + producto.precio, 50);
//El primer parametro(total) es la variable con la que se empezara y a la que se sumara cada
//Numero o precio que se almacene en producto, mientras que el 2do parametro (producto)
// es cada objeto del array, al producto ser cada objeto del array, producto.precio es igual a
//carrito.precio, ya que es el array en el que estamos usando el .reduce()
//con total + producto.precio lo que estamos haciendo es sumarle el precio del producto.precio actual
//a el primer parametro(total), que por default, sera igual al numero que este despues de la coma
//En este caso 50, por lo que el total sera igual a 2250, en caso de que en vez de 50 pusiera 0,
//entonces el total seria igual a 2200

console.log(resultado);
