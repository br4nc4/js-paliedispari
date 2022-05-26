let inputParola = prompt("inserisci una parola");

/* function verificaPalindromo (parola){
    let parolaScomposta = [];

    parolaScomposta.push(parola.split(""));
    
    return parolaScomposta;
}  */

function verificaPalindromo (parola){

    let parolaScompostaOrdered = [];
    for (let i=0; i<parola.length; i++){
        parolaScompostaOrdered.push(parola[i]);
    }

    let parolaScompostaOpposite = [];
    for (i=parola.length-1; i>=0; i--){
        parolaScompostaOpposite.push(parola[i]);
        //parolaScompostaOpposite.reverse(i);
    }

    if (parolaScompostaOpposite === parolaScompostaOrdered){
        console.log("la parola inserita è un palindromo")
        console.log(parolaScompostaOrdered + " " + parolaScompostaOpposite);
    } 
    else{
        console.log("la parola inserita non è un palindromo")
        console.log(parolaScompostaOrdered + " " + parolaScompostaOpposite);
    }

    //return parolaScompostaOrdered;
    //return parolaScompostaOpposite;
} 

console.log(verificaPalindromo(inputParola));