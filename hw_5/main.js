// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
const getFilterEvenNumbers = numbers => numbers.filter(num => num % 2);
const filterEvenNumbers = getFilterEvenNumbers([1, 2, 3, 4, 5, 8, 9]);
console.log('Filtered even numbers:', filterEvenNumbers);


// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
const getCountPositiveNumbers = numbers => {
  const getCountPositiveNumbers = numbers.filter(num => num > 0);
  return getCountPositiveNumbers.length;
}

const countPositiveNumbers = getCountPositiveNumbers([1, 2, -5, 4, -9, -8, 6]);
console.log('Count positive numbers:', countPositiveNumbers);


// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа,
// max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –>
// [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
const getRandomArray = (length, min, max) => {
  const randomNumbers = [];
  for (let i = min; i < length + 1; i++) {
    const randomNumber = Math.round(Math.random() * (max - min + 1));
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

const randomArray = getRandomArray(15, 1, 100);
console.log('Random array:', randomArray);


//  Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті,
//  які діляться на ціло на 5. Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
//  -> [55, 55]
const getDividedByFive = numbers => numbers.filter(num => num % 5 === 0)
const dividedByFive = getDividedByFive([1, 5, 9, 10, 15, 3, 6, 7, 25]);
console.log('Numbers divided by 5:', dividedByFive);


// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
const getAverageNumbers = numbers => {
  let countNotInt = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 1 !== 0) countNotInt++;
  }

  const averageNumbers = numbers
    .filter(num => num % 1 == 0)
    .reduce((accum, number) => accum + number, 0) / (numbers.length - countNotInt);
  
  return averageNumbers;
}

const averageNumbers = getAverageNumbers([1, 2, 3, 2.5, 6, 2.1])
console.log('Average of numbers:', averageNumbers);


// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]
const getDivideByThree = word => {
  return word
    .replaceAll(' ', '')
    .split(" ").map(function (str) {
    if (str.length >= 3) {
      const arr = [];
      str.split("").forEach(function (str, length) {
        if ((length + 1) % 3 == 0) {
          arr.push(str, " ");
        } else {
          arr.push(str);
        };
      });

      return arr.join("");
    };

    return str;
  });
}

const dividedByThree = getDivideByThree('ertgfku cbhg clsdd');
console.log('Words divided by 3 letters:', dividedByThree);