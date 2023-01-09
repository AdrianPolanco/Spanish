window.addEventListener("scroll", () => {
    //const scrollPX = window.scrollY; //Toma el valor en pixeles del scroll vertical de la ventana
    //console.log(scrollPX);
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect(); //Da las coordenadas del scroll
    if (ubicacion.y < -100) {
        //ubicacion.y hace referencia a la posicion vertical del scroll
        console.log("Elemento ya visible");
    }
}); //scroll se cumple al deslizar la pagina hacia algun lado
