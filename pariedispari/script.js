//const userInput1 = prompt("scegli pari o dispari");
const userInput2 = prompt("scegli un numero da 1 a 5");

function pcNumeroRandom (){
    const numeroRandom = Math.floor(Math.random() * 5)+1;
    return numeroRandom;
}

let numeroGeneratoPc = pcNumeroRandom();

//console.log(pcNumeroRandom());

let sommaNumeri = userInput2 + numeroGeneratoPc;

console.log(sommaNumeri);