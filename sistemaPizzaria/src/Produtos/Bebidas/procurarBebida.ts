//criando ua função para lozalizar qualquer bebida através de seu número

import readlineSync from "readline-sync";
import { lerBebida } from "./lerBebida";

export function procurarBebida(){
    //salvando tudo que tem no banco
    const todasBebidas = lerBebida();
    //perguntar o número da bebida procurada
    const bebidaProcurada = readlineSync.questionInt("Numero do produto: ");
    //armazena o produto procurado com base no numero do produto
    const bebida = todasBebidas.find(b => b.id === bebidaProcurada);

    if(!bebida){
        console.log("Código inválido!");
        return;
    }
    console.log("Produto selecionado!");
    return bebida;
} 


//criando uma função para mostrar qual o item procurado
export function mostrarBebidaProcurada(){
    const bebida = procurarBebida();

    if(!bebida) return;

    console.log("\n...Localizado!...") 
    console.log(`ID: ${bebida.id} | ${bebida.bebida} | Valor: ${bebida.valor.toFixed(2)}`);   
}