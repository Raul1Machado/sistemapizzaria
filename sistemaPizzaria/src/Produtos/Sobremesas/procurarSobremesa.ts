//criando ua função para lozalizar qualquer sobremesa através de seu número

import readlineSync from "readline-sync";
import { lerSobremesa } from "./lerSobremesa";

export function procurarSobremesa(){
    //salvando tudo que tem no banco
    const todaSobremesas = lerSobremesa();
    //perguntar o número da pizza procurada
    const sobremesaProcurada = readlineSync.questionInt("Numero do produto: ");
    //armazena o produto procurado com base no numero do produto
    const sobremesa = todaSobremesas.find(s => s.id === sobremesaProcurada);

    if(!sobremesa){
        console.log("Código inválido!");
        return;
    }
    console.log("Produto selecionado!");
    return sobremesa;
} 


//criando uma função para mostrar qual o item procurado
export function mostrarSobremesaProcurada(){
    const sobremesa = procurarSobremesa();

    if(!sobremesa) return;

    console.log("\n...Localizado!...") 
    console.log(`ID: ${sobremesa.id} | ${sobremesa.sobremesa} | Valor: ${sobremesa.valor.toFixed(2)}`);   
}