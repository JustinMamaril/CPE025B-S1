
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

function sendEmail(from, to, message) {
  console.log(`${from.email} -> ${to.email}: ${message}`);
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

// Test cases
let student1 = new Student({ name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com' });
let student2 = new Student({ name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com' });
let teacher1 = new Teacher({ name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com' });

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);

console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses

student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses