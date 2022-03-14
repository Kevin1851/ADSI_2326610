"use strict"

// variables globales

let nodoTabla

function crearEncabezado(){

    nodoTabla = document.createElement("table");
    let contenedor = document.getElementById("table-js");
    contenedor.appendChild(nodoTabla);

    let nodoFilaEncabezado = document.createElement("tr");
    nodoTabla.appendChild(nodoFilaEncabezado);

    let nodoEncabezado1 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado1);
    let codigoHeading = document.createTextNode("Código");
    nodoEncabezado1.appendChild(codigoHeading);

    let nodoEncabezado2 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado2);
    let descripcionHeading = document.createTextNode("Descripción");
    nodoEncabezado2.appendChild(descripcionHeading);

    let nodoEncabezado3 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado3);
    let valorUnitarioHeading = document.createTextNode("Valor Unitario");
    nodoEncabezado3.appendChild(valorUnitarioHeading);

    let nodoEncabezado4 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado4);
    let unidadesStockHeading = document.createTextNode("Unidades en Stock");
    nodoEncabezado4.appendChild(unidadesStockHeading);

    nodoTabla.setAttribute("class", "table-style")
    nodoTabla.setAttribute("id", "table-stock")
}

function validarTabla(){
    
    if(!document.getElementById("table-stock")) {
        crearEncabezado();
    }
}

function cargarProducto(){

    validarTabla();

    let inputCodigo = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigo);

    let inputDescripcion = document.getElementById("descripcion").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcion);

    let inputValorUnitario = document.getElementById("valorUnitario").value;
    let inputValorUnitarioNodo = document.createTextNode(inputValorUnitario);

    let inputUnidadesStock = document.getElementById("unidadesStock").value;
    let inputUnidadesStockNodo = document.createTextNode(inputUnidadesStock);
    
    cargarInformacionTabla(inputCodigoNodo, inputDescripcionNodo, inputValorUnitarioNodo, inputUnidadesStockNodo);

    limpiarFormulario()
}

function cargarInformacionTabla(codigo, descripcion, valorUnitario, unidadesStock){

    let nodoProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoProducto);

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescripcionTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescripcionTD);
    nodoDescripcionTD.appendChild(descripcion);

    let nodoValorUnitarioTD = document.createElement("td");
    nodoProducto.appendChild(nodoValorUnitarioTD);
    nodoValorUnitarioTD.appendChild(valorUnitario);

    let nodoUnidadesStockTD = document.createElement("td");
    nodoProducto.appendChild(nodoUnidadesStockTD);
    nodoUnidadesStockTD.appendChild(unidadesStock);
}

function limpiarFormulario(){
    document.getElementById("codigo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("valorUnitario").value = "";
    document.getElementById("unidadesStock").value = "";
}