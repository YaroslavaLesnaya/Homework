//1 создать переменные товаров с ценами 15.678, 123.965, 90.2345
const product1 = 15.678;
const product2 = 123.965;
const product3 = 90.2345;
const nProduct = 3;

//2 посчитать минимум, максимум
const maxProductPrice = Math.max(product1, product2, product3);
console.log('max:', maxProductPrice);
const minProductPrice = Math.min(product1, product2, product3);
console.log('min:', minProductPrice);

//3 посчитать сумму товаров
const sumProductPrice = product1 + product2 + product3;
console.log('sum:', sumProductPrice);

//4 округлить сумму товаров
const roundMore = Math.ceil(sumProductPrice);
console.log('округление в большую сторону:', roundMore);
const roundLess = Math.floor(sumProductPrice);
console.log('округление в меньшую степень:', roundLess);
const round = Math.round(sumProductPrice);
console.log('стандартное округление:', round);
const roundFixed = +sumProductPrice.toFixed(1);
console.log('округление до десятых:', roundFixed);

//5 проверить является сумма товаров четным или нечетным числом
const evenOdd = roundFixed % 2 === 0;
console.log('sum четное число?', evenOdd)

//6 вычислить сдачу если у тебя есть 500 грн
const rest = 500 - roundFixed;
const restRound = Math.round(rest);
console.log('сдача с 500 грн -', restRound)

//7 посчитать среднюю стоимость товаров
const avgProductPrice = roundFixed / nProduct;
const avgProductPriceRound = Math.round(avgProductPrice);
console.log('avg:', avgProductPriceRound);

//8  сгенерировать случайную скидку от 0 - 100 %
const sale = Math.random() * 101;
const saleRound = Math.round(sale);
console.log('случайная скидка:', saleRound, "%")

//9 посчитать сумму к оплате со скидкой
const pay = roundFixed - roundFixed / 100 * saleRound;
const payRoung = Math.round(pay);
console.log('цена со скидкой:', payRoung)

//10 посчитать сколько ты сэкономила
const econom = roundFixed / 100 * saleRound;
const economRound = Math.round(econom);
console.log('экономия:', economRound, "грн")


/*Исправить:
- отступы, чтобы код красивый был +
- одинарные кавычки +
- названия переменных +
- объявление переменных +
- округлить цены +
- переделать let в const +
*/