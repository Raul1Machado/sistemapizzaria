"use strict";
//criando ua função para lozalizar qualquer bebida através de seu número
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procurarBebida = procurarBebida;
exports.mostrarBebidaProcurada = mostrarBebidaProcurada;
const readline_sync_1 = __importDefault(require("readline-sync"));
const lerBebida_1 = require("./lerBebida");
function procurarBebida() {
    //salvando tudo que tem no banco
    const todasBebidas = (0, lerBebida_1.lerBebida)();
    //perguntar o número da bebida procurada
    const bebidaProcurada = readline_sync_1.default.questionInt("Numero do produto: ");
    //armazena o produto procurado com base no numero do produto
    const bebida = todasBebidas.find(b => b.id === bebidaProcurada);
    if (!bebida) {
        console.log("Código inválido!");
        return;
    }
    console.log("Produto selecionado!");
    return bebida;
}
//criando uma função para mostrar qual o item procurado
function mostrarBebidaProcurada() {
    const bebida = procurarBebida();
    if (!bebida)
        return;
    console.log("\n...Localizado!...");
    console.log(`ID: ${bebida.id} | ${bebida.bebida} | Valor: ${bebida.valor.toFixed(2)}`);
}
