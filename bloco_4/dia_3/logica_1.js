let n = 5;
let asterisco = "";

for (let cont = 0; cont < n; cont += 1){
    if (n > 1) {
        asterisco += "*";
    }
}

for (let linha = 0; linha < n; linha += 1){
    console.log(asterisco);
}