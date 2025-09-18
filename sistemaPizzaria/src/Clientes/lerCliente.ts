//tranformando as informações contidas no banco de cliente em objeto
// string -> array

import * as fs from "fs";
import { Clientes } from "../telasMenu/menuCliente";

//criando a funçaõ com base na interface Cliente
export function lerCliente(): Clientes[] {
    //caso não exista o arquivo irá retornar vazio
    if(!fs.existsSync("./bancoDados/cadastroClientes.json")){
        return[];
    }
    const leituraJSON = fs.readFileSync("./bancoDados/cadastroClientes.json", "utf-8");
    return JSON.parse(leituraJSON);
}