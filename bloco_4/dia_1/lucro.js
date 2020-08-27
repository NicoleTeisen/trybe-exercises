let custo = 80;
let venda = 180;


if ( custo >= 0 || venda >= 0) {
    let imposto = custo * 0.2;
    let custoTotal = custo + imposto;
    let lucro = venda - custoTotal;
    console.log(lucro*1000);
}
else {
    console.log("erro, verifique os valores");
}
