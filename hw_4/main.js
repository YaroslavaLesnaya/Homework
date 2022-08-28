const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми та структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

//func#1 match students pair 
const getStudentsCouples = () => {
  const getStudentsCouples = [];

  getStudentsCouples.push([students[0], students[2]], [students[1], students[3]], [students[4], students[5]]);

  return getStudentsCouples;
}

const studentsCouples = getStudentsCouples();

//func#2 match students and their themes
const getCouplesProjects = () => {
  const getCouplesProjects = [];

  for (let i = 0; i < themes.length; i++) {
    getCouplesProjects.push([studentsCouples[i].join(' i '), themes[i]]);
  }

  return getCouplesProjects;
}

const couplesProjects = getCouplesProjects();

//func#3 match students and their marks
const getStudentsMarks = () => {
  const getStudentsMarks = [];

  for (let i = 0; i < students.length; i++) {
    getStudentsMarks.push([students[i], marks[i]]);
  }

  return getStudentsMarks;
}

const studentsMarks = getStudentsMarks();

//func#4 match students pair and random marks
const getCouplesMarks = () => {
  const getCouplesMarks = [];
  
  for (let i = 0; i < couplesProjects.length; i++) {
    getCouplesMarks.push([couplesProjects[i].join(', '), Math.floor((Math.random() * 5) + 1)]);
  }

     return getCouplesMarks;
}

const couplesMarks = getCouplesMarks();

console.log(studentsCouples);
console.log(couplesProjects);
console.log(studentsMarks);
console.log(couplesMarks);

document.writeln('<pre>', studentsCouples, '</pre>');
document.writeln('<pre>', couplesProjects, '</pre>');
document.writeln('<pre>', studentsMarks, '</pre>');
document.writeln('<pre>', couplesMarks, '</pre>');