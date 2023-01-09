function Producto(nombre, precio, descuento = false) {
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
}

const burritoSabanero = new Producto("Burrito Sabanero", 100);
const nintendoSwitch = new Producto("Nintendo Switch", 400);
const laptop = new Producto("Laptop", 550);
const boleta = new Producto("Boleta", 75, true);
const celular = new Producto("Celular", 300);

const carrito = [burritoSabanero, nintendoSwitch, laptop, boleta, celular];

for (let i = 0; i < carrito.length; i++) {
    if (i === carrito.length - 3) {
        console.log(`Llegamos al elemento numero DOS, continua el bucle....`);
        continue;
        //Finaliza esta repeticion, es decir, el for loop actual se ejecutara hasta la linea donde este el continue
        //Despues del continue iniciara el siguiente ciclo del for con el proximo item
    }
    if (i === carrito.length - 1) {
        console.log(`Llegamos al elemento numero ${i}, ejecución detenida....`);
        break; //Al llegar a esta línea, el for terminará completamente, no se seguira repitiendo como hace con continue
    }
    if (carrito[i].descuento) {
        console.log(
            `El artículo ${carrito[i].nombre} tiene descuento, su precio actual es ${carrito[i].precio} dolares`
        );
    }
    console.log(carrito[i].nombre);
}
