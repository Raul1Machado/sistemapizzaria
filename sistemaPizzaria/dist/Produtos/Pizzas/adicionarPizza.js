"use strict";
// função para adicionar novas pizzas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarPizza = adicionarPizza;
const readline_sync_1 = __importDefault(require("readline-sync"));
const lerPizza_1 = require("./lerPizza");
const salvarPizza_1 = require("./salvarPizza");
//criando a função para adicionar novos sabores de pizza
function adicionarPizza() {
    // vai ler todas pizzas já salvas 
    const todasPizzas = (0, lerPizza_1.lerPizza)();
    //criando o numero do produto com base nos que já tem 
    const numero = todasPizzas.length > 0 ? Math.max(...todasPizzas.map(p => p.id)) + 1 : 1;
    //pedindo as informações a serem adicionadas
    const novaPizza = readline_sync_1.default.question("Sabor de pizza: ");
    const novoValor = readline_sync_1.default.questionFloat("Valor: ");
    // essas informações serão adicionadas na lista pizza
    todasPizzas.push({
        id: numero,
        pizza: novaPizza,
        valor: novoValor,
    });
    //salvando 
    (0, salvarPizza_1.salvarPizza)(todasPizzas);
}
