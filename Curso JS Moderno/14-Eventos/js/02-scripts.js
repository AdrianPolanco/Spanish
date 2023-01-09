////////////////////////////////////////////
//////EVENTOS SOBRE EL MOUSE////////////////
///////////////////////////////////////////

const nav = document.querySelector(".navegacion");

//Mouseenter es un evento que se cumple cuando hacemos hover encima del elemento, a diferencia del evento click
//nav.addEventListener("mouseenter", () => (nav.style.backgroundColor = "white"));

//nav.addEventListener("mouseout", () => (nav.style.backgroundColor = "red")); //Mouseout se ejecuta al sacar el mouse del elemento

//nav.addEventListener("mousedown", () => (nav.style.backgroundColor = "red"));
//Mousedown es similar a click, se produce al presionar sobre el elemento, la diferencia es que click se ejecuta solo
//una vez hayamos presionado el boton de forma completa, es decir, habiendo presionado y soltado el boton, mientras que mousedown pues lo hara
//justo cuando presionaemos el boton

//nav.addEventListener("mouseup", () => (nav.style.backgroundColor = "red")); //Lo mismo que mousedown solo que a la inversa, se ejecuta al soltar el boton

nav.addEventListener(
    "dblclick", //Se cumple al hacer doble click sobre el elemento
    () => (nav.style.backgroundColor = "red") & console.log("Doble Click")
);
