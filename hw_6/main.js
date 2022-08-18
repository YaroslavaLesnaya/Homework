const students = [ {
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
  }, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
  }, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
  }];

// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] -
// яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл.
function getSubjects (name) {
  for(let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      const studentSubjects = Object.keys(students[i].subjects);
      const capitalizeFirstLetter = studentSubjects.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1));
      const removeHyphen = capitalizeFirstLetter.join(', ').replace("_", " ");

      return removeHyphen;
    }
  }
}

const studentSubjects = getSubjects('Tanya');
console.log('student subjects: ', studentSubjects)

// Створіть функцію getAverageMark(students[0]) --> 3.79 –
// яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
function getAverageMark(name) {
  for(let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      const marks = Object.values(students[i].subjects).flat();
      const averageMark = (marks.reduce((accum, num) => accum + num, 0) / marks.length).toFixed(2);

      return averageMark;
    }
  }
}

const studentAverageMark = getAverageMark('Anton');
console.log('average mark: ', studentAverageMark)

// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} –
// яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього
// завдання). Пoвинна бути виведена інформація: курс, ім'я, середня оцінка.
function getStudentInfo (name) {
  for(let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      const studentInfo = {
        course: students[i].course,
        name: students[i].name,
        averageMark: getAverageMark(students[i].name)
      }

      return studentInfo;
    }
  }
}
const studentInfo = getStudentInfo('Victor');
console.log('student info: ', studentInfo)


// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] –
// яка повертає імена студентів у алфавітному порядку.
function getStudentsNames () {
  let studentsNames = [];

  for(let i = 0; i < students.length; i++) {
    studentsNames.push(students[i].name);
  }
  studentsNames.sort();

  return studentsNames;
}

const studentsNames = getStudentsNames();
console.log('student names in alphabetical order: ', studentsNames);


// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по
// показнику середньої оцінки.
function getBestStudent() {
  let avgMarks = [];
  let nameBestStudent;
  let maxAvg = 0;

  for(let i = 0; i < students.length; i++) {
    avgMarks.push(getAverageMark(students[i].name));

    for(let j = 0; j < avgMarks.length; j++) {
      if (avgMarks[j] > maxAvg) {
        maxAvg = avgMarks[j];
        nameBestStudent = students[i].name;
      }
    }
  }
 
  return nameBestStudent;
}

const nameBestStudent = getBestStudent();
console.log('best student is: ', nameBestStudent);


// Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт,
// в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(word) {
  return word.split("").reduce((acc, letter) => (acc[letter] = (acc[letter] || 0) + 1, acc), {});
}

const word = calculateWordLetters('окошко');
console.log(word);