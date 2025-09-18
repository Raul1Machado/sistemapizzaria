// função para adicionar novas sobremesas

import readlineSync from "readline-sync";

import { Pizza } from "../../telasMenu/menuPizza";
import { lerSobremesa } from "./lerSobremesa";
import { salvarSobremesa} from "./salvarSobremesa";


//criando a função para adicionar novas sobremesas
export function adicionarSobremesa(){

    // vai ler todas sobremesas já salvas 
    const todasSobremesas = lerSobremesa();

    //criando o numero do produto com base nos que já tem 
    const numero = todasSobremesas.length > 0 ? Math.max(...todasSobremesas.map(s => s.id)) + 1 : 1;
    //pedindo as informações a serem adicionadas
    const novaSobremesa = readlineSync.question("Sobremesa: ");
    const novoValor = readlineSync.questionFloat("Valor: ");

    
    // essas informações serão adicionadas na lista pizza
    todasSobremesas.push({
        id: numero,
        sobremesa: novaSobremesa,
        valor: novoValor,
    });

    //salvando 
    salvarSobremesa(todasSobremesas);

}
