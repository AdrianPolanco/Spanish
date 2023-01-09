const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Card");
});

infoDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Info");
});

titulo.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Titulo");
});

//Se necesita pasar el parametro e en el addEventListener para poder usar los metodos conscernientes al evento

//.stopPropagation() sirve para evitar el Event Bubbling, tambien llamado Propagacion de Eventos
//Que basicamente es la propagacion de un evento destinado a un elemento padre a sus elementos hijos
//Por ejemplo, si le doy click al elemento info, al estar ejecutara el evento que le ordenamos, en nuestro caso
//Imprimir "Info" en la consola, pero tambien, al ser parte del elemento card, ejecutara
//tambien el evento de este elemento(si tiene)
