const fatorial = number => {
  let multiplica = 1;

  for (let index = number; index >= 1; index -= 1){
    multiplica *= index;
  }
  
  console.log(multiplica);
}

fatorial(4);

// Ou

const factorial = number => {
  let result = 1

  for (let i = 2; i <= number; i += 1) {
      result *= i;
  }

  return result;
}

console.log(factorial(5));

// Recursiva

const fatora = number => number > 1 ? number * fatora(number - 1) : 1;

console.log(fatora(5));