// função para adicionar novas pizzas

import readlineSync from "readline-sync";

import { Pizza } from "../../telasMenu/menuPizza";
import { lerPizza } from "./lerPizza";
import { salvarPizza} from "./salvarPizza";


//criando a função para adicionar novos sabores de pizza
export function adicionarPizza(){

    // vai ler todas pizzas já salvas 
    const todasPizzas = lerPizza();

    //criando o numero do produto com base nos que já tem 
    const numero = todasPizzas.length > 0 ? Math.max(...todasPizzas.map(p => p.id)) + 1 : 1;
    //pedindo as informações a serem adicionadas
    const novaPizza = readlineSync.question("Sabor de pizza: ");
    const novoValor = readlineSync.questionFloat("Valor: ");

    
    // essas informações serão adicionadas na lista pizza
    todasPizzas.push({
        id: numero,
        pizza: novaPizza,
        valor: novoValor,
    });

    //salvando 
    salvarPizza(todasPizzas);

}
