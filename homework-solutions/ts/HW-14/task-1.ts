// Task 1
/*
1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
4. Создайте тип UserType из объекта QA (используйте typeof)
5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
10. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
    function wrapInArray<T> {
      // ваш код здесь
    }
    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']

11. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).
    function getLastItem<T> {
      // ваш код здесь
    }
    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c'
*/

// 1
interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}
const QA: IEmployee = {
  name: "Evilla",
  salary: 50000,
  isManager: true,
}

// 2
type EmployeeKeys = keyof IEmployee;

// 3
type QaKeys = keyof typeof QA;

// 4
type UserType = typeof QA;

// 5
type PartialEmployee = Partial<IEmployee>;

// 6
type NameAndSalaryFromEmployee = Pick<IEmployee, 'name' | 'salary'>;

// 7
type AllFieldsFromEmployeeExceptIsManager = Omit<IEmployee, 'isManager'>;

// 8
type ReadOnlyIemployee = Readonly<IEmployee>;

// 9
const qaRecord: Record<string, QaKeys> = {
  firstKey: 'name',
  secondKey: 'salary',
  thirdKey: 'isManager',
};

// 10     
function wrapInArray<T>(arg: T): T[] {
  return [arg];
}
const numberArray = wrapInArray(5);
console.log(numberArray); // [5]
const stringArray = wrapInArray('Hello');
console.log(stringArray); // ['Hello']

// 11
function getLastItem<T>(arg: T[]): T {
  if (arg.length === 0) {
    throw new Error('Array is empty');
  }
  return arg[arg.length - 1];
}

console.log(getLastItem([1, 2, 3, 4])); // 4
console.log(getLastItem(['a', 'b', 'c'])); // 'c'