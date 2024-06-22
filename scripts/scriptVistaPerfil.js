let formulario = document.querySelector("#formulario_perfil")

let email = document.querySelector("#email");
let contraseña = document.getElementById("contraseña")
let usuario = document.getElementById("usuario-perfil")

email.innerHTML = localStorage.getItem('email');

contraseña.innerHTML = ' · '.repeat(localStorage.getItem('contraseña').length);

usuario.innerHTML = localStorage.getItem('nombreUsuario')

let boton = document.getElementById("boton-perfil");


function validarBotoncitoPerfil(){

    let deshabilitado = false;
   
    let opciones = document.getElementsByName("metodo-de-pago")

        let seleccionado = false;
    
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                seleccionado = true; 
            }
        }



    if(formulario.contraseñaN.value === "" || formulario.contraseñaR.value === "" || !seleccionado){
        deshabilitado = true;
    }

    if(deshabilitado){
        boton.disabled = true;
    }else{
        boton.disabled = false;
    }


}

formulario.addEventListener("input", validarBotoncitoPerfil);








formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validarPerfil();
});

function validarPerfil(){

    let error = false;

    let contraseñaNueva = document.getElementById("contraseñaN").value;
    let contraseñaRepetida = document.getElementById("contraseñaR").value;
    let codigo = document.getElementById("codigo").value;
    let nroTarjeta = document.getElementById("numero").value
    let opcionesPago = document.getElementsByName("metodo-de-pago");


    document.getElementById("errorContraseñaN").innerHTML = "";
    document.getElementById("errorContraseñaR").innerHTML = "";
    document.getElementById("errorTarjetaYCodigo").innerHTML = "";
    document.getElementById("errorSeleccion").innerHTML = "";

    let expReg = /^(?=(.*[a-zA-Z]){2,})(?=(.*\d){2,})(?=(.*[!@#$%^&*()\-_=+{};:,<.>]){2,}).{8,}$/;

    if(!expReg.test(contraseñaNueva) || contraseñaNueva == ""){
        error = true;
        document.getElementById("errorContraseñaN").innerHTML = "<p> La contraseña que ingreso es incorrecta  </p>"
    }


    if(contraseñaRepetida != contraseñaNueva || contraseñaRepetida == ""){
        error = true;
        document.getElementById("errorContraseñaR").innerHTML = "<p> Debe coincidir con la contraseña original </p>"
    }


    let opcionSeleccionada;
    let seleccionado = false;
    for(i in opcionesPago){
        if(opcionesPago[i].checked){
            seleccionado = true;
            opcionSeleccionada = opcionesPago[i].value;
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
         document.getElementById("errorTarjetaYCodigo").innerHTML = "<p> Tarjeta invalida </p>"
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
              document.getElementById("errorTarjetaYCodigo").innerHTML = "<p> Tarjeta invalida </p>"
         }
     
     }
     
         let expresionCodigo = /^\d{3}$/;
     
         if(!expresionCodigo.test(codigo) || codigo == "" || codigo === '000'){
             error = true;
             document.getElementById("errorTarjetaYCodigo").innerHTML += "<p> Codigo incorrecto </p>"
         }



    }else if(opcionesPago[1].checked){

        let pagoFacil = document.getElementById("pago-facil")
        let rapipago = document.getElementById("rapipago")

        if(!pagoFacil.checked && !rapipago.checked){
            error = true;
            document.getElementById("errorSeleccion").innerHTML = "<p> Presione una opcion </p>"

        }else if(pagoFacil.checked && rapipago.checked){
            error = true;
            document.getElementById("errorSeleccion").innerHTML = "<p> Presione solo una </p>"  
        }

    }

    
    if(!error){

        localStorage.setItem('opcionPago', opcionSeleccionada);

        switch(localStorage.getItem('opcionPago')){
            case 'TarjetaDeCredito':
                let codigo = document.getElementById("codigo").value;
                let nroTarjeta = document.getElementById("numero").value

                localStorage.setItem('nroTarjeta', nroTarjeta);
                localStorage.setItem('codigoTarjeta', codigo);

                break;


            case 'CuponDePago':
                let pagoFacil = document.getElementById("pago-facil")
                let rapipago = document.getElementById("rapipago")
              if(pagoFacil.checked){
                localStorage.setItem('opcionCupon', pagoFacil.value);
              }else{
                localStorage.setItem('opcionCupon', rapipago.value)
              }
            break;
            case 'TransferenciaBancaria':
              let cbu = document.getElementById("cbu").innerHTML;
              localStorage.setItem('cbu', cbu);
            break;
            default:
                break;

        }

        
    
    }




}