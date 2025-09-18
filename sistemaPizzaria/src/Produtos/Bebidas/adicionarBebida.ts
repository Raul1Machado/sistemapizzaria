// função para adicionar novas bebidas

import readlineSync from "readline-sync";

import { Bebida } from "../../telasMenu/menuBebida";
import { lerBebida } from "./lerBebida";
import { salvarBebida} from "./salvarBebida";


//criando a função para adicionar novas bebidas
export function adicionarBebida(){

    // vai ler todas sobremesas já salvas 
    const todasBebidas = lerBebida();

    //criando o numero do produto com base nos que já tem 
    const numero = todasBebidas.length > 0 ? Math.max(...todasBebidas.map(b => b.id)) + 1 : 1;
    //pedindo as informações a serem adicionadas
    const novaSobremesa = readlineSync.question("Bebida: ");
    const novoValor = readlineSync.questionFloat("Valor: ");

    
    // essas informações serão adicionadas na lista pizza
    todasBebidas.push({
        id: numero,
        bebida: novaSobremesa,
        valor: novoValor,
    });

    //salvando 
    salvarBebida(todasBebidas);

}
