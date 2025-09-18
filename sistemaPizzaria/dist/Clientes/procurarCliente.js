"use strict";
//criando ua função para procurar qualquer cliente através do cpf
Object.defineProperty(exports, "__esModule", { value: true });
exports.procurarCliente = procurarCliente;
exports.mostrarClienteProcurado = mostrarClienteProcurado;
const lerCliente_1 = require("./lerCliente");
function procurarCliente(cpf) {
    const todosClientes = (0, lerCliente_1.lerCliente)();
    // Garante que o CPF seja string para comparação
    const cpfStr = String(cpf);
    const cliente = todosClientes.find(c => String(c.cpf) === cpfStr);
    if (!cliente) {
        return null;
    }
    return cliente;
}
function mostrarClienteProcurado() {
    const cpf = require("readline-sync").question("CPF: ");
    const cliente = procurarCliente(cpf);
    if (!cliente)
        return;
    console.log("\n...Localizado!...");
    console.log(`Nome: ${cliente.nome} | CPF: ${cliente.cpf} | Telefone: ${cliente.telefone}`);
}
