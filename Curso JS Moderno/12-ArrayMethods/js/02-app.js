const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 100 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

const verArray = meses.forEach((mes, id) => {
    if (mes === "Febrero") {
        console.log(`Mes de ${mes} encontrado en el index no.${id}`);
    }
});

//AQUÍ una forma mejor de hacer lo mismo que arriba

const indice = meses.findIndex((mes) => {
    return mes == "Abril";
    //Retornará el índice 3, ya que este metodo retornara SOLO el primer indice
    //Que sea verdadero, es decir, si hay dos items que sean "Abril"
    //Solo retornará el index del primero de ellos
    //Si no encuentra el item simplemente devolverá -1
});

console.log(indice);

//Chequear indice de un array de objetos

const indiceObjeto = carrito.findIndex(
    (precio) => (precio.precio === 100) & (precio.nombre === "Audifonos")
    //Esta es una forma de hacer que vaya más alla del primer objeto que tenga precio de 100
    //Agregandole otra condicional que verifique el nombre devolverá el indice 3 en lugar del 1
);
console.log(indiceObjeto);
