const n = parseInt(prompt('введите n'),10);
const m = parseInt(prompt('введите m'),10);
const question = confirm('пропускать парные числа?');

let sum = 0;

if (question === false) {
  for(let i = n; i <= m; i++) {
    sum += i;
    
  }
  console.log('сумма чисел:', sum);
} else {
    for(let j = n; j <= m; j += 2) {
      sum += j;
  }
  console.log('сумма чисел без парных:', sum);
}


