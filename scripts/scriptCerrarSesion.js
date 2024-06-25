let botonCerrarSesion = document.getElementById("boton_cerrar")

botonCerrarSesion.addEventListener("click", function () {
    localStorage.clear();
});