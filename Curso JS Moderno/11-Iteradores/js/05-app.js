"use strict";

let miLista = ["Hola", "que", "tal", "como", "estas"];
const listaFor = miLista.forEach(
    (item, index) => `${index}: ${item}`
    //como el .forEach() esta diseñado para recorrer arrays,
    //al ponerle un segundo parametro a la funcion automaticamente sabe que te refieres al index o indice de cada item del array
);

const nuevoArreglo = miLista.map(
    (item, index) => `${index}: ${item}`
    //A diferencia de .forEach(), .map() crea un array nuevo y lo retorna sin (aparentemente) alterar el Array original
);

console.log(miLista);
console.log(listaFor);
console.log(nuevoArreglo);
