"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarSobremesa = editarSobremesa;
const salvarSobremesa_1 = require("./salvarSobremesa");
const lerSobremesa_1 = require("./lerSobremesa");
const readline_sync_1 = __importDefault(require("readline-sync"));
function editarSobremesa() {
    const todasSobremesas = (0, lerSobremesa_1.lerSobremesa)();
    //perguntando o numero para editar
    const sobremesaEditar = readline_sync_1.default.questionInt("Digite o numero do produto que deseja editar: ");
    //localizando o numero desejado e armazenando todos os seus atributos em uma variavel
    const sobremesaLocalizada = todasSobremesas.find(s => s.id === sobremesaEditar);
    //se não achar esse numero de pizza
    if (!sobremesaLocalizada) {
        console.log("Sobremesa não encontrada!");
        return;
    }
    console.log("Sobremesa localizada!");
    console.log("Alterando: ");
    console.log("..caso não queira mudar a infomação só dexar em branco..");
    //perguntando as novas informações caso não digite nasa o OU irá entrar em ação 
    // e considerar o valor original 
    const novaSobremesa = readline_sync_1.default.question("Nova sobremesa: ") || sobremesaLocalizada.sobremesa;
    const novoValor = readline_sync_1.default.questionFloat("Novo valor: ") || sobremesaLocalizada.valor;
    sobremesaLocalizada.sobremesa = novaSobremesa;
    sobremesaLocalizada.valor = novoValor;
    //salvando as alterações
    (0, salvarSobremesa_1.salvarSobremesa)(todasSobremesas);
    console.log("Edição completa!");
    console.log("");
    console.log(`ID: ${sobremesaLocalizada.id} | ${sobremesaLocalizada.sobremesa} | Valor: ${sobremesaLocalizada.valor.toFixed(2)}`);
}
