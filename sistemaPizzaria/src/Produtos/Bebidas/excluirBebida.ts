
import { lerBebida} from "./lerBebida";
import readlineSync from "readline-sync";
import { procurarBebida} from "./procurarBebida";
import { salvarBebida } from "./salvarBebida";



export function excluirBebida(){
    //armazenando todos valores
    const todasBebidas = lerBebida();
    //procurando o id para excluir
    console.log("Digite o ID da sobremesa que deseja excluir: ");
    const bebidaExcluir = procurarBebida();

    //se não localizar
    if (!bebidaExcluir) {
        console.log("Bebida não encontrada!");
        return;
    }

    console.log("");
    console.log("Localizado...excluindo...");

    //criar uma nova lista sem o id desejado
    const bebidaAutualizada = todasBebidas.filter(b => b.id !== bebidaExcluir.id);
    
    salvarBebida(bebidaAutualizada);
}