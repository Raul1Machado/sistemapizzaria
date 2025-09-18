import { lerPizza} from "./lerPizza";
import readlineSync from "readline-sync";
import { procurarPizza} from "./procurarPizza";
import { salvarPizza } from "./salvarPizza";



export function excluirPizza(){
    //armazenando todos valores
    const todasPizzas = lerPizza();
    //procurando o id para excluir
    console.log("Digite o ID da pizza que deseja excluir: ");
    const pizzaExcluir = procurarPizza();

    //se não localizar
    if (!pizzaExcluir) {
        console.log("Pizza não encontrada!");
        return;
    }

    console.log("");
    console.log("Localizado...excluindo...");

    //criar uma nova lista sem o id desejado
    const pizzaAutualizada = todasPizzas.filter(c => c.id !== pizzaExcluir.id);
    
    salvarPizza(pizzaAutualizada);
}