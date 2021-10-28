document.getElementById("btn_open").addEventListener("click",open_close_menu);

var btn_open = document.getElementById("btn_open");
var nav_oculto = document.getElementById("nav_oculto");
var contenido_principal_oculto = document.getElementById("contenido_principal_desplegado");
var main_content_java = document.getElementById("main")

function open_close_menu (){
    nav_oculto.classList.toggle("nav_oculto");
    contenido_principal_oculto.classList.toggle("contenido_principal_desplegado");
    main_content_java.classList.toggle("main_content_java")
}