"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editarBebida = editarBebida;
const salvarBebida_1 = require("./salvarBebida");
const lerBebida_1 = require("./lerBebida");
const readline_sync_1 = __importDefault(require("readline-sync"));
function editarBebida() {
    const todasBebidas = (0, lerBebida_1.lerBebida)();
    //perguntando o numero para editar
    const bebidaEditar = readline_sync_1.default.questionInt("Digite o numero do produto que deseja editar: ");
    //localizando o numero desejado e armazenando todos os seus atributos em uma variavel
    const bebidaLocalizada = todasBebidas.find(b => b.id === bebidaEditar);
    //se não achar esse numero de bebida
    if (!bebidaLocalizada) {
        console.log("Sobremesa não encontrada!");
        return;
    }
    console.log("Sobremesa localizada!");
    console.log("Alterando: ");
    console.log("..caso não queira mudar a infomação só dexar em branco..");
    //perguntando as novas informações caso não digite nasa o OU irá entrar em ação 
    // e considerar o valor original 
    const novaBebida = readline_sync_1.default.question("Nova bebida: ") || bebidaLocalizada.bebida;
    const novoValor = readline_sync_1.default.questionFloat("Novo valor: ") || bebidaLocalizada.valor;
    bebidaLocalizada.bebida = novaBebida;
    bebidaLocalizada.valor = novoValor;
    //salvando as alterações
    (0, salvarBebida_1.salvarBebida)(todasBebidas);
    console.log("Edição completa!");
    console.log("");
    console.log(`ID: ${bebidaLocalizada.id} | ${bebidaLocalizada.bebida} | Valor: ${bebidaLocalizada.valor.toFixed(2)}`);
}
