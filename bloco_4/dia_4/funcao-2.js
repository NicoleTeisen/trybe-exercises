function maiorIndice(array) {
    let maiorNumero = "";

    for( let i in array) {
        if array[i] > array[i-1] {
            maiorNumero = i;
        }
    }
    console.log(maiorNumero);
}
