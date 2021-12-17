"use strict"

/* Redondear de forma automatica con el metodo round. */
var number1 = 4.4; /* Redondear hacia abajo*/
var number2 = 4.6; /* Redondear hacia arriba*/
var number3 = 4.5; /* Redondear hacia arriba*/
var number1Round = Math.round(number1);
var number2Round = Math.round(number2);
var number3Round = Math.round(number3);

console.log("variable 1: " + number1Round + "\n" +
            "variable 2: " + number2Round + "\n" +
            "variable 3: " + number3Round);

