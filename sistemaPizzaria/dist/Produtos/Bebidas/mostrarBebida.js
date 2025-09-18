"use strict";
//função para mostrar todos as bebidas do banco
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarBebida = mostrarBebida;
const lerBebida_1 = require("./lerBebida");
function mostrarBebida() {
    //criando a var que irá armazenar toodas as bebidas
    const todasBebidas = (0, lerBebida_1.lerBebida)();
    console.log("");
    //para cada elemento dentro de bebidas
    //ele vai passar por cada atributo dele
    todasBebidas.forEach(b => {
        console.log(`ID: ${b.id} |  ${b.bebida} | Valor: ${b.valor.toFixed(2)}`);
    });
}
