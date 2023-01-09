const estandar = [1, 2, 3, 4];

const otraManera = new Array("Esta es", "otra forma", "de crear un array");

console.log(estandar);
console.log(otraManera);

const callate = ["Yo", "ya", "no", "estar", "con", "habladore"];

estandar[4] = 4; //Agrega nuevo elemento al array

//Manera de iterar a traves de un array en Javascript
for (let i = 0; i < callate.length; i++) {
    console.log(callate[i]);
}
