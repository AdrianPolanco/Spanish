//A diferencia de .querySelector() que solo retornarĂ¡ el primer elemento que cumpla la condicion especificada en el argumento
//.querySelectorAll() retornarĂ¡ todos los elementos que cumplan con la condicion de los argumentos y retornarĂ¡ un NodeList de ellos
const info = document.querySelectorAll(".premium .info");

console.log(info);

//Los elementos HTML en Javascript tambien se les llama Nodos, por tanto, a las listas que retornas con el DOM se les llama tambien NodeLists
