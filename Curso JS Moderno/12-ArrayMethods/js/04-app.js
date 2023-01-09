const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

let filtro;

//Filtrara los productos cuyo precio sea superior a 400 y retornara los objetos que cumplan
//Esa condicion, creando un nuevo array con esos valores
filtro = carrito.filter((item) => item.precio > 400);

//Crea un arreglo con todos los objetos del array menos con el que dice Audifonos
let sacar = carrito.filter((item) => item.nombre !== "Audifonos");

console.log(filtro);
console.log(sacar);
