//tranformando as informações contidas no banco de pizzas em objeto
// string -> array

import * as fs from "fs";
import { Sobremesa }  from "../../telasMenu/menuSobremesa";


//criando a funçaõ com base na interface Sobremesa
export function lerSobremesa(): Sobremesa[] {
    //caso não exista o arquivo irá retornar vazio
    if(!fs.existsSync("./bancoDados/Produtos/sobremesas.json")){
        return[];
    }
    const leituraJSON = fs.readFileSync("./bancoDados/Produtos/sobremesas.json", "utf-8");
    return JSON.parse(leituraJSON);
}