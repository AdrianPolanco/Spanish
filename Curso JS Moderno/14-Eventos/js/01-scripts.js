/////////////////////////////////////////
/////EVENTOS SOBRE EL DOCUMENTO HTML////
////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    console.log(2);
    alert("Documento cargado con exito");
}); //En caso de que el evento sea DOMContentLoaded la funcion que le siga siempre sera anonima (arrow function)
//DOMContentLoaded se refiere a una vez que todo el documento HTML haya sido cargado, recien ahí se cumplira ese evento
//Por tanto, es por eso que console.log(2) aparece de ultimo, despues de los otros dos console.log ya que se ejecutara cuando
//se cumpla el evento DOMContentLoaded, que se ejecutara despues de que todo el HTML haya sido cargado
//Y al este script estar ligado a ese HTML y ser parte de él, como consecuencia estos dos console.log se cargan primero y por ultimo, se cumple el evento

console.log(1);

console.log(3);
