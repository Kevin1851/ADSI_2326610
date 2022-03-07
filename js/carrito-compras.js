"use-strict"

let contador = 0;
let numUnidades = "";
let numProductos
let costoTotal
let subTotalFormato
let precio = 450000;
let formateo

formatearValorUnitario()

function aumentar(){

    if(contador < 10) {
        numUnidades = document.getElementById('numUnidades').value = ++contador;

        numProductos = document.getElementById('numProductos').innerHTML = contador;

        costoTotal = precio * contador;

        subTotalFormato = new Intl.NumberFormat('es-Es').format(costoTotal);
        
        document.getElementById('subtotal').innerHTML = subTotalFormato;
    }
    profuctosAProducto()
}

function disminuir(){

    if(contador > 0) {
        numUnidades = document.getElementById('numUnidades').value = --contador;

        numProductos = document.getElementById('numProductos').innerHTML = contador;

        costoTotal = precio * contador;

        subTotalFormato = new Intl.NumberFormat('es-Es').format(costoTotal);

        document.getElementById('subtotal').innerHTML = subTotalFormato;
    }
    profuctosAProducto()
}

function profuctosAProducto (){
    
    let producto = "";
    let enunciado = "Producto";

    if (contador === 1 ){
        producto = document.getElementById('producto').innerHTML = enunciado;
    }else{
        producto = document.getElementById('producto').innerHTML = "Productos";
    }
}

function formatearValorUnitario(){

    formateo = new Intl.NumberFormat('es-Es').format(precio);
    
    document.getElementById('precioEstable').innerHTML = formateo;
}