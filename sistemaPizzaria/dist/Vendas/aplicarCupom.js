"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicarCupom = aplicarCupom;
function aplicarCupom(total, cupom) {
    if (cupom.trim().toUpperCase() === "EDUTOP10") {
        console.log("Cupom válido! 15% de desconto aplicado.");
        return total * 0.85;
    }
    console.log("Cupom inválido ou não aplicado.");
    return total;
}
