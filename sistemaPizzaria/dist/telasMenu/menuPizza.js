"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPizza = menuPizza;
const readline_sync_1 = __importDefault(require("readline-sync"));
const adicionarPizza_1 = require("../Produtos/Pizzas/adicionarPizza");
const editarPizza_1 = require("../Produtos/Pizzas/editarPizza");
const excluirPizza_1 = require("../Produtos/Pizzas/excluirPizza");
const mostrarPizza_1 = require("../Produtos/Pizzas/mostrarPizza");
const procurarPizza_1 = require("../Produtos/Pizzas/procurarPizza");
let loop = true;
//criando o menu de produtos
function menuPizza() {
    console.log("\n---PIZZAS---");
    console.log(" 1 - Mostrar pizzas");
    console.log(" 2 - Adicionar pizza");
    console.log(" 3 - Procurar pizza");
    console.log(" 4 - Editar pizza");
    console.log(" 5 - Excluir pizza");
    console.log(" 6 - Voltar\n");
    const escolha = readline_sync_1.default.questionInt("Digie a opcao: ");
    switch (escolha) {
        case 1:
            (0, mostrarPizza_1.mostrarPizza)();
            break;
        case 2:
            (0, adicionarPizza_1.adicionarPizza)();
            break;
        case 3:
            (0, procurarPizza_1.mostrarPizzaProcurada)();
            break;
        case 4:
            (0, editarPizza_1.editarPizza)();
            break;
        case 5:
            (0, excluirPizza_1.excluirPizza)();
            break;
        case 6:
            console.log("Finalizando...");
            loop = false;
            break;
    }
    //enquanto a condição menu for atendida irá char a função menuPr
    while (loop) {
        menuPizza();
    }
}
