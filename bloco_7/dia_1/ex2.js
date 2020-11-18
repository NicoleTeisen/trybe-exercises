function longestWord(phrase) {
    const array = phrase.split(' ');
    let maxLength = 0;
    let maxWord = '';

    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > maxLength) {
            maxLength = array[index].length;
            maxWord = array[index];
        }
    }
    console.log(maxWord);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

// Ou

const longestWord = text => {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }

    return result
}

// Recursiva

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];