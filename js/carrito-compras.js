"use-strict"

let contador = 1;
let numUnidades = "";
let numProductos
let precio = 480000/* document.getElementById('precioEstable').innerHTML */;
let costoTotal

function aumentar(){

    if(contador < 10) {
        numUnidades = document.getElementById('numUnidades').value = ++contador;

        numProductos = document.getElementById('numProductos').innerHTML = contador;

        costoTotal = document.getElementById('subtotal').innerHTML = precio * contador;
    }
}

function disminuir(){

    if(contador > 1) {
        numUnidades = document.getElementById('numUnidades').value = contador--;

        numProductos = document.getElementById('numProductos').innerHTML = contador;

        costoTotal = document.getElementById('subtotal').innerHTML = precio * contador;
    }
}