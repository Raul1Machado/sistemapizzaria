
// Função que aplica o cupom de desconto ao valor total, se for válido
export function aplicarCupom(total: number, cupom: string): number {
  // Se o cupom for válido, aplica 15% de desconto
  if (cupom.trim().toUpperCase() === "EDUTOP10") {
    console.log("Cupom válido! 15% de desconto aplicado.");
    return total * 0.85;
  }
  // Se o cupom não for válido, não aplica desconto
  console.log("Cupom inválido ou não aplicado.");
  return total;
}
