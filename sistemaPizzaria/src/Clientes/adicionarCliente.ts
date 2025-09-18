// função para adicionar novos clientes



import readlineSync from "readline-sync";

import { Clientes } from "../telasMenu/menuCliente";
import { lerCliente } from "./lerCliente";
import { salvarCliente } from "./salvarCliente";


//criando a função para adicionar novos clientes
export function adicionarCliente(){

    // vai ler os clientes já salvos 
    const todosClientes = lerCliente();

    //pedindo as informações a serem adicionadas
    const novoNome = readlineSync.question("Nome: ");
    const novoCPF = readlineSync.questionInt("CPF: ");
    const novoTelefone = readlineSync.question("Telefone: ");

    
    // essas informações serão adicionadas na lista cliente
    todosClientes.push({
        nome: novoNome,
        cpf: novoCPF,
        telefone: novoTelefone,
    });

    salvarCliente(todosClientes);

}
