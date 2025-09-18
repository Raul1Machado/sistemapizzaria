"use strict";
//função para mostrar todos os clientes
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarCliente = mostrarCliente;
const lerCliente_1 = require("./lerCliente");
function mostrarCliente() {
    //criando a var que irá armazenar todos os clientes
    const todosClientes = (0, lerCliente_1.lerCliente)();
    //para cada elemento dentro de clientes
    //ele vai passar por cada atributo dele
    todosClientes.forEach(c => {
        console.log(`Nome: ${c.nome} | CPF: ${c.cpf} | Tel: ${c.telefone}`);
    });
}
