let temporadaUno = ["Capitulo 1", 
                    "Capitulo 2", 
                    "Capitulo 3", 
                    "Capitulo 4", 
                    "Capitulo 5", 
                    "Capitulo 6"]

let temporadaDos = ["Capitulo 1", 
                    "Capitulo 2", 
                    "Capitulo 3", 
                    "Capitulo 4", 
                    "Capitulo 5", 
                    "Capitulo 6"]


let temporadaTres = ["Capitulo 1", 
                    "Capitulo 2", 
                    "Capitulo 3", 
                    "Capitulo 4", 
                    "Capitulo 5", 
                    "Capitulo 6"]

let temporadaCuatro = ["Capitulo 1", 
                        "Capitulo 2", 
                        "Capitulo 3", 
                        "Capitulo 4", 
                        "Capitulo 5", 
                        "Capitulo 6"]


let temporadaCinco =["Capitulo 1", 
                    "Capitulo 2", 
                    "Capitulo 3", 
                    "Capitulo 4", 
                    "Capitulo 5", 
                    "Capitulo 6"]

let temporadaSeis =["Capitulo 1", 
                    "Capitulo 2", 
                    "Capitulo 3", 
                    "Capitulo 4", 
                    "Capitulo 5", 
                    "Capitulo 6"]




let temporadas = document.querySelector("#temporadas")
let capitulos = document.querySelector("#capitulos")


temporadas.addEventListener("change", function(){

    capitulos.innerHTML = "";

    let valorTemporada = temporadas.value;

    switch(valorTemporada){
        case "temp_1":

        for(i in temporadaUno){
        let capitulo = document.createElement("option");
        
        capitulo.value = i;

        let contenido = document.createTextNode(temporadaUno[i]);

        capitulo.appendChild(contenido)

        capitulos.appendChild(capitulo);
        }
        break;
        case "temp_2":

        for(i in temporadaDos){
        let capitulo = document.createElement("option");
        
        capitulo.value = i;

        let contenido = document.createTextNode(temporadaDos[i]);

        capitulo.appendChild(contenido)
        
        capitulos.appendChild(capitulo);

        }
        break;
        case "temp_3":

        for(i in temporadaTres){
        let capitulo = document.createElement("option");
        
        capitulo.value = i;

        let contenido = document.createTextNode(temporadaTres[i]);

        capitulo.appendChild(contenido)
        
        capitulos.appendChild(capitulo);

        }
        break;
        case "temp_4":

        for(i in temporadaCuatro){
        let capitulo = document.createElement("option");
        
        capitulo.value = i;

        let contenido = document.createTextNode(temporadaCuatro[i]);

        capitulo.appendChild(contenido)
        
        capitulos.appendChild(capitulo);

        }
        break;
        case "temp_5":

        for(i in temporadaCinco){
        let capitulo = document.createElement("option");
        
        capitulo.value = i;

        let contenido = document.createTextNode(temporadaCinco[i]);

        capitulo.appendChild(contenido)
        
        capitulos.appendChild(capitulo);

        }
        break;
        case "temp_6":

        for(i in temporadaSeis){
        let capitulo = document.createElement("option");
        
        capitulo.value = i;

        let contenido = document.createTextNode(temporadaSeis[i]);

        capitulo.appendChild(contenido)
        
        capitulos.appendChild(capitulo);

        }
        break;
        default:
            break;
            



    }




})

