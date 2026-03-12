function sendEmail(from, to, message) {
  console.log(`${from.email} -> ${to.email}: ${message}`);
}

class User {
  constructor({ name, surname, email, role = 'student' }) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.courses = [];
  }

  addCourse(course, level) {
    this.courses.push({ course, level });
  }

  removeCourse(course) {
    this.courses = this.courses.filter(c => c.course !== course);
  }

  editCourse(course, level) {
    let foundCourse = this.courses.find(c => c.course === course);
    if (foundCourse) {
      foundCourse.level = level;
    }
  }

  sendMessage(from, message) {
    this.messages.push({
      from: from.email,
      to: this.email,
      message
    });
    sendEmail(from, this, message);
  }

  showMessagesHistory() {
    this.messages.forEach(msg => {
      console.log(`${msg.from} -> ${msg.to}: ${msg.message}`);
    });
  }
}

class ExtendedUser extends User {
  constructor({ name, surname, email }) {
    super({ name, surname, email, role: 'student' });
  }


  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  set fullName(fullName) {
    const [name, surname] = fullName.split(' ');
    this.name = name;
    this.surname = surname;
  }

  static match(teacher, student, courseName) {
    let matches = [];

    student.courses.forEach(studentCourse => {
      teacher.courses.forEach(teacherCourse => {
        if (courseName) {
          if (studentCourse.course === teacherCourse.course && teacherCourse.level >= studentCourse.level && studentCourse.course === courseName) {
            matches.push({ course: teacherCourse.course, level: teacherCourse.level });
          }
        } else {
          if (studentCourse.course === teacherCourse.course && teacherCourse.level >= studentCourse.level) {
            matches.push({ course: teacherCourse.course, level: teacherCourse.level });
          }
        }
      });
    });

    return matches.length > 0 ? matches : [];
  }
}

class Teacher extends ExtendedUser {
  constructor({ name, surname, email }) {
    super({ name, surname, email });
    this.role = 'teacher'; 
  }
}

class Student extends ExtendedUser {
  constructor({ name, surname, email }) {
    super({ name, surname, email });
    this.role = 'student'; 
  }
}

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

  getStudentsForTeacher(teacher) {
    let retVal = [];
    for (let student of this.students) {
      if (ExtendedUser.match(teacher, student).length) { 
        retVal.push(student);
      }
    }
    return retVal;
  }

  getTeacherForStudent(student) {
    let retVal = [];
    for (let teacher of this.teachers) {
      if (ExtendedUser.match(teacher, student).length) {  
        retVal.push(teacher);
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

// Test cases
let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife', 'rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);

let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);

let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...}
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...}

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...}