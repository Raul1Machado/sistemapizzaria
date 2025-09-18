"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuSobremesa = menuSobremesa;
const readline_sync_1 = __importDefault(require("readline-sync"));
const procurarSobremesa_1 = require("../Produtos/Sobremesas/procurarSobremesa");
const mostrarSobremesa_1 = require("../Produtos/Sobremesas/mostrarSobremesa");
const adicionarSobremesa_1 = require("../Produtos/Sobremesas/adicionarSobremesa");
const editarSobremesa_1 = require("../Produtos/Sobremesas/editarSobremesa");
const excluirSobremesa_1 = require("../Produtos/Sobremesas/excluirSobremesa");
let loop = true;
//criando o menu de sobremesas
function menuSobremesa() {
    console.log("\n---SOBREMESAS---");
    console.log("1 - Mostrar sobremesas");
    console.log("2 - Adicionar sobremesa");
    console.log("3 - Procurar sobremesa");
    console.log("4 - Editar sobremesa");
    console.log("5 - Excluir sobremesa");
    console.log("6 - Voltar\n");
    const escolha = readline_sync_1.default.questionInt("Digie a opcao: ");
    switch (escolha) {
        case 1:
            (0, mostrarSobremesa_1.mostrarSobremesa)();
            break;
        case 2:
            (0, adicionarSobremesa_1.adicionarSobremesa)();
            break;
        case 3:
            (0, procurarSobremesa_1.mostrarSobremesaProcurada)();
            break;
        case 4:
            (0, editarSobremesa_1.editarSobremesa)();
            break;
        case 5:
            (0, excluirSobremesa_1.excluirSobremesa)();
            break;
        case 6:
            console.log("Finalizando...");
            loop = false;
            break;
    }
    //enquanto a condição menu for atendida irá char a função menu
    while (loop) {
        menuSobremesa();
    }
}
