//1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number) {
  let result = -1;
  for (let i = number; i > 0; i = Math.floor(i / 10)) {
    let digit = i % 10;
    if (result < digit) {
      result = digit;
    }
  }
  return result;
}

//2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл.
function exponentiation (n, exp) {
  if (exp === 0) return 1;
  let result = n;
  for(let i = 1; i < exp; i++) {
    result *= n;
  }
  return result;
}

//3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function formatName (str) {
  let upperLetter;
  let name = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      name += str[i].toLowerCase();
    } else {
      name += str[i];
    }
    upperLetter = name[0].toUpperCase() + name.slice(1);;
  }
  return upperLetter;

}

//4 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5.
function getRandomNumber (numberMin, numberMax) {
  return Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);
}

//5 Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4.
function countLetter (str,matchLetter) {
  let countLetter = 0;
  for (let i = 0; i < str[i].length; i++) {
    if(str[i] === matchLetter) {
      countLetter = str.split(matchLetter).length - 1;
    }
  }
  return countLetter;
}

//6 Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl".
function removeLetter (str, removeLetter) {
  let resultStr = '';
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== removeLetter) {
      resultStr += str[i];
    }
  }
  return resultStr;
}

//1
// const n = +prompt("введите число");
// console.log('максимальная цифра числа: ', getMaxDigit(289));

//2
// console.log(exponentiation(2,3));

//3
// console.log(formatName('вАсИлиЙЙ'));

//4
// console.log(getRandomNumber(1, 8));

//5
// console.log(countLetter('aawer', 'a'));

//6
// console.log(removeLetter('dfgaaafcsdaaaa','a'));

document.writeln('<pre>функция 1: ', getMaxDigit(27509), '</pre>');
document.writeln('<pre>функция 2:  ', exponentiation(3,3), '</pre>');
document.writeln('<pre>функция 3: ', formatName('дМитРИй'), '</pre>');
document.writeln('<pre>функция 4: ', getRandomNumber(1,8), '</pre>');
document.writeln('<pre>функция 5: ', countLetter('frftyq1', 'f'), '</pre>');
document.writeln('<pre>функция 6: ', removeLetter('gftrysskkk', 'k'), '</pre>');






