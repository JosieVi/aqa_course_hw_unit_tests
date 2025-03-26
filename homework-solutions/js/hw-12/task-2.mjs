/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
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
// async function createTodo(mainPartOfTodo) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
//             method: 'POST',
//             body: JSON.stringify(mainPartOfTodo),
//             headers: {
//                 'Content-type': 'application/json',
//             },
//         });
//         if (response.status !== 201) {
//             throw new Error(`Request failed with status: ${response.status}`);
//         }
//         const data = await response.json();
//         for (let key in mainPartOfTodo) {
//             console.log(`key = ${key}, data[key] = ${data[key]}, mainPartOfTodo[key] = ${mainPartOfTodo[key]}`);
//             if (data[key] !== mainPartOfTodo[key]) {
//                 throw new Error(`Data in response doesn't match data in request`);
//             }
//         }
//         return data;
//     }
//     catch (error) {
//         console.error(`Error: ${error}`);
//     }
//     finally {
//         console.log('Request completed');
//     }
// }
// createTodo({ Title: "My todo", Type: "Important" }).then((result) => console.log(result));

// Task 3
/*
На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)

*/
const urlForUsers = 'https://jsonplaceholder.typicode.com/users'; 
const urlForPhotos = 'https://jsonplaceholder.typicode.com/photos';
const urlForAlbums = 'https://jsonplaceholder.typicode.com/albums';

async function getSummary(){
    try {
        const responseUsers = await fetch(urlForUsers);
        const users = await responseUsers.json();        
        const responseAlbums = await fetch(urlForAlbums);
        const albums = await responseAlbums.json();
        //console.log(albums.filter((album) => album.userId === 1));
        const responsePhotos = await fetch(urlForPhotos);
        const photos = await responsePhotos.json();
        
        //let result = [];
        let b = [];
        let a = [];
        let countOfPhotoOfCurrentUser = [];
        let albumsOfCurrentUser = [];
        users.forEach((user) => {            
            albumsOfCurrentUser = albums.filter((album) => album.userId === user.id);
            countOfPhotoOfCurrentUser = albumsOfCurrentUser.forEach((album) => {
                b.push({
                    //name: user.name,
                    title: album.title, 
                    count: photos.filter((photo) => photo.albumId === album.id).length
                })
            })           
           
            a.push({
                name: user.name,
                email: user.email,
                phone: user.phone,
                company: user.company.name, 
                albums: (b.filter((el) => el.name === user.name))       
                })
            b.length = 0;
            });
        

        
        // console.log(b.filter((el) => el.name === user.name));
        


        //console.log(a.albums);
            //c = photos.filter((photo) => photo.albumId === album.id).length;

            
                //console.log(a);
                //result = [...a, ...b]
        
        //console.log(result);
        // users.forEach((user) => {            
        //     albums.filter((album) => album.userId === user.id).forEach((al) => {
        //         let count = photos.filter((photo) => photo.albumId === al.id).length;
        //         return b = {
        //             title: al.title, 
        //             count: count,
        //         }
            
        //     })
        //     result.push({
        //         name: user.name,
        //         email: user.email,
        //         phone: user.phone,
        //         company: user.company.name,
        //         albums: b
        // })
        // })
            
        //console.log(result);

    }      
    catch (error) {
        console.error(`Error: ${error}`);

    }

}
getSummary();


// async function fetchAsyncUsers() {
//     try {
//         const response = await fetch(urlForUsers);
//         if (response.status !== 200) {
//             throw new Error(`Request failed with status: ${response.status}`);
//         }
//         const users = await response.json();
//         const usersForPrint = users.map((user) => {
//             return {
//                 name: user.name,
//                 email: user.email,
//                 phone: user.phone,
//                 company: user.company.name
//             }
//         })
//         console.log(usersForPrint);
//         return usersForPrint;
//     }
//     catch (error) {
//         console.error(`Error: ${error}`);
//     }
// }

// async function fetchAsyncAlbums(userId){
//     try {
//         const response = await fetch(urlForAlbums);
//         if (response.status !== 200) {
//             throw new Error(`Request failed with status: ${response.status}`);
//         }
//         const albums = await response.json();
//         const albumsForPrint = albums.filter(user => user.userId === userId).map((user) => {
//             return {    
//                 albumID: user.id, 
//                 albumName: user.title
//             }
//         });
//         console.log(albumsForPrint);
//         return albumsForPrint;
//     }
//     catch (error) {
//         console.error(`Error: ${error}`);
//     }
// }
// fetchAsyncAlbums(1);


// async function fetchAsyncPhotos(albumId){
//     try {
//         const response = await fetch(urlForPhotos);
//         if (response.status !== 200) {
//             throw new Error(`Request failed with status: ${response.status}`);
//         }
//         const photos = await response.json();
//         const photosForPrint = photos.reduce((acc, photo) => {  
//             if (photo.albumId === albumId) {
//                 acc++;
//             }
//             return acc;
//         },0)
//         console.log(photosForPrint);
//         return photosForPrint;
//     }
//     catch (error) {
//         console.error(`Error: ${error}`);
//     }
// }
// fetchAsyncPhotos(1);

// Promise.all([fetchAsyncUsers(), fetch(urlForAlbums), fetch(urlForPhotos)]).then((result) => console.log(result)).catch((error) => console.error(error));

    
//fetchAsyncUsers();

// Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
//  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 