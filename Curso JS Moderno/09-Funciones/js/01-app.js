//Función
function sumar() {
    console.log(2 + 2);
}

sumar();

//Expresion de funcion = Variable que almacena una función
expresion = function expresionFuncion() {
    console.log(3 + 3);
};

expresion(); //Para llamar la función que esta dentro de una variable, usaremos el nombre de la variable en lugar del de la funcion

//Las funciones como tal, se pueden usar incluso antes de la línea de declaración ya que al correr, Javascript ejecuta el codigo en
//Dos pasadas, en la primera definira las funciones (para que puedan ejecutarse al llamarse) y en la segunda leera las variables y las llamadas de funciones
//Por eso es que por ejemplo la función sumar() se podría usar incluso en líneas anteriores a su definición
//Mientras que las expresiones de función, al ser funciones almacenadas en variables
// no se pueden usar antes de su definición, ya que Javascript no las leera en la primera "pasada"
//Sino que las leera normalmente, como cualquier otra variable
