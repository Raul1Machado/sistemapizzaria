import { listarPedidos } from "./salvarPedido";

export function listarPedidosMensais() {
  const pedidos = listarPedidos();
  const hoje = new Date();
  const mesAtual = hoje.getMonth();
  const anoAtual = hoje.getFullYear();

  const pedidosMes = pedidos.filter((p) => {
    const data = new Date(p.data);
    return data.getMonth() === mesAtual && data.getFullYear() === anoAtual;
  });

  const total = pedidosMes.reduce((acc, p) => acc + p.total, 0);

  console.log("=== RELATÓRIO MENSAL ===");
  pedidosMes.forEach((p) => {
    console.log(`${p.data} - R$ ${p.total.toFixed(2)}`);
    p.produtos.forEach(prod => {
      console.log(`   ${prod.nome} x${prod.quantidade} = R$ ${(prod.preco * prod.quantidade).toFixed(2)}`);
    });
  });
  console.log(`Total mensal: R$ ${total.toFixed(2)}`);
}