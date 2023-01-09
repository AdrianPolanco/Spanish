//ESTE METODO SERA EL METODO DECLARATIVO, ES DECIR, EN VEZ DE MODIFICAR LA VARIABLE ORIGINAL, CREARA UNA NUEVA CON LOS DATOS DE LA ORIGINAL Y MAS

const carrito = [];

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

burritoSabanero = new Producto("Burrito Sabanero", 100);
nintendoSwitch = new Producto("Nintendo Switch", 400);
laptop = new Producto("Laptop", 550);
boleta = new Producto("Boleta", 75);
celular = new Producto("Celular", 300);

let nuevo_carrito = [...carrito, burritoSabanero];
nuevo_carrito = [nintendoSwitch, ...nuevo_carrito]; //Variable redeclarada, el array puede ser con las variables en el orden que deseed

nuevo_carrito.pop(); //.pop() elimina el ultimo item del array

nuevo_carrito = [...nuevo_carrito, burritoSabanero, laptop, boleta, celular];

console.table(nuevo_carrito);

//Elimina un item  o varios items de un array, el primer argumento es el item a partir de donde va a eliminar, este argumento es inclusivo
//El segundo argumento es la cantidad de items que va a eliminar empezando desde el item índice del primer argumento
nuevo_carrito.splice(1, 1); //Va eliminar 1 item desde el item 1, es decir, solo va a eliminar el item de indice 1
console.table(nuevo_carrito);

//DESTRUCTURING ARRAYS
//OJO ESTA SINTAXIS SE USA MUCHO EN REACT

const lista = [...nuevo_carrito, burritoSabanero];
console.log(lista);

//DESTRUCTURING ARRAY
const [, , tercero] = lista;
//Por defecto, cuando destructuras un array en Javascript,  destructuras el primero, si deseas obtener el segundo
//Deberas de omitir los elementos intermediarios entre el primer elemento y el elemento que quieres extraer con comas hasta que llegues a él
//No es como el destructuring de objetos, que simplemente extraes el valor poniendo el nombre del key entre las llaves de la declaracion

const [, , cuarto, ...quinto] = lista; //...quinto quiere decir el resto de elementos despues del cuarto elemento, en este caso
console.log(tercero);
console.log(...quinto);
