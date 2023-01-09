const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains(e.target.classList.value)) {
        console.log(`Presionaste ${e.target.classList.value}`);
        //Se refiere al valor de la lista de clases del elemento del evento
        //Se usa .classList.contains() para verificar si el elemento del evento contiene o no una clase
    }
});
