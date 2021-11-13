// Suma             = +
// Resta            = -
// Multiplicación   = *
// División         = /
// Residúo          = % 

"use strict"

//Productos existentes

var aguila = 5000;
var aguilaLigh = 6000;
var corona = 8000;

//Cantidad de unidades por producto 

var aguilaU = aguila * 2;
var aguilaLighU = aguilaLigh * 4;
var coronaU = corona * 2;

//Descuento

var descuento = .05;

//Productos con descuento incluido

var descuentoAguila = aguila - (descuento * aguila);
var descuentoAguilaLigh = aguilaLigh - (descuento * aguilaLigh);
var descuentoCorona = corona - (descuento * corona);

//Valor del inventrario

var totalInventario =(aguila * 2 - (descuento * aguila)) + (aguilaLigh * 4 - (descuento * aguilaLigh)) + (corona * 2 - (descuento * corona));