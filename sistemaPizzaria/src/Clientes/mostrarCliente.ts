//função para mostrar todos os clientes

import { lerCliente } from "./lerCliente";


export function mostrarCliente(){
    //criando a var que irá armazenar todos os clientes
    const todosClientes =  lerCliente();
        //para cada elemento dentro de clientes
        //ele vai passar por cada atributo dele
        todosClientes.forEach(c =>{
            console.log(`Nome: ${c.nome} | CPF: ${c.cpf} | Tel: ${c.telefone}`);
        });
}