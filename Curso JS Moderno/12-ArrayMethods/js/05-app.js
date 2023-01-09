const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

//Buscar un item especifico que cumpla con tener "Tablet" con una key de nombre
const resultado = carrito.find((producto) => producto.nombre === "Tablet");

//Al igual que findIndex y otros metodos de Array, solo retornara el primer item
//Que cumpla la condicion
console.log(resultado);
