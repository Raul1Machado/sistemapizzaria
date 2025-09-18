"use strict";
//criando ua função para lozalizar qualquer sobremesa através de seu número
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procurarSobremesa = procurarSobremesa;
exports.mostrarSobremesaProcurada = mostrarSobremesaProcurada;
const readline_sync_1 = __importDefault(require("readline-sync"));
const lerSobremesa_1 = require("./lerSobremesa");
function procurarSobremesa() {
    //salvando tudo que tem no banco
    const todaSobremesas = (0, lerSobremesa_1.lerSobremesa)();
    //perguntar o número da pizza procurada
    const sobremesaProcurada = readline_sync_1.default.questionInt("Numero do produto: ");
    //armazena o produto procurado com base no numero do produto
    const sobremesa = todaSobremesas.find(s => s.id === sobremesaProcurada);
    if (!sobremesa) {
        console.log("Código inválido!");
        return;
    }
    console.log("Produto selecionado!");
    return sobremesa;
}
//criando uma função para mostrar qual o item procurado
function mostrarSobremesaProcurada() {
    const sobremesa = procurarSobremesa();
    if (!sobremesa)
        return;
    console.log("\n...Localizado!...");
    console.log(`ID: ${sobremesa.id} | ${sobremesa.sobremesa} | Valor: ${sobremesa.valor.toFixed(2)}`);
}
