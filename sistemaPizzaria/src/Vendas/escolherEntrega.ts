// Importa biblioteca para ler dados do usuário pelo terminal
import * as readlineSync from "readline-sync";

// Função que pergunta ao usuário qual tipo de entrega ele deseja
export function escolherEntrega(): string {
  // Lista de opções de entrega disponíveis
  const opcoes = ["Retirada", "Delivery"];
  // Mostra as opções e pede para o usuário escolher
  const escolha = readlineSync.keyInSelect(opcoes, "Escolha o tipo de entrega:");
  // Retorna a opção escolhida ou "Retirada" se cancelar
  return opcoes[escolha] || "Retirada";
}