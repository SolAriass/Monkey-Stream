let contenidoCompleto = [
    {
      "Titulo": "The Exorcist",
      "Formato": "Película",
      "Genero": "Terror",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA EL EXORCISTA.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaTheExorcist.html"
    },
    {
      "Titulo": "E.T.",
      "Formato": "Película",
      "Genero": "Ciencia ficción",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA-ET.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaET.html"
    },
    {
      "Titulo": "Soul",
      "Formato": "Película",
      "Genero": "Animación",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA-SOUL.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaSoul.html"
    },
    {
      "Titulo": "Coraline",
      "Formato": "Película",
      "Genero": "Animación",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA CORALINE.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaCoraline.html"
    },
    {
      "Titulo": "El Mundo Oculto de Sabrina",
      "Formato": "Serie",
      "Genero": "Sobrenatural",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/SERIE-SABRINA.jpg",
      "Vinculo": "../pages/paginas-series/VistaElMundoOcultoDeSabrina.html"
    },
    {
      "Titulo": "Vertigo",
      "Formato": "Película",
      "Genero": "Suspenso",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA-VERTIGO.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaVertigo.html"
    },
    {
      "Titulo": "Los Paranoicos",
      "Formato": "Película",
      "Genero": "Comedia",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA LOS PARANOICOS.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaLosParanoicos.html"
    },
    {
      "Titulo": "Pretty Little Liars",
      "Formato": "Serie",
      "Genero": "Drama",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/SERIE PRETTY LITTLE LIARS.jpg",
      "Vinculo": "../pages/paginas-series/VistaPrettyLittleLiars.html"
    },
    {
      "Titulo": "Up",
      "Formato": "Película",
      "Genero": "Animación",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA UP.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaUp.html"
    },
    {
      "Titulo": "Fantastic Mr. Fox",
      "Formato": "Película",
      "Genero": "Animación",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA SR ZORRO.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaFantasticoSrZorro.html"
    },
    {
      "Titulo": "The 100",
      "Formato": "Serie",
      "Genero": "Ciencia ficción",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/SERIE THE 100.jpg",
      "Vinculo": "../pages/paginas-series/VistaThe100.html"
    },
    {
      "Titulo": "Monster House",
      "Formato": "Película",
      "Genero": "Animación",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA MONSTER HOUSE.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaMonsterHouse.html"
    },
    {
      "Titulo": "The Purge",
      "Formato": "Película",
      "Genero": "Terror",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA PURGA.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaLaPurga.html"
    },
    {
      "Titulo": "Gossip Girl",
      "Formato": "Serie",
      "Genero": "Drama",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/SERIE GOSSIP GIRL.jpg",
      "Vinculo": "../pages/paginas-series/VistaGossipGirl.html"
    },
    {
      "Titulo": "M3GAN",
      "Formato": "Película",
      "Genero": "Terror",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA MEGAN.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaMegan.html"
    },
    {
      "Titulo": "Peaky Blinders",
      "Formato": "Serie",
      "Genero": "Crimen",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/SERIE PEAKY BLINDERS.jpg",
      "Vinculo": "../pages/paginas-series/VistaPeakyBlinders.html"
    },
    {
      "Titulo": "Cars",
      "Formato": "Película",
      "Genero": "Animación",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA CARS.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaCars.html"
    },
    {
      "Titulo": "Donde están las rubias",
      "Formato": "Película",
      "Genero": "Comedia",
      "Poster": "../assets/images/IMAGENES DE PELICULAS Y SERIES/PELICULA Y DONDE ESTAN LAS RUBIAS.jpg",
      "Vinculo": "../pages/paginas-peliculas/VistaYDondeEstanLasRubias.html"
    }
  ];

let cargarPeliSeries = document.getElementById("cargarPeliSeries");


  for(i in contenidoCompleto){
    cargarPeliSeries.innerHTML += 
    `<article>
    <a href="${contenidoCompleto[i].Vinculo}" class="imagen_pelicula">
    <img src="${contenidoCompleto[i].Poster}" alt="${contenidoCompleto[i].Titulo}">
    </a>
    </article>
    `
  }


let seleccionGenero = document.getElementById("genero");


seleccionGenero.addEventListener("change", function(){

    cargarPeliSeries.innerHTML = "";

    let opcion = seleccionGenero.value;

    let filtrado ;

    if(opcion != "todos"){
        filtrado = contenidoCompleto.filter(contenido => (contenido.Genero) == opcion);
    }else{
        filtrado = contenidoCompleto;
    }

    for(i in filtrado){
        cargarPeliSeries.innerHTML +=
        `<article>
        <a href="${filtrado[i].Vinculo}" class="imagen_pelicula">
        <img src="${filtrado[i].Poster}" alt="${filtrado[i].Titulo}">
        </a>
        </article>` 
    }

})

let buscador = document.getElementById("busqueda");

buscador.addEventListener("keyup", function(){

    cargarPeliSeries.innerHTML = "";

    let resultado = buscador.value.toLowerCase().trim();

    let filtrado ;

    filtrado = contenidoCompleto.filter(contenido => (contenido.Titulo.toLowerCase().trim()).indexOf(resultado) > -1)

    for(i in filtrado){
        cargarPeliSeries.innerHTML +=
        `<a href="${filtrado[i].Vinculo}" class="imagen_pelicula">
        <img src="${filtrado[i].Poster}" alt="${filtrado[i].Titulo}">
        </a>` 
    }


});


let series = document.querySelector("#Serie");
let pelicula = document.querySelector("#Pelicula");


let titulo = document.createElement("h1");
let main = document.querySelector("#main")
let contenido;



series.addEventListener("click", function(){

    cargarPeliSeries.innerHTML = "";
    titulo.innerHTML = "";
    main.innerHTML = "";

    contenido = document.createTextNode("Series Disponibles")
    titulo.appendChild(contenido)
    main.appendChild(titulo)
    titulo.classList.add("formatoNombre")


    let filtrado ;

    filtrado = contenidoCompleto.filter(contenido => (contenido.Formato) == "Serie");

    for(i in filtrado){
        cargarPeliSeries.innerHTML +=
        `<a href="${filtrado[i].Vinculo}" class="imagen_pelicula">
        <img src="${filtrado[i].Poster}" alt="${filtrado[i].Titulo}">
        </a>` 
    }

    let clase = document.getElementById("clase")
    let seleccionar = document.getElementById("seleccionar");

    seleccionar.classList.add("ocultar")
    clase.classList.add("ocultar")


})


pelicula.addEventListener("click", function(){

    cargarPeliSeries.innerHTML = "";
    titulo.innerHTML = "";
    main.innerHTML = ""

    contenido = document.createTextNode("Peliculas Disponibles")
    titulo.appendChild(contenido)
    main.appendChild(titulo)
    titulo.classList.add("formatoNombre")

    let filtrado ;

    filtrado = contenidoCompleto.filter(contenido => (contenido.Formato) == "Película");

    for(i in filtrado){
        cargarPeliSeries.innerHTML +=
        `<a href="${filtrado[i].Vinculo}" class="imagen_pelicula">
        <img src="${filtrado[i].Poster}" alt="${filtrado[i].Titulo}">
        </a>` 
    }

    let barra = document.getElementById("barrita")
    barra.classList.add("ocultar")

    let clase = document.getElementById("clase")
    let seleccionar = document.getElementById("seleccionar");

    seleccionar.classList.add("ocultar")
    clase.classList.add("ocultar")

})





