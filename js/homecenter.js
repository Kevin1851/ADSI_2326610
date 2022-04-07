"use strict"

function dezplegarCaja(){

    let chatBoxIn = document.getElementById("chat-box");
        chatBoxIn.classList.add("chat-box-in");
    let chatBoxOut = document.getElementById("chat-box");
        chatBoxOut.classList.remove("chat-box-out");

    let headerChatBox = document.getElementById("all-content");
        headerChatBox.classList.add("all-content-in");
};

function cerrarCaja(){
    
    document.getElementById("chat-box").classList.remove("chat-box-in");
    document.getElementById("chat-box").classList.add("chat-box-out");
};