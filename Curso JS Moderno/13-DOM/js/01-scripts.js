let elemento;

elemento = document; //Document en el DOM es igual a todo el archivo HTML
// USO OBSOLETO/NO RECOMENDADO elemento = document.all; //Devuelve un array con todos los elementos y atributos (clases) del HTML
elemento = document.head; //Se refiere al head del HTML
elemento = document.body; //Se refiere al body del HTML
// USO OBSOLETO/ NO RECOMENDADO elemento = document.domain; //Se refiere al dominio en el que esta cargando el archivo
elemento = document.forms; //Devuelve los forms y cuantos forms estoy usando en el HTML

elemento = document.forms[0].id; //Accede al ID del form especificado, en este caso, el form con índice 0 en el array de document.forms
elemento = document.forms[0].method; //Accede al metodo usado en el form especificado (GET, POST, etc)
elemento = document.forms[0].classList; //Accede/retorna las clases del formulario en formato DOMTokenList
elemento = document.forms[0].action; //Accede al action

elemento = document.links; //Retorna una lista de links (elementos a en HTML)
elemento = document.links[0];
elemento = document.links[0].className; //Retorna el nombre de la clase COMO STRING

elemento = document.links;
elemento = document.images; //Retorna una coleccion con todas las imagenes en el documento
elemento = document.scripts; //Retorna una coleccion con todos los scripts usados en el HTML

elemento = console.log(elemento);
