//Iteracion for loop
for (let i = 0; i < 5; i++) {
    console.log(`Numero: ${i}`);
    if (i % 2 === 0) {
        //Para identificar un numero par basta con ver si el residuo del numero dado al ser dividido entre 2 es igual a 0
        //Ya que cualquier numero par dividido entre dos tendra un residuo de 0, mientras que un impar no
        //ESTA ES UNA PREGUNTA DE ENTREVISTA QUE LE SUELEN HACER A LOS PROGRAMADORES JUNIOR
        console.log(`Numero ${i} es PAR`);
    } else if (i % 2 !== 0) {
        console.log(`Numero ${i} es IMPAR`);
    }
}
