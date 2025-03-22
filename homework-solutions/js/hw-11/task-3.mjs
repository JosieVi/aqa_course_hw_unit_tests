class Employee {
  #salary;
  constructor(firstName, lastName, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
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
  get salary() {
    return this.#salary;
  }
  set salary(newSalary) {
    if (!newSalary || newSalary < 0 || newSalary >= 10000 || typeof newSalary !== 'number') {
      throw new Error('Salary should be a number between 0 and 10000');
    }
    this.#salary = newSalary;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this._programmingLanguages = programmingLanguages;
  }

  get programmingLanguages() {
    return this._programmingLanguages;
  }
  addProgrammingLanguage(language) {
    if (!language || typeof (language) !== 'string' || language.trim() === "" || language.match(/[^a-zA-Z]/)) {
      throw new Error('Language must be a non-empty string containing only letters from a-z or A-Z');
    }
    else this._programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    if (!teamSize || teamSize < 0 || typeof (teamSize) !== 'number') {
      throw new Error('Team size must be a valid number greater than or equal to 0');
    }
    this._teamSize = teamSize;
  }
  get teamSize() {
    return this._teamSize;
  }

  increaseTeamSize() {
    this._teamSize++;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this._designTools = [...designTools];
  }
  get designTools() {
    return this._designTools;
  }
  addDesignTool(tool) {
    if (!tool || typeof (tool) !== 'string' || tool.trim() === '') {
      throw new Error('Tool must be a non-empty string');
    }
    else this._designTools.push(tool);
  }
}

class Company {
  #employees;
  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [...employees];
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
    if (!employee || !(employee instanceof Employee)) {
      throw new Error('Employee must be an instance of the Employee class');
    }
    else {
      const result = this.#employees.find(el => el.firstName === employee.firstName && el.lastName === employee.lastName);
      if (result) {
        throw new Error('Employee already exist');
      }
      this.#employees.push(employee);
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
      throw new Error('Employee with the given first name does not exist');
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
  getEmployeesByProfession(profession) {
    switch (profession) {
      case 'Developer':
        return this.#employees.filter(employee => employee instanceof Developer);
      case 'Manager':
        return this.#employees.filter(employee => employee instanceof Manager);
      case 'Designer':  
        return this.#employees.filter(employee => employee instanceof Designer);
      default:
        return [];
    }   
  }
}

const dev1 = new Developer('Evilla', 'Left', 1000, ['JavaScript', 'TypeScript']);
const dev2 = new Developer('Milly', 'Kollinen', 2000, ['JavaScript', 'Java']);

const man1 = new Manager('Konsta', 'Lahtinen', 3000, 5);
const man2 = new Manager('Irma', 'Pillinen', 4000, 6);

const des1 = new Designer('Kirill', 'Dmitriev', 5000, ['Figma', 'Photoshop', 'Wacom']);
const des2 = new Designer('Dmitriy', 'Petrov', 6000, ['Photoshop']);

const company = new Company('The best company', '(358)123-45-45', 'Perfect Street');

company.addEmployee(dev1);
company.addEmployee(dev2);
company.addEmployee(man1);
company.addEmployee(man2);
company.addEmployee(des1);
company.addEmployee(des2);

console.log(company.getEmployeesByProfession('Developer'));
console.log(company.getEmployeesByProfession('Manager'));
console.log(company.getEmployeesByProfession('Designer'));
console.log(company.getEmployeesByProfession(''));
console.log(company.getEmployeesByProfession('BA'));

export { Employee, Company, Designer, Developer, Manager };
