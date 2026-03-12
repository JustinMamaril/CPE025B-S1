class User {
  constructor({ name, surname, email }) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.messages = [];
  }

  sendMessage(from, message) {
    this.messages.push(`${from.email} -> ${this.email}: ${message}`);
  }

  showMessagesHistory() {
    for (let msg of this.messages) {
      console.log(msg);
    }
  }
}

class ExtendedUser extends User {
  constructor(data) {
    super(data);
    this.courses = [];
  }

  addCourse(courseName, level) {
    this.courses.push({ courseName, level });
  }

  static match(teacher, student) {
    let matches = [];
    for (let tCourse of teacher.courses) {
      for (let sCourse of student.courses) {
        if (tCourse.courseName === sCourse.courseName && tCourse.level >= sCourse.level) {
          matches.push(tCourse.courseName);
        }
      }
    }
    return matches;
  }
}

class Student extends ExtendedUser {}
class Teacher extends ExtendedUser {}

class Tutoring {
  constructor() {
    this.students = [];
    this.teachers = [];
  }

  getStudentByName(name, surname) {
    let retVal;
    for (let student of this.students) {
      if (student.name === name && student.surname === surname) {
        retVal = student;
      }
    }
    return retVal;
  }

  getTeacherByName(name, surname) {
    let retVal;
    for (let teacher of this.teachers) {
      if (teacher.name === name && teacher.surname === surname) {
        retVal = teacher;
      }
    }
    return retVal;
  }

  addStudent(name, surname, email) {
    this.students.push(new Student({ name, surname, email }));
  }

  addTeacher(name, surname, email) {
    this.teachers.push(new Teacher({ name, surname, email }));
  }
}

class ExtendedTutoring extends Tutoring {
  constructor() {
    super();
  }

  sendMessages(from, to = [], message) {
    if (from && to.length) {
      for (let target of to) {
        target.sendMessage(from, message);
      }
    }
  }
}

let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));

tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');

for (let user of to) {
  user.showMessagesHistory();
}
