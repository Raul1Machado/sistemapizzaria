"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarPedidosSemanais = listarPedidosSemanais;
const salvarPedido_1 = require("./salvarPedido");
function listarPedidosSemanais() {
    const pedidos = (0, salvarPedido_1.listarPedidos)();
    const hoje = new Date();
    const semanaPassada = new Date();
    semanaPassada.setDate(hoje.getDate() - 7);
    const pedidosSemana = pedidos.filter((p) => new Date(p.data) >= semanaPassada);
    const total = pedidosSemana.reduce((acc, p) => acc + p.total, 0);
    console.log("=== RELATÓRIO SEMANAL ===");
    pedidosSemana.forEach((p) => console.log(`${p.data} - R$ ${p.total.toFixed(2)}`));
    console.log(`Total semanal: R$ ${total.toFixed(2)}`);
}
