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
        // Check if the course matches and if the teacher's level is greater than or equal to the student's level
        if (studentCourse.course === teacherCourse.course && teacherCourse.level >= studentCourse.level && studentCourse.course === courseName) {
          matches.push({ course: teacherCourse.course, level: teacherCourse.level });
        }
      } else {
        // Check for all courses if no specific course name is provided
        if (studentCourse.course === teacherCourse.course && teacherCourse.level >= studentCourse.level) {
          matches.push({ course: teacherCourse.course, level: teacherCourse.level });
        }
      }
    });
  });

  return matches; // Return the matches array, which will either be empty or contain valid matches
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
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);

let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match); // -> {course: 'physics', level: 4}