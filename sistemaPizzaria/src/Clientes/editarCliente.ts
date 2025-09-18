import { lerCliente } from "./lerCliente";
import readlineSync from "readline-sync";
import { salvarCliente } from "./salvarCliente";
import { procurarCliente } from "./procurarCliente";


export function editarCliente(){
    //lendo tudo o que tenho
    const todosClientes = lerCliente();

    //perguntando o cpf para editar
    const cpfEditar = readlineSync.questionInt("Digite o CPF que deseja editar: ");
    //localizando o cpf desejado e armazenando todos os seus atributos em uma variavel
    const cpfLocalizado =  todosClientes.find(c => c.cpf === cpfEditar);

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
    const novoNome = readlineSync.question("Novo nome: ")|| cpfLocalizado.nome;
    const novoTelefone = readlineSync.question("Novo telefone: ") || cpfLocalizado.telefone;

    cpfLocalizado.nome = novoNome;
    cpfLocalizado.telefone = novoTelefone;

    //salvando as alterações
    salvarCliente(todosClientes);

    console.log("Edição completa!");
    console.log(`Nome: ${cpfLocalizado.nome} | CPF: ${cpfLocalizado.cpf} | Telefone: ${cpfLocalizado.telefone}`);

}