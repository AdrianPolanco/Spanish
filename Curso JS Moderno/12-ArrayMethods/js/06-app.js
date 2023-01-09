const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 1000 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

//Chequeara en un array y solo retornara true si TODOS los objetos cumplen con la condicion dada
//De lo contrario, siempre retornara false
const resultado = carrito.every((item) => item.precio < 1000);

console.log(resultado);
