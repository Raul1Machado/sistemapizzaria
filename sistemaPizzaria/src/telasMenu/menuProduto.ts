// menu produtos

import readlineSync from "readline-sync";

import { menuPizza } from "../telasMenu/menuPizza";
import { menuBebida } from "./menuBebida";
import { menuSobremesa } from "./menuSobremesa";
import { todosProdutos } from "../Produtos/todosProdutos";

//definindo uma varíavel para controlar o loop
let loop = true;

//criando o menu de produtos
export function menuProdutos(){
    console.log("\n---PRODUTOS---");
    console.log(" 1 - Mostrar todos produtos");
    console.log(" 2 - Pizzas");
    console.log(" 3 - Bebidas");
    console.log(" 4 - Sobremesas");
    console.log(" 5 - Voltar\n");

    const escolha = readlineSync.questionInt("Digie a opcao: ");

    switch(escolha){
            case 1: 
                todosProdutos();
            break;
    
            case 2: 
                menuPizza();
            break;
    
            case 3:
                menuBebida();
            break;
    
            case 4:
                menuSobremesa();
            break;

            case 5:
                console.log("Finalizando...");
                loop = false;
            break;
    }
    //enquanto a condição menu for atendida irá char a função menuProdut
    while(loop){
            menuProdutos();
        }
}

