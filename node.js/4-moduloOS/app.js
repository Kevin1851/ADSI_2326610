const os = require("os")

console.log("Identificación del equipo")
console.log("Procesador", os.cpus())
console.log("Arquitectura", os.platform(), os.freemem())
