const form = document.querySelector(".formulario");

form.addEventListener(
    "submit",
    validarForm //No hace falta pasarle el parametro, el addEventListener ya sabe que debe buscar una funcion y ser su argumento
); //Submit se cumple cuando se presiona el input con el type submit o el boton

function validarForm(e) {
    e.preventDefault(); //Previene el comportamiento "por default del evento", en este caso, el evento es un form
    //Por default, el evento en un form enviaria la informacion mediante el metodo POST (ya que en nuestro HTML tenemos method="POST")
    //Enviada a la direccion especificada en el atributo action (en nuestro caso tenemos action="/buscador")

    //Se  usa usualmente para prevenir que el formulario envie directamente la informacion, y en su lugar, validar el formulario,
    //o consumir una API
    console.log(e.target.value); //Con esto puedes ver que escribio el usuario en el input
    console.log(e.target.method); //e.target.method te dice el metodo que esta usando el formulario, en este caso, el metodo POST
    console.log(e.target.action); //e.target.acion te dice la action que ejecutará el formulario, es decir, a donde mandara la informacion que capturo
    //En nuestro caso, la mandaria al servidor local en la carpeta o archivoo que dice buscador(http://127.0.0.1:5501/buscador)

    //La informacion del form se puede mandar usando AJAX, FastAPI o alguna otra forma
}
