// let number1 = parseInt(prompt('введите n'),10);
// let number2 = parseInt(prompt('введите m'),10);

let number1;
let number2;

do {
  let checkNumber = parseInt(prompt('введите n'),10);
  number1 = checkNumber;
} while (Number.isNaN(number1) === true)

do {
  let checkNumber = parseInt(prompt('введите m'),10);
  number2 = checkNumber;
} while (Number.isNaN(number2) === true)

if(number1 > number2) {
  alert('число n должно быть меньше m');
  do {
    let checkNumber = parseInt(prompt('введите n'),10);
    number1 = checkNumber;
  } while (Number.isNaN(number1) === true)
  
  do {
    let checkNumber = parseInt(prompt('введите m'),10);
    number2 = checkNumber;
  } while (Number.isNaN(number2) === true)
}

const questionDoubleNumbers = confirm('пропускать парные числа?');
let sumNumbers = 0;

if (questionDoubleNumbers === false) {
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