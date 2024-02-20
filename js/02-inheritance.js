/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class User {
  constructor(name, gender, age) {
    this.gender = gender;
    this.age = age;
    this.name = name;
  }

  showInfo() {
    console.log('========================');
    console.log(this.name);
    console.log(this.gender);
    console.log(this.age);
    console.log('========================');
  }

  eat() {
    console.log('Ням ням');
  }

  sleep() {
    console.log('Zzzzz');
  }

  watchMovie() {
    console.log('Watching');
  }

  rest() {
    console.log('Rest');
  }
}

class Teacher extends User {
  constructor(name, gender, age, salary, position, department) {
    super(name, gender, age);
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  goToWork() {
    console.log('Go To Work');
  }
}

class Student extends User {
  constructor(name, gender, age, course, faculty, group) {
    super(name, gender, age);
    this.course = course;
    this.faculty = faculty;
    this.group = group;
  }

  goToStudy() {
    console.log('Go To Study');
  }
}

const teacher = new Teacher('Anatoliy', 'male', 42, 18000, 'decanat', 'FIT');
const student = new Student('Volodka', 'male', 23, 4, 'FIT', 'PZ-121');

console.log(teacher);
console.log(student);
