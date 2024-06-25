let formulario = document.querySelector("#form_iniciosesion");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validacionFormulario();


});

function validacionFormulario(){

    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("contraseña").value;

    let error = false;

    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorContaseña").innerHTML = "";

    if(localStorage.getItem('nombreUsuario') === null || localStorage.getItem('contraseña') === null){ 
        document.getElementById("errorContaseña").innerHTML = "<p> Usted no esta registrado </p>";
    }

    if(localStorage.getItem('nombreUsuario') !== nombre || localStorage.getItem('contraseña') !== password){
        document.getElementById("errorContaseña").innerHTML = "<p> Usted no esta registrado </p>";
    }
    

    if(nombre == ""){
        error= true;
        document.getElementById("errorNombre").innerHTML = "<p> No puede dejar el nombre vacio </p>"
    }

    if(password == ""){
        error = true;
        document.getElementById("errorContaseña").innerHTML = "<p> No puede dejar la contraseña vacia </p>"
    }

    if(!error && nombre === localStorage.getItem('nombreUsuario') && password === localStorage.getItem('contraseña')){
        formulario.submit();
    }


/*
    if(!errorNombre && !errorPass){
        formulario.submit();
    }
*/

}

