"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuBebida = menuBebida;
const readline_sync_1 = __importDefault(require("readline-sync"));
const procurarBebida_1 = require("../Produtos/Bebidas/procurarBebida");
const mostrarBebida_1 = require("../Produtos/Bebidas/mostrarBebida");
const adicionarBebida_1 = require("../Produtos/Bebidas/adicionarBebida");
const excluirBebida_1 = require("../Produtos/Bebidas/excluirBebida");
const editarBebida_1 = require("../Produtos/Bebidas/editarBebida");
let loop = true;
//criando o menu de produtos
function menuBebida() {
    console.log("\n---BEBIDAS---");
    console.log(" 1 - Mostrar bebidas");
    console.log(" 2 - Adicionar bebida");
    console.log(" 3 - Procurar bebida");
    console.log(" 4 - Editar bebida");
    console.log(" 5 - Excluir bebida");
    console.log(" 6 - Voltar\n");
    const escolha = readline_sync_1.default.questionInt("Digie a opcao: ");
    switch (escolha) {
        case 1:
            (0, mostrarBebida_1.mostrarBebida)();
            break;
        case 2:
            (0, adicionarBebida_1.adicionarBebida)();
            break;
        case 3:
            (0, procurarBebida_1.mostrarBebidaProcurada)();
            break;
        case 4:
            (0, editarBebida_1.editarBebida)();
            break;
        case 5:
            (0, excluirBebida_1.excluirBebida)();
            break;
        case 6:
            console.log("Finalizando...");
            loop = false;
            break;
    }
    //enquanto a condição menu for atendida irá char a função menuPr
    while (loop) {
        menuBebida();
    }
}
