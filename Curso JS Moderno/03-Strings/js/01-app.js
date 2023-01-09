const nombre = "Adrian Polanco Ferrer";
const frontend = "Frontend Developer";

console.log(nombre);

//Devuelve la longitud del string, contando espacios, es el equivalente a len() en Python
console.log(nombre.length);

//.includes devuelve true si el string se encuentra en la variable especificada o false si no
console.log(nombre.includes("Polanco"));

console.log(nombre[7]);

//.indexOf devuelve el index de la primera letra del string que este en el parametro
//Si no se encuentra el argumento en la variable va a devolver -1
//Por ejemplo "Polanco" empieza en el string 7 de la variable, por tanto, el devolvera index 7
console.log(nombre.indexOf("Polanco"));

//Concatena la variable string con otro string o variable usada como parametro
console.log(nombre.concat(frontend));
//Otra forma de concatenar:
console.log(nombre + " quiere ser " + frontend);
//Otra forma de concatenar (más efectiva aún)
console.log(
    `Esta es otra forma de concatenar: ${nombre} quiere ser ${frontend}`
);

const espacioBlanco = "          Cuantos días más          ";

// .trimStart/.trimEnd son métodos que sirven para quitar los espacios en blanco que preceden/suceden al string
console.log(espacioBlanco.trimStart());
console.log(espacioBlanco.trimEnd());

//En Javascript se pueden poner los métodos de forma encadenada(tambien conocidos como "chaining") que consiste en
//poner un metodo despues del otro

//.trim y .trimStart().trimEnd() sirven para eliminar los espacios en blanco tanto antes como despues del string
console.log(espacioBlanco.trimStart().trimEnd());
console.log(espacioBlanco.trim());

//.replace recibe la parte del string que quieras cambiar como primer argumento y su reemplazo como segundo argumento
console.log(nombre.replace("Polanco", "Suarez"));

//.slice sirve para recortar las letras que esten fuera del "rango" indicado en los parametros del metodo
console.log(nombre.slice(0, 6)); //En este caso, cortara todo lo que este despues del rango 0-5 ya que empezara a cortar a partir del index 6 (incluyendolo)
console.log(nombre.slice(6)); //En este caso, conservara todo lo que este despues del string 5 (ya que incluye el index 6)
console.log(nombre.slice(0)); ///En este caso borrara todo el string, ya que le estas indicado que borre todo lo que este despues del string 0 (incluyendo el index 0)
console.log(nombre.slice(-5, -1)); //Aquí ira del final al inicio del string, cortara todo el string que no este entre los index -2 y -5
console.log(nombre.slice(3, 2)); //En caso de que el primer argumento sea mayor al segundo, simplemente no hará nada

//.subtring funciona igual que .slice solo que:
console.log(nombre.substring(0, 6));
console.log(nombre.substring(4, 2)); //En caso de que el primer parametro sea mayor que el segundo, el metodo lo volteara y lo interpretara como (2,4) en vez de (4,2)

//.repeat() sirve para repetir un string una dada cantidad de veces
let texto = "Ay amor";
console.log(texto.repeat(2));
console.log(texto.repeat(2.9)); //En caso de pasarle un numero decimal como argumento, Javascript va a redondear HACIA ABAJO el número
//Por tanto, aunque 2.9 este mas cerca del 3 que del dos, Javascript lo redondeara a 2 y por tanto solo se repetira 2 veces y no 3

//.split() sirve para dividir un string por los caracteres especificados y devuelve el formato como array
const aprendiendo = "Estoy aprendiendo Javascript";
const hobbies = "Cantar, caminar, escuchar música, montar bicicleta";
const lista = ["Hola", 1, true];

console.log(aprendiendo);
console.log(aprendiendo.split(" "));
console.log(hobbies);
console.log(hobbies.split(","));
console.log(typeof hobbies.split(",")); //Se verifica con typeof el tipo de dato, que aunque es un array realmente, al usar typeof dice que es un objeto
console.log(lista);

//.toUpperCase() y .toLowerCase() sirven para transformar un string en todo minuscula o mayuscula, respectivamente
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre.toLocaleUpperCase()); //Es praticamente lo mismo que .toUpperCase,solo que toma en cuenta la localizacion yel esquema de mayusculas/minusculas del idioma local
