//const userInput1 = prompt("scegli pari o dispari");
const userInput2 = parseInt(prompt("scegli un numero da 1 a 5"));

//funzione per genrare un numero random da 1 a 5 per il pc
function pcNumeroRandom (){
    const numeroRandom = Math.floor(Math.random() * 5)+1;
    return numeroRandom;
}

console.log(pcNumeroRandom());

let sommaNumeri=userInput2 + pcNumeroRandom();
console.log(sommaNumeri);