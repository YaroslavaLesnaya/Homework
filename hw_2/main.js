let number1 = 0;
let number2 = 0;

do {
  number1 = parseInt(prompt('введите n'), 10);
} while (Number.isNaN(number1))

do {
  number2 = parseInt(prompt('введите m'), 10);
} while (Number.isNaN(number2))

if (number1 > number2) {
  alert('число n должно быть меньше m');
  [number1, number2] = [number2, number1];
}

const skipEven = confirm('пропускать парные числа?');
let sumNumbers = 0;

if (!skipEven) {
  for(let i = number1; i <= number2; i++) {
    sumNumbers += i;  
  }
  console.log('сумма чисел:', sumNumbers);
} else {
    for(let j = number1; j <= number2; j += 2) {
      sumNumbers += j;
    }
    console.log('сумма чисел без парных:', sumNumbers);
  }