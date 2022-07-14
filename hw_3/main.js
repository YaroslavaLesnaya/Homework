//1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// function getMaxDigit (number) {
//   let result = -1;
//   for (let i = number; i > 0; i = Math.floor(i / 10)) {
//     let digit = i % 10;
//     if (result > digit) {
//       result = digit;
//     }
//   }
//   return result;
// }

const getMaxDigit = (number) => +Math.max(...(number + '').split(''));

//2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл.
function exponentiation (n, exp) {
  if (exp === 0) return 1;
  let result = n;
  for (let i = 1; i < exp; i++) {
    result *= n;
  }

  return result;
}

//3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const formateName = name => name[0].toUpperCase() + name.slice(1).toLowerCase();

//4 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5.
const getRandomNumber = (numberMin, numberMax) => Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);

//5 Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4.
function countLetter (str, matchLetter) {
  let countLetter = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === matchLetter) {
      countLetter++;
    }
  }

  return countLetter;
}

//6 Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl".
function removeLetter (str, removeLetter) {
  let resultStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== removeLetter) {
      resultStr += str[i];
    }
  }
  
  return resultStr;
}

document.writeln('<pre>функция 1: ', getMaxDigit(908), '</pre>');
document.writeln('<pre>функция 2:  ', exponentiation(3,2), '</pre>');
document.writeln('<pre>функция 3: ', formateName('дМитРИй'), '</pre>');
document.writeln('<pre>функция 4: ', getRandomNumber(1,8), '</pre>');
document.writeln('<pre>функция 5: ', countLetter('frftyq1', 'f'), '</pre>');
document.writeln('<pre>функция 6: ', removeLetter('gftrysskkk', 'k'), '</pre>');






