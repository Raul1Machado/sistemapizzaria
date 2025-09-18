//tranformando as informações contidas no banco de pizzas em objeto
// string -> array

import * as fs from "fs";
import { Pizza }  from "../../telasMenu/menuPizza";


//criando a funçaõ com base na interface Cliente
export function lerPizza(): Pizza[] {
    //caso não exista o arquivo irá retornar vazio
    if(!fs.existsSync("./bancoDados/Produtos/pizzas.json")){
        return[];
    }
    const leituraJSON = fs.readFileSync("./bancoDados/Produtos/pizzas.json", "utf-8");
    return JSON.parse(leituraJSON);
}