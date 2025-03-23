class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(newFirstName) {
    if (newFirstName.length < 2 || newFirstName.length > 50 || typeof newFirstName !== 'string' || newFirstName.match(/[^a-zA-Z]/)) {
      throw new Error('First name should be a string and contain at least one character from a-z or A-Z');
    }
    this._firstName = newFirstName;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(newLastName) {
    if (newLastName.length < 2 || newLastName.length > 50 || typeof newLastName !== 'string' || newLastName.match(/[^a-zA-Z]/)) {
      throw new Error('Last name should be a string and contain at least one character from a-z or A-Z');
    }
    this._lastName = newLastName;
  }
  get profession() {
    return this._profession;
  }
  set profession(newProfession) {
    if (!newProfession || typeof newProfession !== 'string' || newProfession.match(/[^a-zA-Z ]/) || newProfession.trim() === ''){
      throw new Error('Profession should be a string and contain at least one character from a-z or A-Z');
    }
    this._profession = newProfession;
  }
  get salary() {
    return this.#salary;
  }
  set salary(newSalary) {
    if (!newSalary || newSalary < 0 || newSalary >= 10000 || typeof newSalary !== 'number') {
      throw new Error('Salary should be a number between 0 and 10000');
    }
    else this.#salary = newSalary;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  #employees;
  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }
  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }
  addEmployee(employee) {
    if (employee && employee instanceof Employee) {
      this.#employees.push(employee);
    }
    else {
      throw new Error('Employee must be an instance of the Employee class');
    }
  }
  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
  findEmployeeByName(firstName) {
    const result = this.#employees.find(employee => employee.firstName === firstName);
    if (!result) {
      throw new Error('First name is not exist');
    }
    return result;
  }
  #getEmployeeIndex(firstName) {
    const result = this.#employees.findIndex(employee => employee.firstName === firstName);
    if (result === -1) {
      throw new Error('Employee with the given first name does not exist');
    }
    return result;
  }
  removeEmployee(firstName) {
    this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
  }
  getTotalSalary() {
    return this.#employees.reduce((total, employee) => total + employee.salary, 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);
console.log('!!', emp1);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]set


export { Employee, Company };

