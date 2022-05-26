const userInput1 = prompt("scegli pari o dispari");
const userInput2 = parseInt(prompt("scegli un numero da 1 a 5"));

//funzione per generare un numero random da 1 a 5 per il pc
function pcNumeroRandom (){
    const numeroRandom = Math.floor(Math.random() * 5)+1;
    return numeroRandom;
}

//salvo il numero generato per il pc in una variabile
let numeroGeneratoPc = pcNumeroRandom();
//let sommaNumeri = userInput2 + numeroGeneratoPc;
//console.log(numeroGeneratoPc)
//console.log(sommaNumeri);

//creo una funzione per stabilere se la somma di due numeri
//restituisce un valore pari o dispari
function sommaTraPariDispari (num1, num2){
    const sommaTraPariDispari = num1 + num2;
    console.log("il risultato della somma tra i due numeri è " + sommaTraPariDispari);
    if (sommaTraPariDispari % 2 === 0){
        console.log("la somma dei due numeri è pari");
        return true;
    }
    else{
        console.log("la somma dei due numeri è dispari")
        return false;
    }
}

let verificaPariDispari = sommaTraPariDispari(userInput2, numeroGeneratoPc);

console.log("l'utente ha inserito il numero " + userInput2);
console.log("il numero generato per il pc è " + numeroGeneratoPc);
console.log(verificaPariDispari);

/* if(userInput2 == "pari" && verificaPariDispari){

}
 */