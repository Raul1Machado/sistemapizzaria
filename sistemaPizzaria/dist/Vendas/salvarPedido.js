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
exports.salvarPedido = salvarPedido;
exports.listarPedidos = listarPedidos;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const pedidosPath = path.join(__dirname, "pedidos.json");
/**
 * Função simples para salvar um pedido em arquivo JSON.
 * Se o arquivo já existir, adiciona o pedido; caso contrário, cria um novo array.
 */
function salvar(arquivo, pedido) {
    let pedidos = [];
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
function salvarPedido(pedido) {
    salvar(pedidosPath, pedido);
}
// Lista todos os pedidos
function listarPedidos() {
    if (!fs.existsSync(pedidosPath))
        return [];
    return JSON.parse(fs.readFileSync(pedidosPath, "utf8"));
}
