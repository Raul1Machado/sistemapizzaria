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
exports.cadastrarPedidoInteractive = cadastrarPedidoInteractive;
const readlineSync = __importStar(require("readline-sync"));
const procurarCliente_1 = require("../Clientes/procurarCliente");
const procurarPizza_1 = require("../Produtos/Pizzas/procurarPizza");
const procurarBebida_1 = require("../Produtos/Bebidas/procurarBebida");
const procurarSobremesa_1 = require("../Produtos/Sobremesas/procurarSobremesa");
const calcularTotal_1 = require("./calcularTotal");
const escolherPagamento_1 = require("./escolherPagamento");
const escolherEntrega_1 = require("./escolherEntrega");
const salvarPedido_1 = require("./salvarPedido");
const emitirComprovante_1 = require("./emitirComprovante");
function cadastrarPedidoInteractive() {
    console.log("=== Cadastro de Pedido ===");
    const cpf = readlineSync.question("Digite o CPF do cliente: ");
    const cliente = (0, procurarCliente_1.procurarCliente)(cpf);
    if (!cliente) {
        console.log("Cliente nao encontrado!");
        return;
    }
    let produtos = [];
    while (true) {
        const categoria = readlineSync.keyInSelect(["Pizza", "Bebida", "Sobremesa", "Finalizar"], "Escolha uma categoria:");
        if (categoria === -1 || categoria === 3)
            break;
        // Exibe o catalogo de produtos da categoria escolhida
        if (categoria === 0) {
            require("../Produtos/Pizzas/mostrarPizza").mostrarPizza();
            console.log("Escolha o numero do produto pelo ID acima.");
        }
        if (categoria === 1) {
            require("../Produtos/Bebidas/mostrarBebida").mostrarBebida();
            console.log("Escolha o numero do produto pelo ID acima.");
        }
        if (categoria === 2) {
            require("../Produtos/Sobremesas/mostrarSobremesa").mostrarSobremesa();
            console.log("Escolha o numero do produto pelo ID acima.");
        }
        let produto = null;
        if (categoria === 0)
            produto = (0, procurarPizza_1.procurarPizza)();
        if (categoria === 1)
            produto = (0, procurarBebida_1.procurarBebida)();
        if (categoria === 2)
            produto = (0, procurarSobremesa_1.procurarSobremesa)();
        if (produto) {
            const quantidade = readlineSync.questionInt("Quantidade: ");
            let nomeProduto = "";
            if (categoria === 0)
                nomeProduto = produto.pizza;
            if (categoria === 1)
                nomeProduto = produto.bebida;
            if (categoria === 2)
                nomeProduto = produto.sobremesa;
            // Corrigir campo de preco se necessario
            const precoProduto = produto.preco ?? produto.valor;
            produtos.push({ nome: nomeProduto, preco: precoProduto, quantidade });
        }
    }
    let cupom = readlineSync.question("Deseja usar um cupom? (Digite o codigo ou Enter para nenhum): ");
    let total = Number((0, calcularTotal_1.calcularTotal)(produtos, cupom));
    let desconto = 0;
    if (cupom && cupom.trim().toUpperCase() === "EDUTOP10") {
        desconto = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0) * 0.15;
        console.log("Cupom valido! 15% de desconto aplicado.");
    }
    else if (cupom) {
        console.log("Cupom invalido ou nao reconhecido. Nenhum desconto aplicado.");
        cupom = "";
    }
    const pagamento = (0, escolherPagamento_1.escolherPagamento)();
    const entrega = (0, escolherEntrega_1.escolherEntrega)();
    const pedido = {
        clienteCPF: cpf,
        produtos,
        total,
        pagamento,
        entrega,
        data: new Date().toISOString(), // formato ISO, compativel com Date
        cupom: cupom || null,
        desconto: desconto,
    };
    (0, salvarPedido_1.salvarPedido)(pedido);
    (0, emitirComprovante_1.emitirComprovante)(pedido);
    console.log("Pedido cadastrado com sucesso!");
}
