// Importa biblioteca para ler dados do usuário pelo terminal
import * as readlineSync from "readline-sync";

// Função que pergunta ao usuário qual forma de pagamento ele deseja usar
export function escolherPagamento(): string {
  // Lista de opções de pagamento disponíveis
  const formas = ["Dinheiro", "Cartão", "PIX"];
  // Mostra as opções e pede para o usuário escolher
  const escolha = readlineSync.keyInSelect(formas, "Escolha a forma de pagamento:");
  // Retorna a opção escolhida ou "Dinheiro" se cancelar
  return formas[escolha] || "Dinheiro";
}