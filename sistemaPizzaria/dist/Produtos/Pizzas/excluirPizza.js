"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirPizza = excluirPizza;
const lerPizza_1 = require("./lerPizza");
const procurarPizza_1 = require("./procurarPizza");
const salvarPizza_1 = require("./salvarPizza");
function excluirPizza() {
    //armazenando todos valores
    const todasPizzas = (0, lerPizza_1.lerPizza)();
    //procurando o id para excluir
    console.log("Digite o ID da pizza que deseja excluir: ");
    const pizzaExcluir = (0, procurarPizza_1.procurarPizza)();
    //se não localizar
    if (!pizzaExcluir) {
        console.log("Pizza não encontrada!");
        return;
    }
    console.log("");
    console.log("Localizado...excluindo...");
    //criar uma nova lista sem o id desejado
    const pizzaAutualizada = todasPizzas.filter(c => c.id !== pizzaExcluir.id);
    (0, salvarPizza_1.salvarPizza)(pizzaAutualizada);
}
