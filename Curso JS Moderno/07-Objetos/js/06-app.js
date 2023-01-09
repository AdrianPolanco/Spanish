//Creando objetos a partir de un constructor

function Persona(nombre, pais, edad) {
    this.nombre = nombre;
    this.pais = pais;
    this.edad = edad;
}

const nueva_persona = new Persona("Adrian", "Republica Dominicana", 21);

console.log(nueva_persona);
console.log(Object.keys(nueva_persona)); //Retorna una lista con las keys del objeto
console.log(Object.values(nueva_persona)); //Retorna una lista con los values del objeto
console.log(Object.entries(nueva_persona));
//Retorna una lista con arrays con dos valores por cada key: value, el primer valor de cada array es el key y el segundo el value
