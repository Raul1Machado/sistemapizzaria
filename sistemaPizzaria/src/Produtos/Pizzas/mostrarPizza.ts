//função para mostrar todos as pizzas do banco

import { lerPizza } from "./lerPizza";


export function mostrarPizza(){
    //criando a var que irá armazenar toodas as pizzas
    const todasPizzas =  lerPizza();
    console.log("");
        //para cada elemento dentro de pizzas
        //ele vai passar por cada atributo dele
        todasPizzas.forEach(c =>{
            console.log(`ID: ${c.id} | Pizza: ${c.pizza} | Valor: ${c.valor.toFixed(2)}`);
        });
}