"use strict"

class Automovil{
    constructor(marca, modelo, precio, imagen){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}

let auto = new Automovil ("Mazda ", "Touring ", "$10.000.000 ", "img/mazda.jpg")

function validarMazda () {
    alert("¡" + auto.Marca + " " + auto.Modelo + " "  + "Es el automovil que necesitas!");
    
    mostrarVehiculo();
}
function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual")

    let marcaAuto = document.createElement("label");
    contentAuto.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentAuto.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentAuto.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
}
let toyota = new Automovil ("Toyota ", "Hero ", "$150.000.000", "img/toyota.jpg");

function validarToyota () {
    alert ("¡" + toyota.Marca + " " + toyota.Modelo + " " + "Es el automovil que necesitas!")

    mostrarToyota ();
}

function mostrarToyota () {
    let contenedorPrinToyota = document.getElementById("mainContent");
    let contentToyota        = document.createElement("div");
    contenedorPrinToyota.appendChild(contentToyota);

    let marcaToyota = document.createElement("label");
    contentToyota.appendChild(marcaToyota);
    let textToyotaMarca = document.createTextNode(toyota.Marca);
    marcaToyota.appendChild(textToyotaMarca);

    let modeloToyota = document.createElement("label");
    contentToyota.appendChild(modeloToyota);
    let textModelToyota = document.createTextNode(toyota.Modelo);
    modeloToyota.appendChild(textModelToyota);

    let precioToyota = document.createElement("label");
    contentToyota.appendChild(precioToyota);
    let textPrecioToyota = document.createTextNode(toyota.Precio);
    precioToyota.appendChild(textPrecioToyota);

    let imgToyota = document.createElement("img");
    contentToyota.appendChild(imgToyota);
    imgToyota.setAttribute("src", toyota.Imagen)
}
 let chevrolet = new Automovil ("Chevrolet ", "Camaro ", "$300.000.000 ", "img/camaro.jpg");
 function validarChevrolet() {
     alert ("¡" + chevrolet.Marca + " " + chevrolet.Modelo + " " + "Es el automovil que necesitas!")

     mostarChevrolet();
 }

function mostarChevrolet () {
    let contenedorPrincChevrolet = document.getElementById("mainContent");
    let contnedorChevrolet = document.createElement("div");
    contenedorPrincChevrolet.appendChild(contnedorChevrolet);

    let marcaChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(marcaChevrolet);
    let textMarcaChevrolet = document.createTextNode(chevrolet.Marca);
    marcaChevrolet.appendChild(textMarcaChevrolet);

    let modeloChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(modeloChevrolet);
    let textModeloChevrolet = document.createTextNode(chevrolet.Modelo);
    marcaChevrolet.appendChild(textModeloChevrolet);

    let precioChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(precioChevrolet);
    let textPrecioChevrolet = document.createTextNode(chevrolet.Precio);
    precioChevrolet.appendChild(textPrecioChevrolet);

    let imgChevrolet = document.createElement("img");
    contnedorChevrolet.appendChild(imgChevrolet);
    imgChevrolet.setAttribute("src", chevrolet.Imagen)
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Automoviles disponibles" ) {
            mostrarVehiculo(auto);
            mostrarToyota(toyota);
            mostarChevrolet(chevrolet);
        }
        else if (busqueda == "Mazda" ) {
            mostrarVehiculo(auto);}
        

        if (busqueda == "Toyota") {
            mostrarToyota(toyota);}

        else if (busqueda == "Chevrolet") {
            mostarChevrolet(chevrolet);
        }
            
        else {
              this.true;
        } 
        return this. false.alert("No se han encontrado resultados que coincidan con la busqueda"); 
    }
})


function limpiarVentana () {
    document.getElementById("mainContent").innerHTML = "" ;
}