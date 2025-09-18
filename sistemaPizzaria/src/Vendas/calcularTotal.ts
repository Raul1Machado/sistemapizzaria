export function calcularTotal(produtos: { nome: string; preco: number; quantidade: number }[], cupom?: string): number {
  const subtotal = produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
  if (cupom && cupom.trim().toUpperCase() === "EDUTOP10") {
    return subtotal * 0.85;
  }
  return subtotal;
}