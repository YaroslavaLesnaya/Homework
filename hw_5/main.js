// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
const filterEvenNumbers = numbers => numbers.filter(num => num % 2);
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 8, 9]);
console.log('Filtered even numbers:', evenNumbers);


// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
const getCountPositiveNumbers = numbers => {
  const positiveNumbers = numbers.filter(num => num > 0);

  return positiveNumbers.length;
}

const countPositiveNumbers = getCountPositiveNumbers([1, 2, -5, 4, -9, -8, 6]);
console.log('Count positive numbers:', countPositiveNumbers);


// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа,
// max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –>
// [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
function generationRandomNumber (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArray = (length, min, max) => {
  const randomNumbers = [];

  for (let i = 0; i < length; i++) {
    randomNumbers.push(generationRandomNumber(max, min));
  }

  return randomNumbers;
}

const randomArray = getRandomArray(10, 15, 20);
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
  const positiveNumbers = numbers.filter(num => num % 1 === 0);
  const averageNumbers = positiveNumbers.reduce((accum, number) => accum + number, 0) / positiveNumbers.length;
  
  return averageNumbers;
}

const averageNumbers = getAverageNumbers([1, 2, 3, 2.5, 6, 2.1, 8])
console.log('Average of numbers:', averageNumbers);


// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]
const getDivideByThree = word => {
  const toOneWord = word.replaceAll(' ', '').split(" ");
  console.log(toOneWord);
  const dividedByThree = toOneWord.map(function (str) {
      const wordByThree = [];

      str.split("").forEach(function (str, length) {
        if ((length + 1) % 3 === 0) {
          wordByThree.push(str, " ");
        } else {
          wordByThree.push(str);
        };
      });

      return wordByThree.join("");
    }
  );

  return dividedByThree;
}

const dividedByThree = getDivideByThree('ertku cbhg clsdd cs c');
console.log('Words divided by 3 letters:', dividedByThree);