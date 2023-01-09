const entero = 2;
const negativo = -5;
const float = 0.5565; //En Javascript, aun los numeros decimales o float son contados como datos de tipo numero, sin distincion

//print(entero, negativo, float);
//print() en Javascript sirve para literalmente imprimir algo en papel, NO SIRVE PARA IMPRIMIR VARIABLES COMO EN PYTHON

console.log(entero);
console.log(negativo);
console.log(float);

//Math.PI es la forma de invocar al PI en Javascript y es igual al PI = 3.1416
console.log(entero * Math.PI); //Retornara 6.2832 al ser 3*1416 x 2

//Math.round() redondea el numero hacia arriba o hacia abajo dependiendo si pasa del .5
console.log(Math.round(float)); //Retornará 1 al 0.5565 ser mayor o igual a 0.5

//Math.ceil() Redondea forzosamente cualquier decimal hacia arriba
console.log(Math.ceil(float)); //Retorna 1

//Math.floor() Redondea forzosamente cualquier decimal hacia abajo
console.log(Math.floor(float)); //Retorna 0

//Math.sqrt() saca la raíz cuadrade de un número
console.log(Math.sqrt(81)); //Retorna 9

//Math.abs() Ignora el signo negativo de un numero, quedando como positivo
console.log(Math.abs(-50)); //Retorna 50 positivo

//Math.pow() Hace la potencia tomando como base el primer argumento o numero, y tomando como potencia el segundo argumento o numero, se pueden usar negativos tambien
console.log(Math.pow(-2, 4)); //Retorna 16, ya que -2*-2*-2*-2 = 16

//Math.min() Retornara el numero mínimo de los introducidos, toma en cuenta negativos
console.log(Math.min(-2, 1, 5, 7)); //Retornara -2 ya que este es menor que todos, incluyendo el 1

//Math.max() Retornara el numero máximo de los introducidos, toma en cuenta negativos
console.log(Math.max(-2, -1, -5, -7)); //Retornará -1 ya que este es mayor que todos incluido el -7

//Math.random() da numeros random, usualmente numeros decimales
console.log(Math.random());

//Para un uso mas prático de Math.random() se recomienda mezclar su uso con otros metodos de Math
console.log(Math.floor(Math.random() * 30)); //Redondea hacia abajo el numero random multiplicado por 3 obtenido
