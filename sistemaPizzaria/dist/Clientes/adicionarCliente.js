"use strict";
// função para adicionar novos clientes
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarCliente = adicionarCliente;
const readline_sync_1 = __importDefault(require("readline-sync"));
const lerCliente_1 = require("./lerCliente");
const salvarCliente_1 = require("./salvarCliente");
//criando a função para adicionar novos clientes
function adicionarCliente() {
    // vai ler os clientes já salvos 
    const todosClientes = (0, lerCliente_1.lerCliente)();
    //pedindo as informações a serem adicionadas
    const novoNome = readline_sync_1.default.question("Nome: ");
    const novoCPF = readline_sync_1.default.questionInt("CPF: ");
    const novoTelefone = readline_sync_1.default.question("Telefone: ");
    // essas informações serão adicionadas na lista cliente
    todosClientes.push({
        nome: novoNome,
        cpf: novoCPF,
        telefone: novoTelefone,
    });
    (0, salvarCliente_1.salvarCliente)(todosClientes);
}
