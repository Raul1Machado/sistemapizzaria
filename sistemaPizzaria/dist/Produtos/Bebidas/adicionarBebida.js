"use strict";
// função para adicionar novas bebidas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarBebida = adicionarBebida;
const readline_sync_1 = __importDefault(require("readline-sync"));
const lerBebida_1 = require("./lerBebida");
const salvarBebida_1 = require("./salvarBebida");
//criando a função para adicionar novas bebidas
function adicionarBebida() {
    // vai ler todas sobremesas já salvas 
    const todasBebidas = (0, lerBebida_1.lerBebida)();
    //criando o numero do produto com base nos que já tem 
    const numero = todasBebidas.length > 0 ? Math.max(...todasBebidas.map(b => b.id)) + 1 : 1;
    //pedindo as informações a serem adicionadas
    const novaSobremesa = readline_sync_1.default.question("Bebida: ");
    const novoValor = readline_sync_1.default.questionFloat("Valor: ");
    // essas informações serão adicionadas na lista pizza
    todasBebidas.push({
        id: numero,
        bebida: novaSobremesa,
        valor: novoValor,
    });
    //salvando 
    (0, salvarBebida_1.salvarBebida)(todasBebidas);
}
