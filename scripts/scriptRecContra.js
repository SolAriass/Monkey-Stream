let formulario = document.querySelector("#form_recCon");


let boton = document.getElementById("boton_rec");

function validarBoton(){

    let botonDeshabilitado = false;

    if(formulario.email.value == "" || formulario.nombre.value == ""){
            botonDeshabilitado = true;
        }

        if(botonDeshabilitado){
            boton.disabled = true;
        }else{
            boton.disabled = false;
        }
}


formulario.addEventListener("keyup", validarBoton);


formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validacionFormularioRecuperarContraseña();

});

function validacionFormularioRecuperarContraseña(){

    let email = document.getElementById("email").value;
    let usuario = document.getElementById("nombre").value;
   
    let error = false;
   
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorUsuario").innerHTML = "";
   
    if(localStorage.getItem('email') === null){
        error = true;
        document.getElementById("errorEmail").innerHTML = "<p> Email no asociado </p>"
    }


    if(email == ""){
        error = true;
        document.getElementById("errorEmail").innerHTML = "<p> No puede dejar el email vacio </p>"
    }


    if(usuario == ""){
        error = true;
        document.getElementById("errorUsuario").innerHTML = "<p> No puede dejar el usuario vacio </p>"
    }

    if(!error && localStorage.getItem('nombreUsuario') == usuario && localStorage.getItem('email') == email){
        formulario.submit();
        alert("email enviado c:")
    }

/*
    if(!errorEmail && !errorUsuario){
        formulario.submit();
    }
*/
}