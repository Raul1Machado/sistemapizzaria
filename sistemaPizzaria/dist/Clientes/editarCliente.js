"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarCliente = editarCliente;
const lerCliente_1 = require("./lerCliente");
const readline_sync_1 = __importDefault(require("readline-sync"));
const salvarCliente_1 = require("./salvarCliente");
function editarCliente() {
    //lendo tudo o que tenho
    const todosClientes = (0, lerCliente_1.lerCliente)();
    //perguntando o cpf para editar
    const cpfEditar = readline_sync_1.default.questionInt("Digite o CPF que deseja editar: ");
    //localizando o cpf desejado e armazenando todos os seus atributos em uma variavel
    const cpfLocalizado = todosClientes.find(c => c.cpf === cpfEditar);
    //se não achar esse cliente
    if (!cpfLocalizado) {
        console.log("Cliente não encontrado!");
        return;
    }
    console.log("CPF localizado!");
    console.log("Alterando: ");
    console.log("..caso não queira mudar a infomação só dexar em branco..");
    //perguntando as novas informações caso não digite nasa o OU irá entrar em ação 
    // e considerar o valor original 
    const novoNome = readline_sync_1.default.question("Novo nome: ") || cpfLocalizado.nome;
    const novoTelefone = readline_sync_1.default.question("Novo telefone: ") || cpfLocalizado.telefone;
    cpfLocalizado.nome = novoNome;
    cpfLocalizado.telefone = novoTelefone;
    //salvando as alterações
    (0, salvarCliente_1.salvarCliente)(todosClientes);
    console.log("Edição completa!");
    console.log(`Nome: ${cpfLocalizado.nome} | CPF: ${cpfLocalizado.cpf} | Telefone: ${cpfLocalizado.telefone}`);
}
