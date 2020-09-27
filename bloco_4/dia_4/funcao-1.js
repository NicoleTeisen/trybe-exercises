function palindromo(palavra) {

    let palavraArray = palavra.split('');
     
    let reves = [];

    for(let i = 1; i <= palavraArray.length; i += 1){
        reves.push(palavraArray[palavraArray.length-i]);
    }
    for (let index in palavra) {
        if (palavraArray[index] === reves[index]) {
        console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

palindromo("arara");

