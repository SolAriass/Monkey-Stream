let formulario = document.querySelector("#form_registro");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validacionFormularioRegistro();

});

function validacionFormularioRegistro(){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;
    let repetida = document.getElementById("repetida").value;

    let error = false;
   
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorApellido").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorUsuario").innerHTML = "";
    document.getElementById("errorContraseña").innerHTML = "";
    document.getElementById("errorContraseñaRep").innerHTML = "";

    let expresion1 = /^[a-zA-Z]+$/;

    if(!expresion1.test(nombre) || nombre == ""){
        error = true;
        document.getElementById("errorNombre").innerHTML = "<p> El nombre debe contener solo letras </p>"
    }

    if(!expresion1.test(apellido) || apellido == ""){
        error = true;
        document.getElementById("errorApellido").innerHTML = "<p> El apellido debe contener solo letras </p>"
    }

    let expresion2 = /^(.+\@.+\..+)$/;

    if(!expresion2.test(email) || email == ""){
        error = true;
        document.getElementById("errorEmail").innerHTML = "<p> El email debe cumplir el formato de un email </p>"
    }

    let expresion3 = /^[a-zA-Z0-9]+$/;

    if(!expresion3.test(usuario) || usuario == ""){
        error = true;
        document.getElementById("errorUsuario").innerHTML = "<p> El usuario debe contener solo letras y números </p>"
    }

    let expReg = /^(?=(.*[a-zA-Z]){2,})(?=(.*\d){2,})(?=(.*[!@#$%^&*()\-_=+{};:,<.>]){2,}).{8,}$/;

    if(!expReg.test(password) || password == ""){
        error = true;
        document.getElementById("errorContraseña").innerHTML = "<p> La contraseña que ingreso es incorrecta  </p>"
    }


    if(repetida != password || repetida == ""){
        error = true;
        document.getElementById("errorContraseñaRep").innerHTML = "<p> La contraseña debe coincidir con la contraseña original </p>"
    }


    if(!error){
        formulario.submit();
    }

}
