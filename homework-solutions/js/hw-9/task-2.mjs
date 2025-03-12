/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter({name, age}) {
  if (!name || !age) throw new Error('Invalid character data');
  characters.push({name, age});  
  return characters;
}
console.log(addCharacter({name: "Evilla", age: 30}));

function getCharacter(name) {
  return characters.find(el => el.name === name);
}
console.log(getCharacter('Evilla'));

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number' || +minAge < 0) throw new Error('Invalid minAge data');
  else {
    const result = characters.filter(el => el.age >= +minAge);
    return result;
  }
}
console.log(getCharactersByAge(5));

function updateCharacter(name, {name: newName, age: newAge}) {
  let objectForUpdating = getCharacter(name);
  objectForUpdating.name = newName;
  objectForUpdating.age = newAge;
  return characters;
}
console.log(updateCharacter("Evilla", { name: 'Senni', age: 30}));

function removeCharacter(name) {  
  const indexOfElementForRemoving = characters.findIndex(el => el.name === name);
  if (!name || indexOfElementForRemoving === -1) throw new Error('Invalid name data or name is not exist');
  else characters.splice(indexOfElementForRemoving, 1);  
  return characters;
}
console.log(removeCharacter("Barney"));

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
