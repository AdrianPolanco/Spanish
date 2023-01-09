//Crear un elemento HTML desde Javascript
const enlace = document.createElement("a");

//Añadiendole contenido al elemento creado
enlace.textContent = "Nuevo enlace";

enlace.classList.add("mi-clase");

enlace.href = "/nuevo-enlace"; //Añadiendo el atributo href
enlace.setAttribute("data-enlace", "mi-enlace"); //Añade un atributo(primer argumento) en el elemento HTML creado y le asigna un valor (segundo argumento)
//console.log(enlace);

enlace.onclick = miFuncion; //Agrega una función al elemento al hacer click

function miFuncion() {
    alert("You clicked");
}

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(enlace); //Añadiendo el enlace creado al nav en la última posicion
//Añade el elemento en el lugar especificado, el elemento a agregar es el primer argumento, y este se insertara justo en la posicion anterior al elemento
//usado como segundo argumento, en mi caso, quise añadir el nuevo elemento de manera que este antes del children[1] de navegacion
//Asi que el nuevo elemento pasara a ser el children[1] y el anterior children[1] pasará a ser children[2] e igual los elementos siblings posteriores a este
navegacion.insertBefore(enlace, navegacion.children[1]);

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de rock";
parrafo2.classList.add("concert", "rock");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "800 x persona";
parrafo3.classList.add("precio");

//Creando un div
const newDiv = document.createElement("div");
newDiv.appendChild(parrafo1);
newDiv.appendChild(parrafo2);
newDiv.appendChild(parrafo3);

const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

const divPadre = document.createElement("div");
divPadre.classList.add("father-div");
divPadre.appendChild(imagen);
divPadre.appendChild(newDiv);
console.log(newDiv);

const insertar = document.querySelector(".hacer .contenedor-cards");
insertar.insertBefore(divPadre, insertar.children[0]);
