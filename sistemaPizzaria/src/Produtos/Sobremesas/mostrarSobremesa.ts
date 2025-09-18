//função para mostrar todos as sobremesas do banco

import { lerSobremesa } from "./lerSobremesa";


export function mostrarSobremesa(){
    //criando a var que irá armazenar toodas as sobremesas
    const todasSobremesas =  lerSobremesa();
    console.log("");
        //para cada elemento dentro de sobremesas
        //ele vai passar por cada atributo dele
        todasSobremesas.forEach(s =>{
            console.log(`ID: ${s.id} |  ${s.sobremesa} | Valor: ${s.valor.toFixed(2)}`);
        });
}