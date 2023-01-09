const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 100 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

//La sintaxis ...array es llamada Spread Operators
//Cuando uso ...meses estoy creando una copia del array meses, asi que si gago un array
//Agregandole otro mes como Agosto, por ejemplo, Agosto solo sera parte del nuevo array creado y no parte del array original que tome usando ...meses
//Esto es muy usado en la Programacion Funcional, que se usa mucho hoy dia en Javascript
const meses2 = [...meses, "Agosto"];
console.log(meses2);

console.log(meses);

//Estos parametros como .push, .shift, .unshift, .pop, etc. A diferencia de los spread operators SI modifican el array original
meses.push("Diciembre");

console.log(meses);

const miObjeto = { nombre: "Disco Duro", precio: 300 };

//IMPORTANTE no se puede usar la sintaxis de Spread Operator en un objeto ya que los objetos no son iterables, por lo que usar
//...miObjeto abajo esta mal y marcará error, sin embargo, si se puede usar arrays de Objetos

const lista = [...meses, ...carrito, ...miObjeto];

console.log(lista);
