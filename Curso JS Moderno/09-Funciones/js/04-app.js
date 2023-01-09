function funcionEstandar() {
    console.log("Aprendiendo Javascript.....");
}

const funcionArrow = (lenguaje) => `Aprendiendo ${lenguaje}.....`;
//Se pone el mismo parentesis y en vez de function se pone el arrow =>
//Si la funcion solo tiene una linea, no hay necesidad de llaves y el return lo da por implicito, asi que tampoco hay necesidad de usarlo
//Si el arrow function solo tiene un parametro, no hay necesidad de los parentesis despues de  la declaración de la variable

const secondFunctionArrow = (lenguaje, framework) =>
    `Aprendiendo ${lenguaje} y ${framework}.....`;
//Cuando tienes dos o más parametros, ya son necesarios los parentesis

console.log(funcionArrow("Django"));
console.log(secondFunctionArrow("Javascript", "Node.js"));

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

burritoSabanero = new Producto("Burrito Sabanero", 100);
nintendoSwitch = new Producto("Nintendo Switch", 400);
laptop = new Producto("Laptop", 550);
boleta = new Producto("Boleta", 75);
celular = new Producto("Celular", 300);

const carrito = [burritoSabanero, nintendoSwitch, laptop, boleta, celular];

const verCarrito = carrito.map(
    (producto) =>
        `Nombre del producto: ${producto.nombre}, Precio del producto: ${producto.precio}`
);

const verCarritoEach = carrito.forEach(
    (producto) =>
        `Nombre del producto: ${producto.nombre}, Precio del producto: ${producto.precio}`
);

console.log(verCarrito);
console.log(verCarritoEach);
