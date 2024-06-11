let formulario = document.querySelector("#form_recCon");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validacionFormularioRecuperarContraseña();

});

function validacionFormularioRecuperarContraseña(){

    let email = document.getElementById("email").value;
    let usuario = document.getElementById("nombre").value;
   
    let errorEmail = false;
    let errorUsuario = false;
   
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorUsuario").innerHTML = "";
   

    if(email == ""){
        errorEmail = true;
        document.getElementById("errorEmail").innerHTML = "<p> No puede dejar el email vacio </p>"
    }


    if(usuario == ""){
        errorUsuario = true;
        document.getElementById("errorUsuario").innerHTML = "<p> No puede dejar el usuario vacio </p>"
    }


    if(!errorEmail && !errorUsuario){
        formulario.submit();
    }

}