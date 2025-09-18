//tranformando as informações contidas no banco de bebidas em objeto
// string -> array

import * as fs from "fs";
import { Bebida}  from "../../telasMenu/menuBebida";


//criando a funçaõ com base na interface Bebida
export function lerBebida(): Bebida[] {
    //caso não exista o arquivo irá retornar vazio
    if(!fs.existsSync("./bancoDados/Produtos/bebidas.json")){
        return[];
    }
    const leituraJSON = fs.readFileSync("./bancoDados/Produtos/bebidas.json", "utf-8");
    return JSON.parse(leituraJSON);
}