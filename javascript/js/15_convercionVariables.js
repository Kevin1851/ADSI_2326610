"use strict"

/* Convercion Temporal de forma implícita */
console.log("Convercion Implicita")
var num1 = "12";
var num2 = 4;

console.log("El resultado de la suma es: " + (num2+num1));
console.log("El resultado de la resta es: " + (num2-num1));
console.log("El resultado de la multiplicacion es: " + (num2*num1));
console.log("El resultado de la division es: " + (num2 / num1));

/* Convercion Explicita */
console.log("Convercion Explicita")
var num3 = "20";
var num4 = 2;
var num3Int = parseInt(num3);
console.log("El resultado de la suma es: " + (num3Int + num4));

var num5 = "12,2";
var num6 = 4.5;
console.log("El resultado de la suma es: " + (parseFloat(num5) + num6));

var num7 = 12;
var num8 = 10;
var num7Str = num7.toString();
console.log("El resultado de la suma es: " + (num7Str + num8));

var num9 = "8";
var num10 = 3;
console.log("El resultado de la suma es: " + (Number(num9) + num10));
console.log("El resultado de la suma es: " + (num9 + num10));