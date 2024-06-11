let formulario = document.querySelector("#form_iniciosesion");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validacionFormulario();


});

function validacionFormulario(){

    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("contraseña").value;

    let errorNombre = false;
    let errorPass = false;

    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorContaseña").innerHTML = "";

    if(nombre == ""){
        errorNombre = true;
        document.getElementById("errorNombre").innerHTML = "<p> No puede dejar el nombre vacio </p>"
    }

    if(password == ""){
        errorPass = true;
        document.getElementById("errorContaseña").innerHTML = "<p> No puede dejar la contraseña vacia </p>"
    }

    if(!errorNombre && !errorPass){
        formulario.submit();
    }


}

