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

//Sella un objeto, a diferencia de Object.freeze(), Object.seal() permite modificar los valores ya existentes, pero no borrarlos ni agregar nuevos
Object.seal(objeto);

objeto.edad = 22;

//delete objeto.edad; //Este codigo no hara nada ya que el objeto esta sellado, y no permite eliminar ni agregar keys

console.log(objeto);
console.log(Object.isSealed(objeto)); //Chequea si un objeto esta o no sellado, retorna true o false
