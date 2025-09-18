import readlineSync from "readline-sync";
import { adicionarCliente } from "../Clientes/adicionarCliente";
import { mostrarCliente } from "../Clientes/mostrarCliente";
import { mostrarClienteProcurado, procurarCliente } from "../Clientes/procurarCliente";
import { editarCliente } from "../Clientes/editarCliente";
import { excluirCliente } from "../Clientes/excluirCliente";


export interface Clientes{
    nome: string;
    cpf: number;
    telefone: string;
}

let loop: boolean = true;

export function menuClientes(){

    console.log("\n-- CLIENTES --");
    console.log(" 1 - Mostrar clientes");
    console.log(" 2 - Adicionar cliente");
    console.log(" 3 - Procurar cliente");
    console.log(" 4 - Editar cliente");
    console.log(" 5 - Excluir cliente");
    console.log(" 6 - Voltar\n");

    const escolha = readlineSync.questionInt("Digite a opcao: ");

    switch(escolha){
        case 1: 
            mostrarCliente();
        break;

        case 2: 
            adicionarCliente();
        break;

        case 3:
            console.log("Digite o CPF que deseja procurar: ")
            mostrarClienteProcurado();
        break;

        case 4:
            editarCliente();
        break;

        case 5:
            excluirCliente();
        break;

        case 6:
            loop = false;
        break;

        }
        while(loop){
            menuClientes();
            }
    }
