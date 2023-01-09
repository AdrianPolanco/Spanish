const primerEnlace = document.querySelector("a");
//primerEnlace.remove(); //Elimina el elemento por sí mismo

const navegacion = document.querySelector(".navegacion");
navegacion.removeChild(navegacion.children[2]); //Remueve un elemento hijo, en este caso, el elemento hijo de navegacion con indice 2
