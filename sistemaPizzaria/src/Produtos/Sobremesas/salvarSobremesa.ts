// função para salvar as sobremesas no banco de dados
// salva os arrays e tranforma em string
// array -> string

// importando o módulo fs para possibilitar a navegação entre aquivos
import * as fs from "fs";
import { Sobremesa } from "../../telasMenu/menuSobremesa";

export function salvarSobremesa(sobremesa: Sobremesa[]){
    fs.writeFileSync("./bancoDados/Produtos/sobremesas.json", JSON.stringify(sobremesa, null, 2));
}