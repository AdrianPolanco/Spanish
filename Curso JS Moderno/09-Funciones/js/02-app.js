function saludar(nombre = "", apellido = "") {
    //Igualar los valores a algo va a constituir el valor por defecto de los parametros en caso de faltar alguno en la llamada de la funcion
    //De modo que si llamo la funcion y no le doy ninguno de los dos parametros va a trabajar con los valores por defecto
    //En este caso, ambos string vacíos, por lo que imprimirá solo "Hola   "
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Adrian", "Polanco");
saludar();
