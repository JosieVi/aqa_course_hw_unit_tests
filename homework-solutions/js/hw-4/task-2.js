/*

Работа с оператором IF:

  1. Создать переменную "minAge" и присвоить ей значение 18
  2. Создать переменную "maxAge" и присвоить ей значение 60
  3. Создать переменную "age", в которую вы будете вводить возраст при выполнении программы
  4. Добавьте проверку: если тип данных в переменной age не number - вывести в консоль Incorrect data type
  5. Создать if в котором будете проверять весь код переменной age со следующими условиями:
    - Если age меньше чем minAge, вывести в консоль "You don't have access cause your age is " + "age" + " It's less then "
    - Если "age" больше либо равно  minAge и меньше  maxAge, вывести в консоль "Welcome  !"
    - Если "age" больше maxAge, вывести в консоль "Keep calm and look Culture channel".
    - Иначе выводите "Technical work".
  6. Проверить задание со следующими значениями в переменной age: 10, 17, 18, 19, 59, 60, 61

  */

let minAge = 18;
let maxAge = 60;
let age;
typeof age !== 'number' && console.log('Incorrect data type');
if (age) {
  if (age < minAge) {
    console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`);
  }
  else if (minAge <= age && age <= maxAge) {
    console.log('Welcome!');
  }
  else if (age > maxAge) {
    console.log('Keep calm and look Culture channel');
  }
}
else {
  console.log('Technical work');
}

