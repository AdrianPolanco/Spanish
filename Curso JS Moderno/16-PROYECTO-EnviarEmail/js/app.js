document.addEventListener("DOMContentLoaded", () => {
    //Guardará en este objeto lo escrito por el usuario en caso de pasar las validaciones
    const verificar = {
        email: "",
        cc: "",
        asunto: "",
        mensaje: "",
    };
    const nuevoObjeto = {};
    const objetoCc = {};

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector("#email");
    const inputCc = document.querySelector("#cc");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector("#formulario button[type=submit");
    const btnReset = document.querySelector("#formulario button[type=reset");
    const spinner = document.querySelector("#spinner");

    //Asignar eventos a los inputs
    //El parametro e (de evento) ya esta presente en el .addEvenetListener(), por eso en caso de
    //escribir una funcion no anonima no es necesario ponerle parentesis, si le pones parentesis
    //a la funcion dentro de un addEvenetListener se ejecutará sin esperar a que ocurra el evento esperado
    inputEmail.addEventListener("input", validar); //Blur requiere que entres en el input y salgas para ejecutar la accion
    inputAsunto.addEventListener("input", validar); //Input ejecuta la accion mientras estas en el input
    inputMensaje.addEventListener("input", validar);
    inputCc.addEventListener("input", validar);

    formulario.addEventListener("submit", enviarEmail);

    btnReset.addEventListener("click", (e) => {
        e.preventDefault;
        resetFormulario();
    });

    function validar(e) {
        //Se recomienda usar .trim() en las validaciones de e.target.value.trim()
        if (e.target.value.trim() === "" && e.target.id !== "cc") {
            mostrarAlerta(
                `El campo ${e.target.id} es obligatario`,
                e.target.parentElement
            );
            verificar[e.target.name] = "";
            comprobarEmail();
            return;
        }

        if (
            (!validarEmail(e.target.value) && e.target.id === "email") ||
            (!validarEmail(e.target.value) && e.target.id === "cc")
        ) {
            mostrarAlerta("El email NO es válido", e.target.parentElement);
            verificar[e.target.name] = "";
            comprobarEmail();
            if (e.target.name === "cc" && e.target.value === "") {
                limpiarAlerta(e.target.parentElement);
            }
            return;
        }
        console.log(verificar);

        limpiarAlerta(e.target.parentElement);
        verificar[e.target.name] = e.target.value.trim().toLowerCase();
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        //Mostrar alerta
        const error = document.createElement("P");
        error.textContent = mensaje;
        error.classList.add("bg-red-600", "text-white", "p-2", "text-center");
        //formulario.appendChild(error);
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector(".bg-red-600");

        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);

        return resultado;
    }

    function comprobarEmail() {
        const objeto = Object.keys(verificar);
        const filtrar = objeto.filter((llave) => !llave.includes("cc"));
        const checkCc = objeto.filter((cc) => cc.includes("cc"));

        for (let item of checkCc) {
            objetoCc[item] = verificar[item];
        }

        for (let item of filtrar) {
            nuevoObjeto[item] = verificar[item];
        }

        if (
            Object.values(nuevoObjeto).includes("") ||
            Object.values(objetoCc).includes("") & (inputCc.value !== "")
        ) {
            btnSubmit.classList.add("opacity-50");
            btnSubmit.disabled = true;
            return;
        }

        if (!Object.values(objetoCc).includes("") || inputCc.value === "") {
            btnSubmit.classList.remove("opacity-50");
            btnSubmit.disabled = false;
        }
    }

    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add("flex");
        spinner.classList.remove("hidden");

        setTimeout(() => {
            spinner.classList.add("hidden");
            spinner.classList.remove("flex");

            resetFormulario();

            //Crear alerta
            const exito = document.createElement("P");
            exito.classList.add(
                "bg-green-500",
                "text-white",
                "p-2",
                "text-center",
                "rounded-lg",
                "mt-10",
                "font-bold",
                "text-sm",
                "uppercase"
            );
            exito.textContent = "Mensaje enviado con éxito";

            formulario.appendChild(exito);

            setTimeout(() => {
                exito.remove();
            }, 3000);
        }, 3000);
    }

    function resetFormulario() {
        verificar.email = "";
        verificar.cc = "";
        verificar.asunto = "";
        verificar.mensaje = "";

        formulario.reset(); //Resetea el form
        comprobarEmail();
    }
});
