"use strict";
// função para adicionar novas sobremesas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarSobremesa = adicionarSobremesa;
const readline_sync_1 = __importDefault(require("readline-sync"));
const lerSobremesa_1 = require("./lerSobremesa");
const salvarSobremesa_1 = require("./salvarSobremesa");
//criando a função para adicionar novas sobremesas
function adicionarSobremesa() {
    // vai ler todas sobremesas já salvas 
    const todasSobremesas = (0, lerSobremesa_1.lerSobremesa)();
    //criando o numero do produto com base nos que já tem 
    const numero = todasSobremesas.length > 0 ? Math.max(...todasSobremesas.map(s => s.id)) + 1 : 1;
    //pedindo as informações a serem adicionadas
    const novaSobremesa = readline_sync_1.default.question("Sobremesa: ");
    const novoValor = readline_sync_1.default.questionFloat("Valor: ");
    // essas informações serão adicionadas na lista pizza
    todasSobremesas.push({
        id: numero,
        sobremesa: novaSobremesa,
        valor: novoValor,
    });
    //salvando 
    (0, salvarSobremesa_1.salvarSobremesa)(todasSobremesas);
}
