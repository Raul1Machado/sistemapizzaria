import readlineSync from "readline-sync";
import { adicionarPizza } from "../Produtos/Pizzas/adicionarPizza";
import { editarPizza } from "../Produtos/Pizzas/editarPizza";
import { excluirPizza } from "../Produtos/Pizzas/excluirPizza";
import { mostrarPizza } from "../Produtos/Pizzas/mostrarPizza";
import { mostrarPizzaProcurada } from "../Produtos/Pizzas/procurarPizza";


//definindo os tipos primitivos de pizza
export interface Pizza{
    id: number;
    pizza: string;
    valor: number;
}


let loop = true;

//criando o menu de produtos
export function menuPizza(){
    console.log("\n---PIZZAS---");
    console.log(" 1 - Mostrar pizzas");
    console.log(" 2 - Adicionar pizza");
    console.log(" 3 - Procurar pizza");
    console.log(" 4 - Editar pizza");
    console.log(" 5 - Excluir pizza");
    console.log(" 6 - Voltar\n")

    const escolha = readlineSync.questionInt("Digie a opcao: ");

    switch(escolha){
            case 1: 
                mostrarPizza();
            break;
    
            case 2: 
                adicionarPizza();
            break;
    
            case 3:
                mostrarPizzaProcurada();
            break;
    
            case 4:
               editarPizza();
            break;

            case 5:
              excluirPizza();
            break;

            case 6:
                console.log("Finalizando...");
                loop = false;
            break;
    }
    //enquanto a condição menu for atendida irá char a função menuPr
    while(loop){
            menuPizza();
        }
}

