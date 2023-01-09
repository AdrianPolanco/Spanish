//Habilita algunas caracteristicas que no estan por defecto en JavaScript, permitiendo hacer que los objetos declarados con const no se puedan cambiar

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

//Congela un objeto, de forma que no se pueda modificar
Object.freeze(objeto);

//delete objeto.datos; //Aunque se trate de aplicar un delete, no se borrara nada despues de haber usado Object.freeze sobre el objeto

//Chequea si el objeto esta congelado o no, retornado true o false
console.log(Object.isFrozen(objeto));
