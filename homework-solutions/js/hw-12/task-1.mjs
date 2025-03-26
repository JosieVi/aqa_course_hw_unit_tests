// Task 1
/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль.
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/
// 1
function delayTwoSeconds(callback) {
    setTimeout(() => callback(), 2000);
}
// 2
const newPromise1 = new Promise((resolve) => {
    resolve(1);
});
newPromise1.then(result => console.log(result));
// 3
const newPromise2 = new Promise((resolve, reject) => {
    reject('Promise failed');
});
newPromise2.catch(result => console.log(result));
// 4
const promiseNumber = (value) => {
    return new Promise((resolve) => {
        resolve(value);
    });
};
// 5
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) => result.forEach((el) => console.log(`Task 5: result = ${el}`)));
// 6
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) => result.forEach((el) => console.log(`Task 6: Value = ${el.value}, status = ${el.status}`)));
// 7
async function newFunction1() {
    try {
        const result1 = await promiseNumber(1);
        console.log((`Task 7, the result of newFunction1 is ${result1}`));
        const result2 = await promiseNumber(2);
        console.log((`Task 7, the result of newFunction1 is ${result2}`));
        const result3 = await promiseNumber(3);
        console.log((`Task 7, the result of newFunction1 is ${result3}`));
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
}
newFunction1();
async function newFunction2() {
    try {
        const result1 = await promiseNumber(1);
        if (result1) {
            console.log((`Task 7, the result of newFunction2 is: Value = ${result1}, status = success`));
        }
        const result2 = await promiseNumber(2);
        if (result2) {
            console.log((`Task 7, the result of newFunction2 is: Value = ${result2}, status = success`));
        }
        const result3 = await promiseNumber(3);
        if (result3) {
            console.log((`Task 7, the result of newFunction2 is: Value = ${result3}, status = success`));
        }
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
}
newFunction2();