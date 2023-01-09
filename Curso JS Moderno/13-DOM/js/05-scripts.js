//const encabezado = document.querySelector(".contenido-hero h1"); //Devuelve el codigo HTML dentro del elemento en formato object
const encabezado = document.querySelector(".contenido-hero h1").textContent;
//document.querySelector(".contenido-hero h1").textContent = "Nuevo encabezado"; //Cambiando el contenido del elemento H1
console.log(encabezado);
//console.log(encabezado.innerText); //Lo contrario al de despues, si tiene visibility:hidden; no lo encontrará, lo devolverá vacio
//console.log(encabezado.textContent); //Si en el CSS este elemento tiene el visbility:hidden; este codigo aun asi lo va a encontrar y lo devolverá en string
//Solamente las letras que esten dentro del elemento, no devolverá strings de otras etiquetas HTML que podrian estar dentro del elemento, como <span>
//console.log(encabezado.innerHTML); //Devuelve el codigo HTML del elemento y lo que este dentro en formato string

const imagen = document.querySelector(".card img"); //Seleccionando el elemento imagen dentro del elemento con clase card
imagen.src = "img/hacer2.jpg"; //Cambiando imagen con Javascript
