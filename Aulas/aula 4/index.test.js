import { soma, subtracao, multiplicacao, divisao } from "./index.js";


console.log("Teste de soma");
    if(soma(2, 2) === 4) console.log("Passou o 1°!");
      else console.log("Falhou o 1°!");
    if(soma(8, 2) === 10) console.log("Passou o 2°!");
     else console.log("Falhou o 2°!");
    if(soma(12, 2) === 14) console.log("Passou o 3°!");
     else console.log("Falhou o 3°!");


console.log("Teste de subtração!");
     if(subtracao(10, 2) === 8) console.log("Passou o 4°!");
      else console.log("Falhou o 4°!");
     if(subtracao(8, 2) === 6) console.log("Passou o 5°!");
      else console.log("Falhou o 5°!");
     if(subtracao(12, 2) === 10) console.log("Passou o 6°!");
         else console.log("Falhou o 6°!");


console.log("Teste de multiplicação!");
if(multiplicacao(2, 2) === 4) console.log("Passou o 7°!");
    else console.log("Falhou o 7°!");
if(multiplicacao(8, 2) === 16) console.log("Passou o 8°!");
    else console.log("Falhou o 8°!");
if(multiplicacao(12, 2) === 24) console.log("Passou o 9°!");
    else console.log("Falhou o 9°!");


    console.log("Teste de divisao!");
    if(divisao(2, 2) === 1) console.log("Passou o 10°!");
     else console.log("Falhou o 10°!");
    if(divisao(8, 2) === 4) console.log("Passou o 11°!");
     else console.log("Falhou o 11°!");
    if(divisao(12, 2) === 6) console.log("Passou o 12°!");
        else console.log("Falhou o 12°!");