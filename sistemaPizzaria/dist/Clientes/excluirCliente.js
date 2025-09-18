"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirCliente = excluirCliente;
const lerCliente_1 = require("./lerCliente");
const readline_sync_1 = __importDefault(require("readline-sync"));
const procurarCliente_1 = require("./procurarCliente");
const salvarCliente_1 = require("./salvarCliente");
function excluirCliente() {
    //armazenando todos valores
    const todosClientes = (0, lerCliente_1.lerCliente)();
    //procurando o cpf para excluir
    const cpf = readline_sync_1.default.question("Digite o CPF do cliente que deseja excluir: ");
    const clienteExcluir = (0, procurarCliente_1.procurarCliente)(cpf);
    //se nao localizar
    if (!clienteExcluir) {
        console.log("Cliente nao encontrado!");
        return;
    }
    console.log("Localizado...excluindo...");
    //criar uma nova lista sem o cpf desejado
    const clientesAtualizados = todosClientes.filter(c => c.cpf !== clienteExcluir.cpf);
    (0, salvarCliente_1.salvarCliente)(clientesAtualizados);
}
