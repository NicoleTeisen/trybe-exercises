const sumArray = (array) => {
    return new Promise((resolve, reject) => {
        let sum = array.reduce((result, number) => {
            return result + number;
        }, 0)
        resolve(sum);
    })
}

const promise = new Promise((resolve, reject) => {
    let array = [];

    for(let i = 0; i <= 10; i += 1) {
    let randomNumber = Math.ceil(Math.random()* 50);
    randomNumber *= randomNumber;
    array.push(randomNumber);   
    }

    let total = array.reduce((result, number) => {
        return result + number;
    }, 0)

    if(total >= 8000){
        return reject(total)
    }
    resolve(total);   
})

.then(total => {
    console.log(total)
    const numbersDivision = [2, 3, 5, 10]
    const arrayDivision = numbersDivision.map( element => total / element);
    console.log(arrayDivision);
    return arrayDivision;
})
.then(result => sumArray(result))
.then(result => console.log(result))
.catch(total => {
    console.log(total);
    console.log("É mais de oito mil! Essa promise deve estar quebrada!")
});



