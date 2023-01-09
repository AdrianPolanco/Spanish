"use strict";

const objeto = {
    nombre: "Adrian",
    edad: 21,
    soltero: true,
    datos: {
        nacionalidad: "Española",
        profesion: "Developer",
        religion: "Teísmo",
        pais: {
            lugar: "Republica Dominicana",
        },
    },
};

const object_two = {
    yo: "Yanoestalconhabladore",
    artista: "Felix Cumbe",
};

//Unir dos objetos diferentes

const object_three = Object.assign(objeto, object_two);

//Otra forma de unir dos objetos

const object_four = { ...objeto, ...object_two }; //Con los tres puntos y el nombre del objeto, toma una copia de estos y las asigna dentro de la nueva variable
//console.log(object_three);
console.log(object_four);
