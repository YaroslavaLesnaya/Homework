const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми та структури даних'];
const marks = [4, 5, 5, 3, 4, 5];

// const couples = [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]]; 
// const couplesProjects = [[couples[0].join(' i '), themes[0]], 
//   [couples[1].join(' i '), themes[1]], 
//   [couples[2].join(' i '), themes[2]]];
// const studentsMarks = [[students[0], marks[0]], [students[1], marks[1]], [students[2], marks[2]],
//   [students[3], marks[3]], [students[4], marks[4]], [students[5], marks[5]]];
// const couplesMarks = [[couplesProjects[0].join(', '), Math.floor((Math.random()*5)+1)],
//   [couplesProjects[1].join(', '), Math.floor((Math.random()*5)+1)],
//   [couplesProjects[2].join(', '), Math.floor((Math.random()*5)+1)]];

const couples = () => {
  return [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]]; 
}

const resultCouples = couples();

const couplesProjects = () => {
  return [[resultCouples[0].join(' i '), themes[0]], 
    [resultCouples[1].join(' i '), themes[1]], 
    [resultCouples[2].join(' i '), themes[2]]];
}

const resultCouplesProjects = couplesProjects();

const studentsMarks = () => {
  return [[students[0], marks[0]], [students[1], marks[1]], [students[2], marks[2]],
    [students[3], marks[3]], [students[4], marks[4]], [students[5], marks[5]]];
}

const resultStudentsMarks = studentsMarks();

const couplesMarks = () => {
  return [[resultCouplesProjects[0].join(', '), Math.floor((Math.random()*5)+1)],
    [resultCouplesProjects[1].join(', '), Math.floor((Math.random()*5)+1)],
    [resultCouplesProjects[2].join(', '), Math.floor((Math.random()*5)+1)]];
}

const resultCouplesMarks = couplesMarks();

console.log(resultCouples);
console.log(resultCouplesProjects);
console.log(resultStudentsMarks);
console.log(resultCouplesMarks);

document.writeln('<pre>', resultCouples, '</pre>');
document.writeln('<pre>', resultCouplesProjects, '</pre>');
document.writeln('<pre>', resultStudentsMarks, '</pre>');
document.writeln('<pre>', resultCouplesMarks, '</pre>');