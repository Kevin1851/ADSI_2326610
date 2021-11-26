"use strict"

//1er manera de declarar

var usuario1 = new Array();
    usuario1[0] = 1;
    usuario1[1] = "1007563113";
    usuario1[2] = "Kevin";
    usuario1[3] = "Murcia";
    usuario1[4] = "11-10-2011";
    usuario1[5] = "Cartagena";
    usuario1[6] = "Latam";

// 2da manera de declarar

var usuario2 = new Array(2, "100656431", "Juan Felipe", "Moreno", "03-07-2010", "San Andres", "Avianca");

// 3er manera de declarar

var usuario3 = [3, "100667657", "Bernardo", "Silva", "05-12-2012", "Barranquilla", "Qatar Airlines"];

console.log("Nombre de usuario 1: " + usuario1[2]);
console.log("Nombre de usuario 2: " + usuario2[2]);
console.log("Nombre de usuario 3: " + usuario3[2]);

// Propiedad Length (Longitud)

var mensajeUser = "No me gusto!";
var longitudMensaje = mensajeUser.length;

if(longitudMensaje > 20){
    console.log("Excede el numero de caracteres valido")
} else if (longitudMensaje < 20){
    console.log("El mensaje se envió con exíto")
}else {console.log("Surgió un error inesperado")};

/* pop     = remover ultimo elemento
   push    = agregar elemento al final de la lista 
   shift   = remover primer elemento de la lista
   unshift = agregar al principio de la lista
   splice  = agregar elemento a mitad de la lista*/