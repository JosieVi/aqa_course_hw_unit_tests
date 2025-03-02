/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  numbers.sort((a,b) => a - b);
  if (numbers.at(-1) !== numbers.length){
    return numbers.find((value, index) => value !== index + 1) - 1;
  }
  else return numbers.at(-1) + 1;
}
const arr1 = [5,2,7,3,8,1,6];
const arr2 = [1,2,3,4];
console.log(findMissingNumber(arr1));
console.log(findMissingNumber(arr2));

export { findMissingNumber };
