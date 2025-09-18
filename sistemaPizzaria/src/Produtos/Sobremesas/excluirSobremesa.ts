
import { lerSobremesa} from "./lerSobremesa";
import readlineSync from "readline-sync";
import { procurarSobremesa} from "./procurarSobremesa";
import { salvarSobremesa } from "./salvarSobremesa";



export function excluirSobremesa(){
    //armazenando todos valores
    const todasSobremesas = lerSobremesa();
    //procurando o id para excluir
    console.log("Digite o ID da sobremesa que deseja excluir: ");
    const sobremesaExcluir = procurarSobremesa();

    //se não localizar
    if (!sobremesaExcluir) {
        console.log("Sobremesa não encontrada!");
        return;
    }

    console.log("");
    console.log("Localizado...excluindo...");

    //criar uma nova lista sem o id desejado
    const sobremesaAutualizada = todasSobremesas.filter(s => s.id !== sobremesaExcluir.id);
    
    salvarSobremesa(sobremesaAutualizada);
}