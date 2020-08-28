let array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);
}



for (let indice = 0; indice < array.length; indice += 1) {
    let divisao = array[indice] / 2;
    console.log(divisao);
}