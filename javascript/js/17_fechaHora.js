"use strict"

/* Imprimir fecha y hora del navegador */
var currenTime = new Date();
console.log(currenTime);

/* Desglosando fechas y horas */
var anyo = currenTime.getFullYear();
console.log("Año: " +anyo);

 /* Desglosando fechas y horas */
var mes = currenTime.getMonth();
console.log("Mes: " + (mes + 1));

 /* Desglosando fechas y horas */
 var diaSemana = currenTime.getDay();
 console.log("Dia Semana: " + diaSemana );

/* Desglosando fechas y horas */
var dia = currenTime.getDate();
console.log("Dia: " +dia);

/* Desglosando fechas y horas */
var hora = currenTime.getHours();
console.log("Hora: " +hora);

/* Desglosando fechas y horas */
var minutos = currenTime.getMinutes();
console.log("Minutos: " +minutos);

/* Desglosando fechas y horas */
var segundos = currenTime.getSeconds();
console.log("Segundos: " +segundos);

/* Desglosando fechas y horas */
var milisegundos = currenTime.getMilliseconds();
console.log("Milisegundos: " +milisegundos);

/* Desglosando fechas y horas */
var milisegundos1970 = currenTime.getTime();
console.log("Milisegundos transcurridos desde el año 1970: " +milisegundos1970);

var AdiaSemana = new Array();
AdiaSemana[0] = "Domingo";
AdiaSemana[1] = "Lunes";
AdiaSemana[2] = "Martes";
AdiaSemana[3] = "Miercoles"
AdiaSemana[4] = "Jueves";
AdiaSemana[5] = "Viernes";
AdiaSemana[6] = "Sabado";
/* Cambiar el numero del dia por texto */
console.log ("Dia de la semana: "+ AdiaSemana [diaSemana]);
/* Fecha: Jueves, 2 de Diciembre del año 2021 */
var Ames = new Array();
Ames[0] = "Enero";
Ames[1] = "Febrero";
Ames[2] = "Marzo";
Ames[3] = "Abril"
Ames[4] = "Mayo";
Ames[5] = "Junio";
Ames[6] = "Julio"
Ames[7] = "Agosto"
Ames[8] = "Septiembre"
Ames[9] = "Octubre"
Ames[10] = "Noviembre"
Ames[11] = "Diciembre"
console.log ("Fecha: " + AdiaSemana [diaSemana]+" " + dia + " de " + Ames [mes] + " Del año " + anyo);

/*Determinar si ya termino el tiempo*/
var fechaHoraLimite = new Date(Date.UTC(2021, 11, 9, 9, 30));
fechaHoraLimite.setHours(8);
console.log("Fecha y Hora de vencimiento: " + fechaHoraLimite);

if (anyo <= fechaHoraLimite.getFullYear() && 
    mes <= fechaHoraLimite.getMonth() &&
    hora <= fechaHoraLimite.getUTCHours() &&
    minutos <= fechaHoraLimite.setMinutes()) {
    console.log("Falta: " + (dia - fechaHoraLimite.getDate()) + "Dias, " +
    (hora - fechaHoraLimite.getHours()) + "Horas, " + 
    (fechaHoraLimite.getMinutes()- minutos) + "Minutos");
    console.log("El envio fue realizado con exito")
    } 
    else {
        console.log("Lo siento, la fecha de envio ya paso.")
    }