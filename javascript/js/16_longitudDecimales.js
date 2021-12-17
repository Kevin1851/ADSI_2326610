"use strict"

/* Metodo toFixed para recortar decimales */
var promedio = 2.56648228;
promedio = promedio.toFixed(2);
console.log(promedio);

/* Forzando el redondo */
/* Metodo slice para redondear */
var promedio2 = 2.56648228;
var promedio2Str = promedio2.toString();
var promedio2Conv = promedio2Str.slice(0, 4);
var promedio2Conv = parseFloat(promedio2Conv);
console.log(promedio2Conv)