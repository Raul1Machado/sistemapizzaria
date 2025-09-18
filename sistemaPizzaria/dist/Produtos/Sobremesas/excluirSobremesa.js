"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirSobremesa = excluirSobremesa;
const lerSobremesa_1 = require("./lerSobremesa");
const procurarSobremesa_1 = require("./procurarSobremesa");
const salvarSobremesa_1 = require("./salvarSobremesa");
function excluirSobremesa() {
    //armazenando todos valores
    const todasSobremesas = (0, lerSobremesa_1.lerSobremesa)();
    //procurando o id para excluir
    console.log("Digite o ID da sobremesa que deseja excluir: ");
    const sobremesaExcluir = (0, procurarSobremesa_1.procurarSobremesa)();
    //se não localizar
    if (!sobremesaExcluir) {
        console.log("Sobremesa não encontrada!");
        return;
    }
    console.log("");
    console.log("Localizado...excluindo...");
    //criar uma nova lista sem o id desejado
    const sobremesaAutualizada = todasSobremesas.filter(s => s.id !== sobremesaExcluir.id);
    (0, salvarSobremesa_1.salvarSobremesa)(sobremesaAutualizada);
}
