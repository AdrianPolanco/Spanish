const persona1 = {
    nombre: "Martín",
    pais: "España",
    edad: 27,
    //Se puede poner funciones como valores en los objetos
    ejecutar: function () {
        console.log(
            `Hola, mi nombre es ${this.nombre}, soy de ${this.pais} y tengo ${this.edad} años`
            //this hace referencia al propio objeto, de manera que puedas acceder a los valore dentro de las propiedades del objeto, desde dentro
            //del propio objeto, de forma que el this.nombre del objeto persona1 tendra un valor diferente del this.nombre del objeto persona2
        );
    },
};

const persona2 = {
    nombre: "Paulattier",
    pais: "España",
    edad: 20,
    ejecutar: function () {
        console.log(
            `Hola, mi nombre es ${this.nombre}, soy de ${this.pais} y tengo ${this.edad} años`
        );
    },
};

persona1.ejecutar();
persona2.ejecutar();
