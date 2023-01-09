const nombre = "Adrian Polanco Ferrer";

switch (nombre) {
    case "Adrian":
        console.log("Adrian");
        break; //Se usa break para parar la ejecución del switch ahí y evitar que se siga ejecutando
    case "Adrian Polanco Ferrer": //En caso de que la variable introducida en el switch sea igual al valor del case, se ejecutara el código correspondiente
        console.log("Se ha encontrado el nombre completo");
        break;
    default: //Se ejecutará en caso de que ninguno de los cases sea verdadero, similar a un else
        console.log("Datos no encontrados");
        break;
}
