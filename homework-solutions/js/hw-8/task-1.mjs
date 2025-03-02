/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/

const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach = [];
let map;
let filter;
let find;
let sort;
let reduce;
let some;
let every;

numbers.forEach((value) => (value % 3 === 0) && forEach.push(value));
map = numbers.map((value) => value - numbers.length);
filter = numbers.filter((value, index, array) => array[index] > array[index - 1]);
find = numbers.find((value, index) => value === index);
sort = [...numbers].sort((a,b) => a - b);
reduce = numbers.reduce((result, value) => result + value, 0);
some = numbers.some((value) => value > 90);
every = numbers.every((value) => (value + '').length === 2);
console.log(`forEach - ${forEach} \n map - ${map} \n filter - ${filter} \n find - ${find} \n sort - ${sort} \n reduce - ${reduce} \n some - ${some} \n every - ${every}`);





export { forEach, map, filter, find, sort, reduce, some, every };
