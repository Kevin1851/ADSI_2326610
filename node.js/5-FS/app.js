const fs = require("fs")

fs.readFile('\prueba.txt', 'UTF-8', (err, data) => {
    if (err){
        console.log("Error: ",err)
    }else{
        console.log(data)
    }
})
let insertarTexto = "Hola, vengo desde Node.js"
fs.writeFile('\prueba.txt', insertarTexto, function(err){
    if (err){
        console.log("Error: ", err)
    }else{
        console.log("Operación finalizada con exito")
    }
})