// função para salvar as bebidas no banco de dados
// salva os arrays e tranforma em string
// array -> string

// importando o módulo fs para possibilitar a navegação entre aquivos
import * as fs from "fs";
import { Bebida } from "../../telasMenu/menuBebida";

export function salvarBebida(bebida: Bebida[]){
    fs.writeFileSync("./bancoDados/Produtos/bebidas.json", JSON.stringify(bebida, null, 2));
}