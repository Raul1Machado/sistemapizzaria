"use strict";
//função para mostrar todos as sobremesas do banco
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarSobremesa = mostrarSobremesa;
const lerSobremesa_1 = require("./lerSobremesa");
function mostrarSobremesa() {
    //criando a var que irá armazenar toodas as sobremesas
    const todasSobremesas = (0, lerSobremesa_1.lerSobremesa)();
    console.log("");
    //para cada elemento dentro de sobremesas
    //ele vai passar por cada atributo dele
    todasSobremesas.forEach(s => {
        console.log(`ID: ${s.id} |  ${s.sobremesa} | Valor: ${s.valor.toFixed(2)}`);
    });
}
