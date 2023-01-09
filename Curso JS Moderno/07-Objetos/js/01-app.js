//Los objetos sirven para agrupar todo en una sola variable

//Object Literal
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

//Por defecti, un objeto, aunque sea declarado con const, se podra cambiar sus propiedades, es decir, podran agregarse, cambiarse o eliminar keys y values

//Agregar una nueva key al objeto

objeto.imagen = "imagen.jpg";

console.log(objeto);

//Acceder a los valores de un objeto
console.log(objeto.soltero);

//Eliminar key y value de un objeto
delete objeto.soltero;

console.log(objeto);

//Destructurar o "destructuring" un objeto
//Permite extraer un valor de un objeto a la vez que se crea una variable con el nombre de la key o llave correspondiente
// El nombre de la variable que este entre las llaves tiene que existir como key en el objeto, sino marcara error
const { nombre } = objeto;
console.log(nombre);

//Destructurar un valor de un objeto dentro de otro objeto
const { nacionalidad } = objeto.datos;
console.log(nacionalidad);

const { lugar } = objeto.datos.pais;
console.log(lugar);

//Acceder a los valores de un objeto que esta dentro de otro objeto
console.log(objeto.datos.religion);
