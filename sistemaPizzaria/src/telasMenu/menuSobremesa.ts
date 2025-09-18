import readlineSync from "readline-sync";
import { mostrarSobremesaProcurada } from "../Produtos/Sobremesas/procurarSobremesa";
import { mostrarSobremesa } from "../Produtos/Sobremesas/mostrarSobremesa";
import { adicionarSobremesa } from "../Produtos/Sobremesas/adicionarSobremesa";
import { editarSobremesa } from "../Produtos/Sobremesas/editarSobremesa";
import { excluirSobremesa } from "../Produtos/Sobremesas/excluirSobremesa";




//definindo os tipos primitivos de sobremesa
export interface Sobremesa{
    id: number;
    sobremesa: string;
    valor: number;
}



let loop = true;

//criando o menu de sobremesas
export function menuSobremesa(){
    console.log("\n---SOBREMESAS---");
    console.log("1 - Mostrar sobremesas");
    console.log("2 - Adicionar sobremesa");
    console.log("3 - Procurar sobremesa");
    console.log("4 - Editar sobremesa");
    console.log("5 - Excluir sobremesa");
    console.log("6 - Voltar\n")

    const escolha = readlineSync.questionInt("Digie a opcao: ");

    switch(escolha){
            case 1: 
                mostrarSobremesa();
            break;
    
            case 2: 
                adicionarSobremesa();
            break;
    
            case 3:
                mostrarSobremesaProcurada();
            break;
    
            case 4:
               editarSobremesa();
            break;

            case 5:
              excluirSobremesa();
            break;

            case 6:
                console.log("Finalizando...");
                loop = false;
            break;
    }
    //enquanto a condição menu for atendida irá char a função menu
    while(loop){
            menuSobremesa();
    }
}

