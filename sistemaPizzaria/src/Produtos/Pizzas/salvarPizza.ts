// função para salvar as pizzas no banco de dados
// salva os arrays e tranforma em string
// array -> string

// importando o módulo fs para possibilitar a navegação entre aquivos
import * as fs from "fs";
import { Pizza } from "../../telasMenu/menuPizza";

export function salvarPizza(pizza: Pizza[]){
    fs.writeFileSync("./bancoDados/Produtos/pizzas.json", JSON.stringify(pizza, null, 2));
}