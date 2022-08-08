// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
const filterEvenNumbers = (numbers) => {
  const filterNumbers = numbers.filter(function(num) {
    if (num % 2 !== 0) {
      return num;
    }
  });

  return filterNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 8, 9]));


// Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
const PositiveNumbers = (numbers) => {
  let count = 0;
  numbers.filter(function(num) {
    if (num > 0) {
      count++;
    }
  })

  return count;
}

console.log(PositiveNumbers([1, 2, -5, 4, -9, -8, 6]));

// Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа,
// max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –>
// [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
const getRandomArray = (length, min, max) => {
  const randomArray = [];
  for (let i = min; i < length + 1; i++) {
    const randomElements = Math.round(Math.random() * (max - min + 1));
    randomArray.push(randomElements);
  }

  return randomArray;
}

 console.log(getRandomArray(15, 1, 100));

//  Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті,
//  які діляться на ціло на 5. Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
//  -> [55, 55]
const getDividedByFive = (numbers) => {
  const DividedByFive = numbers.filter(function(num) {
    if (num % 5 == 0) {
      return num;
    }
  });

  return DividedByFive;
}

console.log(getDividedByFive([1, 5, 9, 10, 15, 3, 6, 7, 25]));

// Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
const getAverage = (numbers) => {
  let countNotInt = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 1 !== 0) countNotInt++;
  }

  return numbers
    .filter(num => num % 1 == 0)
    .reduce((accum, number) => accum + number, 0) / (numbers.length - countNotInt);   
}

console.log(getAverage([1, 2, 3, 2.5, 6, 2.1]));


// Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]
const divideByThree = (word) => {
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

console.log(divideByThree('ertgfku cbhg clsdd'));