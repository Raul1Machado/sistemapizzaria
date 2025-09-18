import { mostrarPizza} from "../Produtos/Pizzas/mostrarPizza";
import { mostrarBebida } from "./Bebidas/mostrarBebida";
import { mostrarSobremesa } from "./Sobremesas/mostrarSobremesa";

export function todosProdutos(){
    console.log("");
    console.log("---PIZZAS---");
    mostrarPizza();
    console.log("\n---BEBIDAS---");
    mostrarBebida();
    console.log("\n---SOBREMESAS---");
}