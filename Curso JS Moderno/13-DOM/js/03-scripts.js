//querySelector te retornará solo el Primer Elemento que encuentres, incluso si le pasas clases de CSS como argumentos
//Te retornara el elemento HTML en si que contenga la clase,
const card = document.querySelector(".card");

//console.log(card);

//La sintaxis con el querySelector es similar a la de CSS, si quieres tomar un elemento especifico, puedes
//Tomar la clase del elemento padre y despues la clase del elemento que quieres tomar igual que en CSS
//Asi, en vez de tomar los elementos de la clase en general, tomara el elemento .info que sea hijo del elemento .premium
const info = document.querySelector(".premium .info");

//console.log(info);

const segundaCard = document.querySelector(
    ".hospedaje .contenedor-cards .card:nth-child(2)"
);

console.log(segundaCard);

//querySelector puede trabajar tanto con clases como ID
const formulario = document.querySelector("#formulario");
console.log(formulario);
