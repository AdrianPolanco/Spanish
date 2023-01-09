const btn = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

//console.log(footer);

btn.addEventListener("click", mostrarFooter); //No hace falta ponerle parentesis en caso de que no sea una funcion anonima (arrow function)
//document.querySelector("body").addEventListener("copy", () => alert("Texto copiado con exito :D"));

function mostrarFooter() {
    if (footer.classList.contains("activo")) {
        //.contains verifica si el elemento contiene la clase especificada
        this.textContent = "Idioma y Moneda";
        return (
            footer.classList.remove("activo") & this.classList.remove("activo")
        );
    }
    footer.classList.add("activo");
    this.classList.add("activo"); //this ademas de referirse al objeto o a la clase en sí, tambien se refiere a lo que mando a llamar la función
    //en este caso, el boton llamado btn
    this.textContent = "X Cerrar";
}
