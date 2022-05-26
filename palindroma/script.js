let inputParola = prompt("inserisci una parola");


/* function verificaPalindromo (parola){
    let parolaScomposta = [];

    parolaScomposta.push(parola.split(""));
    
    return parolaScomposta;
}  */
function verificaPalindromo (parola){

    /* let parolaScompostaOrdered = [];
    for (let i=0; i<parola.length; i++){
        parolaScompostaOrdered.push(parola[i]);
    } */

    let parolaScompostaOpposite = [];
    for (i=parola.length-1; i>=0; i--){
        parolaScompostaOpposite.push(parola[i]);
        //parolaScompostaOpposite.reverse(i);
    }

    //return parolaScompostaOrdered;
    return parolaScompostaOpposite;
} 

console.log(verificaPalindromo(inputParola));