//função para mostrar todos as bebidas do banco

import { lerBebida } from "./lerBebida";


export function mostrarBebida(){
    //criando a var que irá armazenar toodas as bebidas
    const todasBebidas =  lerBebida();
    console.log("");
        //para cada elemento dentro de bebidas
        //ele vai passar por cada atributo dele
        todasBebidas.forEach(b =>{
            console.log(`ID: ${b.id} |  ${b.bebida} | Valor: ${b.valor.toFixed(2)}`);
        });
}