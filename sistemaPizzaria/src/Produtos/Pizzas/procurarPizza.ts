//criando ua função para lozalizar qualque pizza através de seu número

import readlineSync from "readline-sync";
import { lerPizza } from "./lerPizza";

export function procurarPizza(){
    //salvando tudo que tem no banco
    const todasPizzas = lerPizza();
    //perguntar o número da pizza procurada
    const pizzaProcurada = readlineSync.questionInt("Numero do produto: ");
    //armazena o produto procurado com base no numero do produto
    const pizza = todasPizzas.find(c => c.id === pizzaProcurada);

    //se não achar esse numero
    if(!pizza){
        console.log("Pizza não encontrada!");
        return;
    }

    return pizza;
} 

export function mostrarPizzaProcurada(){
    const pizza = procurarPizza();

    if(!pizza) return;

    console.log("\n..Localizado!...") 
    console.log(`Numero: ${pizza.id} | Pizza: ${pizza.pizza} | Valor: ${pizza.valor.toFixed(2)}`);   
}