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

async function getSummary() {
    try {
        const [responseUsers, responseAlbums, responsePhotos] = await Promise.all([fetch(urlForUsers), fetch(urlForAlbums), fetch(urlForPhotos)]);
        const users = await responseUsers.json();
        const albums = await responseAlbums.json();
        const photos = await responsePhotos.json();

        let result = [];
        users.forEach((user) => {
            result.push({
                name: user.name,
                email: user.email,
                phone: user.phone,
                company: user.company.name,
                albums: [],
            });
            albums.filter((album) => album.userId === user.id).forEach((el) => {
                result.at(-1).albums.push(`${el.title} (${photos.filter((photo) => photo.albumId === el.id).length} photos)`);
            });
        });
        console.log(result);
    }
    catch (error) {
        console.error(`Error: ${error}`);
    }
}
getSummary();