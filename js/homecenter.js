"use strict"

function dezplegarCaja(){

    let chatBoxIn = document.getElementById("chat-box");
        chatBoxIn.classList.add("chat-box-in");
    let chatBoxOut = document.getElementById("chat-box");
        chatBoxOut.classList.remove("chat-box-out");

    let headerChatBox = document.getElementById("header-chat-box");
    headerChatBox.classList.add("header-box-in");
};

function cerrarCaja(){
    
    document.getElementById("chat-box").classList.toggle("chat-box-in");
};