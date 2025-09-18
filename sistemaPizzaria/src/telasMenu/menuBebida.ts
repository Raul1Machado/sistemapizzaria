import readlineSync from "readline-sync";
import { mostrarBebidaProcurada } from "../Produtos/Bebidas/procurarBebida";
import { mostrarBebida } from "../Produtos/Bebidas/mostrarBebida";
import { adicionarBebida } from "../Produtos/Bebidas/adicionarBebida";
import { excluirBebida } from "../Produtos/Bebidas/excluirBebida";
import { editarBebida } from "../Produtos/Bebidas/editarBebida";



//definindo os tipos primitivos de Bebidas
export interface Bebida{
    id: number;
    bebida: string;
    valor: number;
}

let loop = true;

//criando o menu de produtos
export function menuBebida(){
    console.log("\n---BEBIDAS---");
    console.log(" 1 - Mostrar bebidas");
    console.log(" 2 - Adicionar bebida");
    console.log(" 3 - Procurar bebida");
    console.log(" 4 - Editar bebida");
    console.log(" 5 - Excluir bebida");
    console.log(" 6 - Voltar\n")

    const escolha = readlineSync.questionInt("Digie a opcao: ");

    switch(escolha){
            case 1: 
                mostrarBebida();
            break;
    
            case 2: 
                adicionarBebida();
            break;
    
            case 3:
                mostrarBebidaProcurada();
            break;
    
            case 4:
                editarBebida();
            break;

            case 5:
                excluirBebida();
            break;

            case 6:
                console.log("Finalizando...");
                loop = false;
            break;
    }
    //enquanto a condição menu for atendida irá char a função menuPr
    while(loop){
            menuBebida();
        }
}

