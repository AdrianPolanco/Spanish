const header = document.getElementsByClassName("header");
//Toma el elemento que tenga la clase con el nombre especificado en el argumento, debes poner el nombre tal cual lo tengas en tu HTML, sino, no funciona
//OJO ES IMPORTANTE SABER QUE AL PODER USARSE LAS CLASES MULTIPLES VECES EN HTML, getElementByClassName retornará multiples elementos si se usa esa clase
//mas de una vez
console.log(header);

const formulario = document.getElementById("formulario");
//Retornará el elemento HTML completo que tenga ese ID, si el ID no existe retornará null
console.log(formulario);

//ESTOS METODOS YA NO SE USAN TANTO, EN LUGAR, SE USA MAS .querySelector() DEBIDO A QUE ESTE PUEDE TRABAJAR TANTO CON CLASES COMO CON IDs
