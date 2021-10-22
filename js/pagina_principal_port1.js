document.getElementById("btn_open").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var titulo = document.getElementById("titulo");
var option_menu = document.getElementById("option_menu");
var master_box = document.getElementById("master_box");

function open_close_menu (){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
    titulo.classList.toggle("titulo");
    option_menu.classList.toggle("option_menu");
    master_box.classList.toggle("master_box");
}