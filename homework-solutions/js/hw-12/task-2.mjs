// Task 2
/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/
const urlForTODOs = 'https://jsonplaceholder.typicode.com/todos';
async function createTodo(mainPartOfTodo) {
    try {
        const response = await fetch(urlForTODOs, {
            method: 'POST',
            body: JSON.stringify(mainPartOfTodo),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (response.status !== 201) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        for (let key in mainPartOfTodo) {
            console.log(`key = ${key}, data[key] = ${data[key]}, mainPartOfTodo[key] = ${mainPartOfTodo[key]}`);
            if (data[key] !== mainPartOfTodo[key]) {
                throw new Error(`Data in response doesn't match data in request`);
            }
        }
        return data;
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
    finally {
        console.log('Request completed');
    }
}
createTodo({ title: "My todo", type: "Important" }).then((result) => console.log(result));