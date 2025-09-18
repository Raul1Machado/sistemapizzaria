"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const menuVendas_js_1 = require("./telasMenu/menuVendas.js");
const menuCliente_js_1 = require("./telasMenu/menuCliente.js");
const menuProduto_js_1 = require("./telasMenu/menuProduto.js");
let loop = true;
function menu() {
    console.clear;
    console.log("\n-- MENU PRINCIPAL --");
    console.log("1 - Clientes");
    console.log("2 - Produtos");
    console.log("3 - Pedidos");
    console.log("4 - Sair\n");
    const escolha = readline_sync_1.default.questionInt("Digite a opcao: ");
    switch (escolha) {
        case 1:
            (0, menuCliente_js_1.menuClientes)();
            break;
        case 2:
            (0, menuProduto_js_1.menuProdutos)();
            break;
        case 3:
            (0, menuVendas_js_1.menuVendas)();
            break;
        case 4:
            console.log("Finalizando...");
            loop = false;
    }
    console.log("Aperte qualquer tecla para continuar");
    readline_sync_1.default.question("");
}
while (loop) {
    menu();
}
