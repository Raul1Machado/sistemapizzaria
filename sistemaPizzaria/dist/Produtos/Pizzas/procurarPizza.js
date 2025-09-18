"use strict";
//criando ua função para lozalizar qualque pizza através de seu número
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procurarPizza = procurarPizza;
exports.mostrarPizzaProcurada = mostrarPizzaProcurada;
const readline_sync_1 = __importDefault(require("readline-sync"));
const lerPizza_1 = require("./lerPizza");
function procurarPizza() {
    //salvando tudo que tem no banco
    const todasPizzas = (0, lerPizza_1.lerPizza)();
    //perguntar o número da pizza procurada
    const pizzaProcurada = readline_sync_1.default.questionInt("Numero do produto: ");
    //armazena o produto procurado com base no numero do produto
    const pizza = todasPizzas.find(c => c.id === pizzaProcurada);
    if (!pizza) {
        console.log("Código inválido!");
        return;
    }
    console.log("Produto selecionado!");
    return pizza;
}
function mostrarPizzaProcurada() {
    const pizza = procurarPizza();
    if (!pizza)
        return;
    console.log("\n..Localizado!...");
    console.log(`Numero: ${pizza.id} | Pizza: ${pizza.pizza} | Valor: ${pizza.valor.toFixed(2)}`);
}
