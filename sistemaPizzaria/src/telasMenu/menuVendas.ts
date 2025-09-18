import { cadastrarPedidoInteractive } from "../Vendas/cadastrarPedido";
import { listarPedidosSemanais } from "../Vendas/listarPedidosSemanais";
import { listarPedidosMensais } from "../Vendas/listarPedidosMensais";
import * as readlineSync from "readline-sync";

export function menuVendas() {
    let loop = true;

    while(loop) {
        console.clear();
        console.log("\n=== MENU VENDAS ===");
        console.log("1 - Cadastrar Pedido");
        console.log("2 - Relatório Semanal");
        console.log("3 - Relatório Mensal");
        console.log("4 - Voltar ao menu principal\n");

        const escolha = readlineSync.questionInt("Escolha uma opção: ");

        switch(escolha) {
            case 1:
                cadastrarPedidoInteractive();
                break;
            case 2:
                listarPedidosSemanais();
                break;
            case 3:
                listarPedidosMensais();
                break;
            case 4:
                loop = false;
                break;
            default:
                console.log("Opção inválida!");
        }

        if(loop) {
            console.log("\nAperte qualquer tecla para continuar...");
            readlineSync.question("");
        }
    }
}
