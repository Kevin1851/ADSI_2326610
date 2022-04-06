"use strict"

let horaSalida = new Date (2022, 10, 5, 9, 12,0);
let horaLlegada = new Date (2022, 4, 29, 8, 17,0);
let horaSalida1 = new Date (2022, 3, 5, 2, 12,0);
let horaLlegada1 = new Date (2022, 3, 20, 3, 18,0);
let precio = 350000;
let precio1 = 320000;
let formatoPrecio = new Intl.NumberFormat('es-Es').format(precio);
let formatoPrecio1 = new Intl.NumberFormat('es-Es').format(precio1);

class Vuelos{
    constructor(origen, destino, horaSalida, horaLlegada, precio, imagen){
        this.Origen = origen;
        this.Destino = destino;
        this.Salida = horaSalida;
        this.Llegada = horaLlegada;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}

let vuelo = [{
    "origen":"Bogotá",
    "destino":"Medellín",
    "horaSalida": addCerosFecha(horaSalida.getDay().toString()) + "/" + addCerosFecha(horaSalida.getMonth().toString()) + "/" + horaSalida.getFullYear(),
    "horaLlegada": addCerosFecha(horaLlegada.getDay().toString()) + "/" + addCerosFecha(horaLlegada.getMonth().toString()) + "/" + horaLlegada.getFullYear,
    "precio":formatoPrecio,
    "imagen":"img/venecia.jpg"
},
{
    "origen":"Bogotá",
    "destino":"Barranquilla",
    "horaSalida" : addCerosFecha(horaSalida1.getDay().toString()) + "/" + addCerosFecha(horaSalida1.getMonth().toString()) + "/" + horaSalida1.getFullYear(),
    "horaLlegada":horaLlegada1.getDay()+ "/" + horaLlegada1.getMonth + "/" + horaLlegada1.getFullYear,
    "precio":formatoPrecio1,
    "imagen":"img/coliceo.png"
},
{
    "origen":"Bogotá",
    "destino":"Cartagena",
    "horaSalida": addCerosFecha(horaSalida.getDay().toString()) + "/" + addCerosFecha(horaSalida.getMonth().toString()) + "/" + horaSalida.getFullYear(),
    "horaLlegada": addCerosFecha(horaLlegada.getDay().toString()) + "/" + addCerosFecha(horaLlegada.getMonth().toString()) + "/" + horaLlegada.getFullYear,
    "precio":formatoPrecio,
    "imagen":"img/santorini.jpg"
}];

function addCerosFecha(fecha) {
    if (fecha < 10) {
        fecha = "0" + fecha;
    }
    return fecha;
}
function mostrarVuelos(){
    for(let i = 0; i < vuelo.length; i++){
        cargarVuelos(vuelo[i].origen, vuelo[i].destino, vuelo[i].horaSalida, vuelo[i].horaLlegada, vuelo[i].precio, vuelo[i].imagen);
    }
}

function cargarVuelos(origen, destino, horaSalida, horaLlegada, formatoPrecio, imagen){
    let contentPrincipal = document.getElementById("articulos");
    let contentVuelo = document.createElement("div");
    contentPrincipal.appendChild(contentVuelo);
    contentVuelo.setAttribute("class", "article");

    let imagenVuelo = document.createElement("img");
    contentVuelo.appendChild(imagenVuelo);
    imagenVuelo.setAttribute("src", imagen);
    imagenVuelo.setAttribute("class", "imagen");

    let salidaVueloContent = document.createElement("div");
    contentVuelo.appendChild(salidaVueloContent);
    salidaVueloContent.setAttribute("class", "hora-salida");
    let salidaHoraVuelo = document.createElement("label");
    salidaVueloContent.appendChild(salidaHoraVuelo);
    salidaHoraVuelo.setAttribute("class", "texto-hora-salida")
    let textSalidaHoraVuelo = document.createTextNode("Viaja el " + horaSalida);
    salidaHoraVuelo.appendChild(textSalidaHoraVuelo);

    let contentDescripcion = document.createElement("div");
    contentVuelo.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion");

    let salidaVuelo = document.createElement("label");
    contentDescripcion.appendChild(salidaVuelo);
    salidaVuelo.setAttribute("class", "origen-vuelo")
    let textSalidaVuelo = document.createTextNode("desde " + origen);
    salidaVuelo.appendChild(textSalidaVuelo);

    let destinoVuelo = document.createElement("label");
    contentDescripcion.appendChild(destinoVuelo);
    let textDestinoVuelo = document.createTextNode("hacía " + destino);
    destinoVuelo.appendChild(textDestinoVuelo);

    let soloIdaVuelo = document.createElement("label");
    contentDescripcion.appendChild(soloIdaVuelo);
    let textSoloIdaVuelo = document.createTextNode("Solo ida");
    soloIdaVuelo.appendChild(textSoloIdaVuelo);

    let economicoVuelo = document.createElement("label");
    contentDescripcion.appendChild(economicoVuelo);
    let textEconomicoVuelo = document.createTextNode("Economy");
    economicoVuelo.appendChild(textEconomicoVuelo);

    let textoDescriptivoVuelo = document.createElement("label");
    contentDescripcion.appendChild(textoDescriptivoVuelo);
    let nodoTextoDescriptivoVuelo = document.createTextNode("Precio final desde");
    textoDescriptivoVuelo.appendChild(nodoTextoDescriptivoVuelo);

    let precioVuelo = document.createElement("label");
    contentDescripcion.appendChild(precioVuelo);
    let nodoPrecioVuelo = document.createTextNode("COP " + formatoPrecio);
    precioVuelo.appendChild(nodoPrecioVuelo);

    let tasasVuelo = document.createElement("label");
    contentDescripcion.appendChild(tasasVuelo);
    let nodoTasasVuelo = document.createTextNode("Tasas incluidas · Vuelo directo");
    tasasVuelo.appendChild(nodoTasasVuelo);
}