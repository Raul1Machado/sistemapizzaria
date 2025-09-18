import { lerCliente } from "./lerCliente";
import readlineSync from "readline-sync";
import { procurarCliente } from "./procurarCliente";
import { salvarCliente } from "./salvarCliente";



export function excluirCliente(){
    //armazenando todos valores
    const todosClientes = lerCliente();
    //procurando o cpf para excluir
    const cpf = readlineSync.question("Digite o CPF do cliente que deseja excluir: ");
    const clienteExcluir = procurarCliente(cpf);

    //se nao localizar
    if (!clienteExcluir) {
        console.log("Cliente nao encontrado!");
        return;
    }

    console.log("Localizado...excluindo...");

    //criar uma nova lista sem o cpf desejado
    const clientesAtualizados = todosClientes.filter(c => c.cpf !== clienteExcluir.cpf);
    salvarCliente(clientesAtualizados);
}