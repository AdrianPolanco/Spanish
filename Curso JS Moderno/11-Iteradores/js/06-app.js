"use strict";

let miLista = ["Hola", "que", "tal", "como", "estas"];

function Producto(nombre, precio, descuento = false) {
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
}

const burritoSabanero = new Producto("Burrito Sabanero", 100);
const nintendoSwitch = new Producto("Nintendo Switch", 400);
const laptop = new Producto("Laptop", 550);
const boleta = new Producto("Boleta", 75, true);
const celular = new Producto("Celular", 300);

const objetoFinal = {
    item1: burritoSabanero,
    item2: nintendoSwitch,
    item3: laptop,
    item4: boleta,
    item5: celular,
};

//Esta version de for en Javascript es mas simple que for y forEach, y más parecida o similar al for usado en Python
//for...of normalmente itera sobre arrays, aunque con ECMAScript 7 ahora es posible iterar tambien sobre objetos usando Object.properties(objeto)
for (let item of miLista) {
    console.log(`For...of...Item: ${item}`);
}

for (let key in objetoFinal) {
    //Usualmente se usa para iterar sobre objetos
    console.log(key); //Imprime el key, no la propiedad en si
    console.log(objetoFinal[key]);
    //Imprime la propiedad en sí, en este caso es obligatorio usar la sintaxis de corchetes
    //para acceder a la propiedad del objeto en lugar de la sintaxis de punto, ya que sino se marcara undefined
}

for (let iterar of Object.entries(objetoFinal)) {
    //Otra forma más moderna de iterar sobre un objeto introducida en ECMAScript 7
    console.log("Es posible usar for...of para iterar sobre objetos");
}
