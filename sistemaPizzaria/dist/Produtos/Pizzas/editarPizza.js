"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarPizza = editarPizza;
const salvarPizza_1 = require("./salvarPizza");
const lerPizza_1 = require("./lerPizza");
const readline_sync_1 = __importDefault(require("readline-sync"));
function editarPizza() {
    const todasPizzas = (0, lerPizza_1.lerPizza)();
    //perguntando o numero para editar
    const pizzaEditar = readline_sync_1.default.questionInt("Digite o numero do produto que deseja editar: ");
    //localizando o numero desejado e armazenando todos os seus atributos em uma variavel
    const pizzaLocalizada = todasPizzas.find(c => c.id === pizzaEditar);
    //se não achar esse numero de pizza
    if (!pizzaLocalizada) {
        console.log("Pizza não encontrada!");
        return;
    }
    console.log("Pizza localizada!");
    console.log("Alterando: ");
    console.log("..caso não queira mudar a infomação só dexar em branco..");
    //perguntando as novas informações caso não digite nasa o OU irá entrar em ação 
    // e considerar o valor original 
    const novaPizza = readline_sync_1.default.question("Nova Pizza: ") || pizzaLocalizada.pizza;
    const novoValor = readline_sync_1.default.questionFloat("Novo valor: ") || pizzaLocalizada.valor;
    pizzaLocalizada.pizza = novaPizza;
    pizzaLocalizada.valor = novoValor;
    //salvando as alterações
    (0, salvarPizza_1.salvarPizza)(todasPizzas);
    console.log("Edição completa!");
    console.log("");
    console.log(`ID: ${pizzaLocalizada.id} | Pizza: ${pizzaLocalizada.pizza} | Valor: ${pizzaLocalizada.valor.toFixed(2)}`);
}
