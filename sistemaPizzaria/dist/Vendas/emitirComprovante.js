"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitirComprovante = emitirComprovante;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function emitirComprovante(pedido) {
    // Pasta Vendas/comprovantes
    const comprovanteDir = path.join(__dirname, "comprovantes");
    // Cria a pasta caso não exista
    if (!fs.existsSync(comprovanteDir)) {
        fs.mkdirSync(comprovanteDir, { recursive: true });
    }
    // Nome do arquivo: CPF + timestamp
    const arquivo = path.join(comprovanteDir, `comprovante_${pedido.clienteCPF}_${Date.now()}.txt`);
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
