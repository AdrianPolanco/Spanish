const encabezado = document.querySelector("h1");
//console.log(encabezado.style);
//encabezado.style.backgroundColor = "red"; //Los atributos CSS en Javascript son esecialmente los mismos, lo unico que no van separados por guion
//en caso de tener dos palabras, sino que van todas pegadas y la segunda palabra comenzara con letra mayuscula
//.style tiene la misma prioridad que los estilos especificados en la etiqueta HTML, es decir, tiene la máxima prioridad dejando de lado
//si usamos !important en el CSS
//encabezado.style.fontFamily = "Arial";
//encabezado.style.textTransform = "Uppercase";

const card = document.querySelector(".card");
//.classList retorna la lista de clases que posee el elemento
//.classList.add() añade una nueva clase al elemento con el nombre especificado en el argumento, por supuesto, entre comillas
//No hace falta usar el formato CSS para clase, con solo escribir el nombre en formato string (comillas) basta
card.classList.add("nueva-clase", "segunda-clase");
card.classList.remove("card"); //Elimina una clase de un elemento
console.log(card.classList);
