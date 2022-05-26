let inputParola = prompt("inserisci una parola");


function verificaPalindromo (parola){
    let parolaScomposta = [];

    parolaScomposta.push(parola.split(""));
    
    return parolaScomposta;
} 

console.log(verificaPalindromo(inputParola));