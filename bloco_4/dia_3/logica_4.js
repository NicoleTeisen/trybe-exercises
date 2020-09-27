let n = 5;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight -= 1;
  controlLeft += 1;
};