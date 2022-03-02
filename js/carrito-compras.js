"use-strict"

let contador = 1;
let numUnidades = "";
let numProductos
let precio = 480000;
let costoTotal

function aumentar(){
    if(contador < 10) {
        numUnidades = document.getElementById('numUnidades').value = ++contador;

        numProductos = document.getElementById('numProductos');
        numProductos.innerHTML = contador;

        costoTotal = document.getElementById('precio');
        costoTotal.innerHTML = precio * contador
    }
}

function disminuir(){
    if(contador > 1) {
        numUnidades = document.getElementById('numUnidades').value = --contador;

        numProductos = document.getElementById('numProductos');
        numProductos.innerHTML = contador;

        costoTotal = document.getElementById('precio');
        costoTotal.innerHTML = precio * contador - contador
    }
}