"use strict";
// menu produtos
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuProdutos = menuProdutos;
const readline_sync_1 = __importDefault(require("readline-sync"));
const menuPizza_1 = require("../telasMenu/menuPizza");
const menuBebida_1 = require("./menuBebida");
const menuSobremesa_1 = require("./menuSobremesa");
const todosProdutos_1 = require("../Produtos/todosProdutos");
//definindo uma varíavel para controlar o loop
let loop = true;
//criando o menu de produtos
function menuProdutos() {
    console.log("\n---PRODUTOS---");
    console.log(" 1 - Mostrar todos produtos");
    console.log(" 2 - Pizzas");
    console.log(" 3 - Bebidas");
    console.log(" 4 - Sobremesas");
    console.log(" 5 - Voltar\n");
    const escolha = readline_sync_1.default.questionInt("Digie a opcao: ");
    switch (escolha) {
        case 1:
            (0, todosProdutos_1.todosProdutos)();
            break;
        case 2:
            (0, menuPizza_1.menuPizza)();
            break;
        case 3:
            (0, menuBebida_1.menuBebida)();
            break;
        case 4:
            (0, menuSobremesa_1.menuSobremesa)();
            break;
        case 5:
            console.log("Finalizando...");
            loop = false;
            break;
    }
    //enquanto a condição menu for atendida irá char a função menuProdut
    while (loop) {
        menuProdutos();
    }
}
