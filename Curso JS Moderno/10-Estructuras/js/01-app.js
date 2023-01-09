let bailar = false;
let cantar = true;
let check = false;

/*if (check || (bailar && cantar)) {
    console.log("Estoy cantando y bailando");
} else if (bailar || cantar) {
    //El simbolo para OR en Javascript (que es este ||)se hace con Alt + 124
    console.log(
        "Solo estoy ejecutando una de las siguientes acciones: Bailar o cantar"
    );
} else {
    console.log("No estoy haciendo nada");
}*/

//Condicionales con operador ternario
console.log(
    check || (bailar && cantar)
        ? "Estoy cantando y bailando"
        : bailar || cantar
        ? "Solo estoy ejecutando una de las siguientes acciones: Bailar o cantar"
        : "No estoy haciendo nada"
);
