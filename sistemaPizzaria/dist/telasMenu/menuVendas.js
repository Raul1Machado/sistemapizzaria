"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuVendas = menuVendas;
const cadastrarPedido_1 = require("../Vendas/cadastrarPedido");
const listarPedidosSemanais_1 = require("../Vendas/listarPedidosSemanais");
const listarPedidosMensais_1 = require("../Vendas/listarPedidosMensais");
const readlineSync = __importStar(require("readline-sync"));
function menuVendas() {
    let loop = true;
    while (loop) {
        console.clear();
        console.log("\n=== MENU VENDAS ===");
        console.log("1 - Cadastrar Pedido");
        console.log("2 - Relatório Semanal");
        console.log("3 - Relatório Mensal");
        console.log("4 - Voltar ao menu principal\n");
        const escolha = readlineSync.questionInt("Escolha uma opção: ");
        switch (escolha) {
            case 1:
                (0, cadastrarPedido_1.cadastrarPedidoInteractive)();
                break;
            case 2:
                (0, listarPedidosSemanais_1.listarPedidosSemanais)();
                break;
            case 3:
                (0, listarPedidosMensais_1.listarPedidosMensais)();
                break;
            case 4:
                loop = false;
                break;
            default:
                console.log("Opção inválida!");
        }
        if (loop) {
            console.log("\nAperte qualquer tecla para continuar...");
            readlineSync.question("");
        }
    }
}
