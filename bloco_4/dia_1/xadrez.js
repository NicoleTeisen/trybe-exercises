let pecaXadrez = "RAINHA";

switch (pecaXadrez.toLowerCase()) {
    case "peao":
        console.log("ande uma casa");
        break;
    case "torre":
        console.log("movimentos lineares");
        break;
    case "cavalo":
        console.log("movimentos em L");
        break;
    case "bispo":
        console.log("movimentos diagonais");
        break;
    case "rainha":
        console.log("movimentos em linha reta ou diagonais");
        break;
    case "rei":
        console.log("movimentos em casas adjacentes");
        break;
    default:
        console.log("essa peça não existe");
}