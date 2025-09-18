"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTotal = calcularTotal;
function calcularTotal(produtos, cupom) {
    const subtotal = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
    if (cupom && cupom.trim().toUpperCase() === "EDUTOP10") {
        return subtotal * 0.85;
    }
    return subtotal;
}
