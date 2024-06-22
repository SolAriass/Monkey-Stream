let formulario = document.getElementById("form_registro");


let boton = document.querySelector("#boton_registro");


function validarBoton(){

    let botonDeshabilitado = false;

    let opciones = document.getElementsByName("metodo-de-pago")

        let seleccionado = false;
    
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                seleccionado = true; 
            }
        }

    if(formulario.nombre.value === "" || formulario.apellido.value === "" || formulario.email.value === "" 
        || formulario.usuario.value === "" || formulario.contraseña.value === "" || formulario.repetida.value === "" || !seleccionado){
            botonDeshabilitado = true;
        }

        if(botonDeshabilitado){
            boton.disabled = true;
        }else{
             boton.disabled = false;
        }

}

formulario.addEventListener("input", validarBoton);



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
    let codigo = document.getElementById("codigo").value;
    let nroTarjeta = document.getElementById("numero").value
    let opcionesPago = document.getElementsByName("metodo-de-pago");

    let error = false;
   
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorApellido").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorUsuario").innerHTML = "";
    document.getElementById("errorContraseña").innerHTML = "";
    document.getElementById("errorContraseñaRep").innerHTML = "";
    document.getElementById("errorCodigo").innerHTML = "";
    document.getElementById("errorOpcion").innerHTML = "";
    document.getElementById("errorSeleccion").innerHTML = "";
    


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
        document.getElementById("errorContraseñaRep").innerHTML = "<p> Debe coincidir con la contraseña original </p>"
    }

  

    let seleccionado = false;
    for(i in opcionesPago){
        if(opcionesPago[i].checked){
            seleccionado = true;
        }
    }

    if(!seleccionado){
        error = true;
        document.getElementById("errorOpcion").innerHTML += "<p> MARCA UNA OPCION </p>"
    }

    if(opcionesPago[0].checked){

        let expresionNroT = /^\d{16,19}$/;

        if(!expresionNroT.test(nroTarjeta)){
         error = true;
         document.getElementById("errorCodigo").innerHTML = "<p> Tarjeta invalida </p>"
        }else if(expresionNroT.test(nroTarjeta) && nroTarjeta.length > 0){
     
             //array de numeros
             let digitos = nroTarjeta.split('')
     
             //suma de todos menos el ultimo
             let sumaDigitosAnteriores = 0;
             for (let i = 0; i < digitos.length - 1; i++) {
             sumaDigitosAnteriores += digitos[i];
         }
     
         //verifico si la suma es par / impar
         let sumaEsPar = sumaDigitosAnteriores % 2 === 0;
     
         let ultimoDigito = digitos[digitos.length - 1];
     
         //verificar si el ultimo numero es par / impar
         let ultimoDigitoEsPar = ultimoDigito % 2 === 0;
     
         if ((sumaEsPar && !ultimoDigitoEsPar) || (!sumaEsPar && ultimoDigitoEsPar)) {
             error = true;
              document.getElementById("errorCodigo").innerHTML = "<p> Tarjeta invalida </p>"
         }
     
     }
     
         let expresionCodigo = /^\d{3}$/;
     
         if(!expresionCodigo.test(codigo) || codigo == "" || codigo === '000'){
             error = true;
             document.getElementById("errorCodigo").innerHTML += "<p> Codigo incorrecto </p>"
         }



    }else if(opcionesPago[1].checked){

        let pagoFacil = document.getElementById("pago-facil")
        let rapipago = document.getElementById("rapipago")

        if(!pagoFacil.checked && !rapipago.checked){
            error = true;
            document.getElementById("errorSeleccion").innerHTML = "<p> PONGA UNA SOLA OPCION </p>"

        }else if(pagoFacil.checked && rapipago.checked){
            error = true;
            document.getElementById("errorSeleccion").innerHTML = "<p> TE DIJE QUE SOLO PONGAS UNA </p>"  
        }

    }

    


    if(!error){
        localStorage.setItem('nombreUsuario', usuario);
        localStorage.setItem('contraseña', password);
        localStorage.setItem('email', email);
        formulario.submit();
        alert("Registro Exitoso :D")
    }

}



