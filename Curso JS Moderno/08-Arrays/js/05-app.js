let carrito = [];

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

burritoSabanero = new Producto("Burrito Sabanero", 100);
nintendoSwitch = new Producto("Nintendo Switch", 400);
laptop = new Producto("Laptop", 550);
boleta = new Producto("Boleta", 75);
celular = new Producto("Celular", 300);

carrito = [burritoSabanero, nintendoSwitch, laptop, boleta, celular];

//carrito.forEach en esencia hace lo mismo que lo que haría un for normal, solo que más sencillo, ya que no se necesita un contador (usualmente i)
//que lleve la cuenta de cuantos bucles for han sido completados, ni se necesita del método .length ni de ninguna comparación
//con carrito.forEach automaticamente hará lo especificado en el argumento por cada item que este en el array
lista_forEach = carrito.forEach(function (producto) {
    return `Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
});

//La diferencia de .map() con .forEach() es que .map() crea y devuelve un nuevo array y forEach() no
//forEach modifica el array existente, y no devuelve nada, por eso el valor sera undefined si le das console.log()

lista_map = carrito.map(function (producto) {
    return `Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
});

console.log(lista_forEach);
console.log(lista_map);

let numberArray = [1, 2, 3, 4, 5];

//output the square of each number
let returnValue = numberArray
    .map((num) => num * 2) //.map() al devolver un nuevo array, puede encadenarse con otros .map()
    .map((num) => num.toString())
    .map((string) => "$" + string);

//view the results
console.log(numberArray);
console.log(returnValue);
