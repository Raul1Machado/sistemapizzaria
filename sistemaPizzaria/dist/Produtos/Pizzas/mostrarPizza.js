"use strict";
//função para mostrar todos as pizzas do banco
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarPizza = mostrarPizza;
const lerPizza_1 = require("./lerPizza");
function mostrarPizza() {
    //criando a var que irá armazenar toodas as pizzas
    const todasPizzas = (0, lerPizza_1.lerPizza)();
    console.log("");
    //para cada elemento dentro de pizzas
    //ele vai passar por cada atributo dele
    todasPizzas.forEach(c => {
        console.log(`ID: ${c.id} | Pizza: ${c.pizza} | Valor: ${c.valor.toFixed(2)}`);
    });
}
