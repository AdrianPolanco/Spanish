//Variables

//La mayoria de variables selectoras de elementos HTML serán const ya que no se reasignan
const carrito = document.querySelector("#carrito"); //Div que contiene el carrito
const listaCarrito = document.querySelector("#lista-carrito tbody"); //Body de la tabla del div desplegable del carrito
const vaciarCarrito_btn = document.querySelector("#vaciar-carrito"); //Boton para vaciar el carrito
const lista = document.querySelector("#lista-cursos"); //DIV que contiene los cursos
let articulosCarrito = []; //Se usará let para este array ya que su contenido irá cambiando a medida que el usuario
//agregue cursos

cargarEventListeners();
function cargarEventListeners() {
    //Agregas un curso presionando el boton "Agregar al Carrito"
    lista.addEventListener("click", agregarCurso);
    carrito.addEventListener("click", eliminarCurso);
    vaciarCarrito_btn.addEventListener("click", () => {
        articulosCarrito = [];
        limpiarHTML();
    });
}

//Elimina curso del carrito

function eliminarCurso(e) {
    //console.log(e.target.classList);

    if (e.target.classList.contains("borrar-curso")) {
        const cursoId = e.target.getAttribute("data-id");

        //Eliminar el artículo del array usando el data-id y .filter()
        articulosCarrito = articulosCarrito.filter(
            (curso) => curso.id !== cursoId
        );

        mostrarHTML(); //Iterar sobre el carrito y mostrar su HTML
        mostrarTotal();
    }
}

//Funciones

function agregarCurso(e) {
    e.preventDefault(); //Previene que al presionar el a href el scroll se mueva al inicio de la pagina
    //Debido a que que el a href tiene el valor de href="#" con esto prevenimos su accion por default al presionarlo
    //Con este condicional chequeamos si el elemento target del evento click posee la clase agregar-carrito
    if (e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerCurso(cursoSeleccionado);
    }
}

//Leer datos del curso seleccionado

function leerCurso(curso) {
    //console.log(curso);

    //Crear un objeto con la informacion del curso seleccionado
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    };

    const existe = articulosCarrito.some((curso) => {
        return curso.id === infoCurso.id; //Importantisimo siempre agregar el return explicito si le ponemos
        //llaves al arrow function
    });
    if (existe) {
        const cursosCantidad = articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //Retornará el objeto actualizado con la cantidad
            } else {
                return curso; //Retorna los objetos de los cursos no duplicados
            }
        });
        articulosCarrito = [...cursosCantidad]; //Usa el spread operator para hacer una copia del resultado del .map()
        //y agregarlo al carrito solo la nueva copia en lugar de la copia actual o antigua del array del Carrito
    } else {
        //Se usa spread operator aquí para tomar una copia del array articulosCarrito, ya sea que este o no vacío
        //Para que así no se pierdan los cursos agregados previamente al carrito, y a esto le agregaremos el curso actual
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    //console.log(articulosCarrito);

    mostrarHTML();
    mostrarTotal();
}

function mostrarTotal() {
    const nuevosPrecios = articulosCarrito.map((item) => {
        return item.precio.replace("$", "");
    });

    const convertirPrecios = nuevosPrecios.map((numero) => parseInt(numero));

    const chequearCantidades = articulosCarrito.map((item) => {
        return parseInt(item.cantidad);
    });

    let resultado = 0;

    for (let i = 0; chequearCantidades.length > i; i++) {
        resultado += convertirPrecios[i] * chequearCantidades[i];
    }

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
    <td></td>
    <td> TOTAL: </td>
    <td>$${resultado}</td>
    `;

    listaCarrito.appendChild(totalRow);
}

//Mostrar los cursos seleccionado como HTML en el carrito

function mostrarHTML() {
    limpiarHTML();

    articulosCarrito.forEach((articulo) => {
        const row = document.createElement("tr");
        const { imagen, titulo, precio, cantidad, id } = articulo;

        //Construyendo un template string HTML con Javascript
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //Agregar eltemplate creado al tbody de la tabla del carrito

        listaCarrito.appendChild(row);
    });
}

//Limpiar el tbody del carrito antes de agregar los cursos

function limpiarHTML() {
    //Forma lenta
    //listaCarrito.innerHTML = "";

    //Forma rapida

    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}
