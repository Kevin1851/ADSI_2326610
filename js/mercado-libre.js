"use strict"

class Automovil{
    constructor(marca, modelo, precio, imagen){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}

let auto = new Automovil ("Mazda ", "Touring ", "$82.000.000 ", "img/mazda.jpg")

let auto2 = new Automovil ("Mazda ", "Grand Touring ", "$110.000.000 ", "img/mazda-6.jpg")

let auto3 = new Automovil ("Mazda ", "Grand Touring 2021", "$132.000.000 ", "img/mazda-7.jpg")

function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(auto2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(auto2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(auto2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // Tercer auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(auto3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(auto3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(auto3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

//Segunda busqueda

let toyota = new Automovil ("Toyota ", "Hero ", "$150.000.000", "img/toyota.jpg");

let toyota2 = new Automovil ("Toyota ", "Prado ", "$200.000.000", "img/toyota-prado.jfif");

let toyota3 = new Automovil ("Toyota ", "Sumo ", "$48.000.000", "img/toyota-sumo.jpg");

function mostrarToyota () {

    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", toyota.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(toyota.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(toyota.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(toyota.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
    
    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", toyota2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(toyota2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(toyota2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(toyota2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // Tercer auto 

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", toyota3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(toyota3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(toyota3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(toyota3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

// Tercera busqueda


 let chevrolet = new Automovil ("Chevrolet ", "Camaro ", "$700.000.000 ", "img/camaro.jpg");
 
 let chevrolet2 = new Automovil ("Chevrolet ", "Captiva ", "$250.000.000 ", "img/chevrolet-captiva.jpg");

 let chevrolet3 = new Automovil ("Chevrolet ", "Traker ", "$80.000.000 ", "img/chevrolet-traker.jfif");

function mostarChevrolet () {

    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", chevrolet.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(chevrolet.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(chevrolet.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(chevrolet.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", chevrolet2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(chevrolet2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(chevrolet2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(chevrolet2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // tercer auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", chevrolet3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(chevrolet3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(chevrolet3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(chevrolet3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Automoviles disponibles" ) {
            mostrarVehiculo(auto, auto2, auto3);
            mostrarToyota(toyota, toyota2, toyota3);
            mostarChevrolet(chevrolet, chevrolet2, chevrolet3);
        }
        else if (busqueda == "Mazda") {
            mostrarVehiculo(auto, auto2, auto3);
        }
        
        else if (busqueda == "Toyota") {
            mostrarToyota(toyota, toyota2, toyota3);}

        else if (busqueda == "Chevrolet") {
            mostarChevrolet(chevrolet, chevrolet2, chevrolet3);
        }
            
        else {
            alert("No se han encontrado resultados que coincidan con la busqueda");
        } 
    }
})

function limpiarVentana () {
    document.getElementById("mainContent").innerHTML = "" ;
}