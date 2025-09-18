"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuClientes = menuClientes;
const readline_sync_1 = __importDefault(require("readline-sync"));
const adicionarCliente_1 = require("../Clientes/adicionarCliente");
const mostrarCliente_1 = require("../Clientes/mostrarCliente");
const procurarCliente_1 = require("../Clientes/procurarCliente");
const editarCliente_1 = require("../Clientes/editarCliente");
const excluirCliente_1 = require("../Clientes/excluirCliente");
let loop = true;
function menuClientes() {
    console.log("\n-- CLIENTES --");
    console.log(" 1 - Mostrar clientes");
    console.log(" 2 - Adicionar cliente");
    console.log(" 3 - Procurar cliente");
    console.log(" 4 - Editar cliente");
    console.log(" 5 - Excluir cliente");
    console.log(" 6 - Voltar\n");
    const escolha = readline_sync_1.default.questionInt("Digite a opcao: ");
    switch (escolha) {
        case 1:
            (0, mostrarCliente_1.mostrarCliente)();
            break;
        case 2:
            (0, adicionarCliente_1.adicionarCliente)();
            break;
        case 3:
            console.log("Digite o CPF que deseja procurar: ");
            (0, procurarCliente_1.mostrarClienteProcurado)();
            break;
        case 4:
            (0, editarCliente_1.editarCliente)();
            break;
        case 5:
            (0, excluirCliente_1.excluirCliente)();
            break;
        case 6:
            loop = false;
            break;
    }
    while (loop) {
        menuClientes();
    }
}
