    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


// console.log(names[0].split(''));


function containsA() {
  const letters = [];
   names.forEach( element => letters.push(element.split('')))
  const arrayLetters = letters.reduce((acc, letter) => acc.concat(letter), []);
  let letterA = 0;
  arrayLetters.forEach(element => {
    if (element === 'A' || element === 'a') {
      letterA += 1;
    }    
  })
  return letterA;
}

containsA();

assert.deepStrictEqual(containsA(), 20);