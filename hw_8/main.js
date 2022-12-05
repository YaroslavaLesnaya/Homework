class Student {
  constructor(fullName, course, university, marks) {
    this.fullName = fullName;
    this.course = course;
    this.university = university;
    this.marks = marks;
  }

  getInfo() {
    return this.course + 'го курсу ' + this.university + ', ' + this.fullName;
  }

  get marksInfo() {
    if (this.isDismiss === true) {
      return null;
    } else return this.marks;
  }

  set marksInfo(mark) {
    return this.marks = [...this.marks, mark];
  }

  averageMark() {
    const avgMark = this.marks.reduce((accum, number) => accum + number, 0) / this.marks.length;
    
    return avgMark;
  }

  dismiss() {
    this.isDismiss = true;
  }

  recover() {
    this.isDismiss = false;
  }

  getScholarship() {
    if (this.avgMark < 4 || this.isDismiss) { 
      console.log('Ви не отримуєте стипендію.')
    } else {
      console.log('Ви отримали 1400 грн. стипендії.')
    }
  }
}

const student = new Student('Остап Родоманський Бендер', 1, 'Вищої Школи Психотерапії м.Одеса', [5, 4, 4, 5]);
console.log('student marks: ', student.marksInfo);
student.marksInfo = 5;
console.log('average mark: ', student.averageMark());
student.dismiss();
console.log('student marks(isDismisss): ', student.marksInfo);
student.recover();
console.log('student marks(recover): ', student.marksInfo);


class BudgetStudent extends Student {
  constructor(fullName, course, university, marks) {
    super(fullName, course, university, marks);
    this.avgMark = this.avgMark;
  }

  getScholarship() {
    if (this.avgMark < 4 || this.isDismiss) { 
      console.log('Ви не отримуєте стипендію.')
    } else {
      console.log('Ви отримали 1400 грн. стипендії.')
    }
  }
}

const budgStud = new BudgetStudent('ivan', 6, 'oksford', [3, 5, 5, 5, 5]);
budgStud.getScholarship();