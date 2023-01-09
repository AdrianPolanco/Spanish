const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
];

//Comprobar si un valor existe en un Array

//Forma "manual" para chequear si un valor existe en un array
meses.forEach((mes) => {
    if (mes === "Enero") {
        console.log("Enero");
    }
});

//Retornará true, pero solo funciona en arrays normales, en arrays de objetos no funcionara
meses.includes("Enero");

//Para chequear si un valor existe en un Array de Objetos debemos usar .some()
const check = carrito.some((item) => {
    //Retornará true si al menos un valor cen el array coincide
    //pero OJO el valor tiene que ser exatamente como el que este en el objeto
    //Si el valor esta incompleto, o tiene una mayuscula donde va una minuscula retornará false
    //Incluso si usamos el comparador no estricto(==)
    return item.nombre === "Monitor 27 Pulgadas";
});

console.log(check);
