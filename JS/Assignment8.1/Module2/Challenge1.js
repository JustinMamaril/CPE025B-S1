function sendEmail(from, to, message) {
  console.log(`${from.email} -> ${to.email}: ${message}`);
}

class User {
  constructor({ name, surname, email, role }) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.courses = []; // stores courses
    this.messages = []; // stores message history
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

// Test cases
let student1 = new User({ name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student' });
let student2 = new User({ name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student' });
let teacher1 = new User({ name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher' });

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);

console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses

teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();
// Output:
// rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message