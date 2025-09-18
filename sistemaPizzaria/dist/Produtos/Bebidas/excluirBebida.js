"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirBebida = excluirBebida;
const lerBebida_1 = require("./lerBebida");
const procurarBebida_1 = require("./procurarBebida");
const salvarBebida_1 = require("./salvarBebida");
function excluirBebida() {
    //armazenando todos valores
    const todasBebidas = (0, lerBebida_1.lerBebida)();
    //procurando o id para excluir
    console.log("Digite o ID da sobremesa que deseja excluir: ");
    const bebidaExcluir = (0, procurarBebida_1.procurarBebida)();
    //se não localizar
    if (!bebidaExcluir) {
        console.log("Bebida não encontrada!");
        return;
    }
    console.log("");
    console.log("Localizado...excluindo...");
    //criar uma nova lista sem o id desejado
    const bebidaAutualizada = todasBebidas.filter(b => b.id !== bebidaExcluir.id);
    (0, salvarBebida_1.salvarBebida)(bebidaAutualizada);
}
