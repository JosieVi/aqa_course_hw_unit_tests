// Task 2
/*
Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]

*/

function customMap<T, U>(array: T[], callback: (element: T, index: number, array: T[]) => U): U[] {
   let result: U[] = [];
   for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
   }
   return result;
}

let exampleOfCustomMap1 = customMap([1, 2, 7, 4, 5], (element, index) => element * index);
let exampleOfCustomMap2 = customMap([1, 2, 7, 4, 5], (element, index) => `${element}`);
console.log(exampleOfCustomMap1);
console.log(exampleOfCustomMap2);