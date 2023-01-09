////////////////////////////////////
///////EVENTOS SOBRE LOS INPUTS/////
////////////////////////////////////

const busqueda = document.querySelector(".busqueda");

//keydown se ejecuta al precionar una tecla del teclado
//busqueda.addEventListener("keydown", () => console.log("Escribiendo...."));

//Lo mismo que keydown pero a la inversa
//busqueda.addEventListener("keyup", () => console.log("Escribiendo arriba...."));

//blur se ejecuta al salirte de un input, y se usa mucho en las validaciones, para validar lo escrito en el input justo despues del usuario salir
busqueda.addEventListener("blur", () => console.log("Validando...."));

busqueda.addEventListener("copy", () => console.log("Copiado")); //Se ejecuta al copiar y pegar un texto en el elemento, respectivamente
//busqueda.addEventListener("paste", () => console.log("Pegado"));
//busqueda.addEventListener("input", (e) => console.log(e.target)); //Hace todo lo que hacen los eventos anteriores a excepcion de blur y copy
//El argumento e hace referencia al evento en sí, e.target hace referencia al elemento HTML del elemento sujeto al addEventListener

////////////////////////////////////
//VALIDANDO SI UN INPUT ESTA VACÍO//
////////////////////////////////////
busqueda.addEventListener("input", (e) => {
    if (e.target.value === "") {
        alert("Campo vacío");
    }
});
//e.target.value hace referencia al VALOR, del target, es decir, del elemento objeto del addEventListener
