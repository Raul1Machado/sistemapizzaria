"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarPedidosSemanais = listarPedidosSemanais;
// Importa funcao para listar todos os pedidos salvos
const salvarPedido_1 = require("./salvarPedido");
// Funcao que mostra o relatorio dos pedidos feitos na ultima semana
function listarPedidosSemanais() {
    // Busca todos os pedidos
    const pedidos = (0, salvarPedido_1.listarPedidos)();
    // Pega a data de hoje
    const hoje = new Date();
    // Calcula a data de uma semana atras
    const semanaPassada = new Date();
    semanaPassada.setDate(hoje.getDate() - 7);
    // Filtra os pedidos feitos nos ultimos 7 dias
    const pedidosSemana = pedidos.filter((p) => new Date(p.data) >= semanaPassada);
    // Soma o valor total dos pedidos da semana
    const total = pedidosSemana.reduce((acc, p) => acc + p.total, 0);
    // Mostra o relatorio no terminal
    console.log("=== RELATORIO SEMANAL ===");
    pedidosSemana.forEach((p) => console.log(`${p.data} - R$ ${p.total.toFixed(2)}`));
    console.log(`Total semanal: R$ ${total.toFixed(2)}`);
}
