const ukraine = { 
  tax: 0.195, 
  middleSalary: 1789, 
  vacancies: 11476 
};
const latvia = { 
  tax: 0.25, 
  middleSalary: 1586, 
  vacancies: 3921 
};
const litva = { 
  tax: 0.15, 
  middleSalary: 1509, 
  vacancies: 1114 
};

// Створіть функцію getMyTaxes.call(country, salary) -> number; –
// яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
// Функція повинна викликатись через call та працювати з даними через this.
function getMyTaxes(salary) {
 return salary - (salary * this.tax);
}

const taxesForLit = getMyTaxes.call(litva, 1839);
console.log('salary tax for Litva: ', taxesForLit);


// Створіть функцію getMiddleTaxes.call(country) -> number; –
// яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
// Функція повинна викликатись через call та працювати з даними через this.
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

const middleTaxesForUkr = getMiddleTaxes.call(ukraine);
console.log('in Ukraine middle tax is: ', middleTaxesForUkr);


// Створіть функцію getTotalTaxes.call(country) -> number; –
// яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax middleSalary vacancies).
// Функція повинна викликатись через call та працювати з даними через this.
function getTotalTaxes () {
  const totalTaxes = (this.middleSalary - (this.middleSalary * this.tax)) * this.vacancies;

  return totalTaxes;
}

const totalTaxesForUkr = getTotalTaxes.call(ukraine);
console.log('total taxes for Ukraine is: ', totalTaxesForUkr);

const totalTaxesForLat = getTotalTaxes.call(latvia);
console.log('total taxes for Ukraine is: ', totalTaxesForLat);

const totalTaxesForLit = getTotalTaxes.call(litva);
console.log('total taxes for Ukraine is: ', totalTaxesForLit);


// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду:
// { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000.
// taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
function getMySalary () {
  const salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
  const taxes = (salary * this.tax).toFixed(3);
  const mySalary = {
    salary: salary,
    taxes: taxes,
    profit: (salary - taxes).toFixed(3)
  }
  console.log(mySalary);
}

setInterval(getMySalary.bind(ukraine), 10000);

