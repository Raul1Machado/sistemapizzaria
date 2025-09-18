import * as fs from "fs";
import * as path from "path";

const pedidosPath = path.join(__dirname, "pedidos.json");


export interface Pedido {
  clienteCPF: string;
  produtos: { nome: string; preco: number; quantidade: number }[];
  total: number;
  pagamento: string;
  entrega: string;
  data: string;
}

/**
 * Função simples para salvar um pedido em arquivo JSON.
 * Se o arquivo já existir, adiciona o pedido; caso contrário, cria um novo array.
 */
function salvar(arquivo: string, pedido: Pedido) {
  let pedidos: Pedido[] = [];

  // Lê pedidos existentes, se houver
  if (fs.existsSync(arquivo)) {
    const conteudo = fs.readFileSync(arquivo, "utf8");
    pedidos = JSON.parse(conteudo);
  }

  // Adiciona o novo pedido
  pedidos.push(pedido);

  // Salva de volta no arquivo JSON
  fs.writeFileSync(arquivo, JSON.stringify(pedidos, null, 2), "utf-8");
}

// Função pública para salvar um pedido
export function salvarPedido(pedido: Pedido) {
  salvar(pedidosPath, pedido);
}

// Lista todos os pedidos
export function listarPedidos(): Pedido[] {
  if (!fs.existsSync(pedidosPath)) return [];
  return JSON.parse(fs.readFileSync(pedidosPath, "utf8"));
}
