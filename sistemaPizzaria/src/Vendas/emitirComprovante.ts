import * as fs from "fs";
import * as path from "path";
import { Pedido } from "./salvarPedido";

export function emitirComprovante(pedido: Pedido) {
  // Pasta Vendas/comprovantes
  const comprovanteDir = path.join(__dirname, "comprovantes");
  
  // Cria a pasta caso não exista
  if (!fs.existsSync(comprovanteDir)) {
    fs.mkdirSync(comprovanteDir, { recursive: true });
  }

  // Nome do arquivo: CPF + timestamp
  const arquivo = path.join(
    comprovanteDir,
    `comprovante_${pedido.clienteCPF}_${Date.now()}.txt`
  );

  const conteudo = `\n=== COMPROVANTE DE PEDIDO ===\n
Cliente (CPF): ${pedido.clienteCPF}\n
Produtos:\n${pedido.produtos
    .map((p) => ` - ${p.nome} x${p.quantidade} = R$ ${(p.preco * p.quantidade).toFixed(2)}`)
    .join("\n")}\n
Total: R$ ${pedido.total.toFixed(2)}\n
Pagamento: ${pedido.pagamento}\nEntrega: ${pedido.entrega}\nData: ${pedido.data}\n`;

  fs.writeFileSync(arquivo, conteudo, "utf8");
  console.log(`Comprovante gerado em: ${arquivo}`);
}
