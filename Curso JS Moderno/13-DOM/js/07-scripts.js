const navegacion = document.querySelector(".navegacion");

console.log(navegacion); //Retorna el elemento html de la clase y sus descendientes, a los que se les llama nodos
//Los espacios en blanco dejados por el TAB en el codigo que VS Code hace automaticamente para ordenar el codigo son considerados elementos por .childNodes
console.log(navegacion.firstElementChild); //Selecciona el primer y ultimo elemento child, respectivamente
console.log(navegacion.lastElementChild);
//console.log(navegacion.childNodes);
console.log(navegacion.children); //A diferencia de .childNodes solo retornara una lista de elementos REALES, osea, que sean solo codigo HTML y no espacios en blanco
console.log(navegacion.children[1].nodeName); //Retorna la etiqueta que este usando el nodo o elemento, en este caso A de la etiqueta <a>
console.log(navegacion.children[1].nodeType);
//Devolvera 1, que es el tipo de Node correspondiente, ya que las etiquetas como <a> son Nodos tipo 1 segun la documentacion de Javascript

const card = document.querySelector(".card");

card.children[1].children[1].textContent = "Traversing the DOM"; //Cambiando el texto del child 1 del child 1 de .card
card.children[0].src = "img/hacer2.jpg"; //Cambiando la imagen del child element 0 de .card

//Traversing the DOM con children y los indices de los arrays
console.log(card.children[1].children[1]); //Devolvera los elementos asi: .card -> child con index 1 de card -> child con index 1 del child index 1 de .card

console.log(card.parentElement); //Seleccionara el elemento padre del elemento seleccionado
console.log(card.nextElementSibling); //Selecciona el siguiente elemento "hermano"(es decir, que este al mismo nivel y no este dentro de el elemento)

const ultimaCarta = document.querySelector(".card:nth-child(4)"); //Selecciona el elemento child de card con index 4
console.log(ultimaCarta.previousElementSibling); //Selecciona el elemento "hermano" previo
