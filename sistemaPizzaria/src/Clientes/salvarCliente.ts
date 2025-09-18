// função para salvar os clientes no banco de dados
// salva os arrays e tranforma em string
// array -> string

// importando o módulo fs para possibilitar a navegação entre aquivos
import * as fs from "fs";
import { Clientes } from "../telasMenu/menuCliente";

export function salvarCliente(clientes: Clientes[]){
    fs.writeFileSync("./bancoDados/cadastroClientes.json", JSON.stringify(clientes, null, 2));
}