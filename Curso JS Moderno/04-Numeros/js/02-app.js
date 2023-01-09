let puntaje = 5;

//let puntaje_dos = puntaje++; Esta linea cambio el dato original de la variable puntaje, haciendola 6 en lugar de 5
//Por tantoi hubiera usado const en lugar de let para declarar la variable puntaje, me daria un error

//Sumara 1 a puntaje que es igual a 5, debido a que se lo estamos poniendo antes de usar console.log, SI mostrara el cambio y el resultado la suma de 5+1
//Sin embargo si escribieramos console.log(puntaje++) no mostraria el cambio inmediatamente y seguiria imprimiendo 5 aún
puntaje++;

console.log(++puntaje); //++puntaje retornara e imprimira directamente el 7, ya que a diferencia de puntaje++ si mostrara el resultado inmediatamente

console.log((puntaje += 3));

const string_uno = "20";
const string_dos = "20.5";
const string_tres = "Uno";
const string_cuatro = 20;

//Number.parseInt() convierte un string en un numero entero
console.log(Number.parseInt(string_uno));

//Number.parseFloat convierte un string en un numero decimal
console.log(Number.parseFloat(string_dos));

//Number.isInteger() chequea si un numero es entero o no, retorna true o false
console.log(Number.isInteger(string_cuatro));
