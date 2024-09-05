
//
// Funcion para estas declaraciones -> onsubmit="return validateForm()" novalidate
//

function validateForm(){

    //Declaración de variables
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorSubmit = document.getElementById("errorSubmit");

    //Ejemplo de validación: No espacios vacío
    if (username.trim() == "" || password.trim() == "") {
        alert("Por favor, rellena ambos campos")
        return false;
    }

    //Ejemplo de validación: Contraseña mayor a 8 caracteres
    if (password.length < 8) {
        alert("La contraseña ta mal")
        return false;
    }
    console.log("hoola")
    return true;
}

window.onload=() => {
    'use strict'; //se ejecuta de forma estricta(activa) evitando posibles errores

    //Selecciona el formulario que tiene la clase .needs-validation y devuelve un array(NodeList)
    let forms = document.querySelectorAll(".needs-validation");

    //Se recorre el array de todos estos elementos del form
    Array.from(forms).forEach(form => {

        //Se crea un evento que escucha el click del submit para validar
        form.addEventListener("submit", event => {

            if(!form.checkValidity() || !validateForm()) {

                event.preventDefault();  //para ejecución
                event.stopPropagation(); //detiene propagación/action
            }

            form.classList.add("was-validated")
        }, false)
    })
}



