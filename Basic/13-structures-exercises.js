/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

const animals = ["Dog", "Cat", "Lion", "Tiger", "Bear"];

console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift("Wolf");
animals.push("Eagle");

console.log(animals);

// 3. Elimina el que se encuentra en tercera posición

console.log(animals.splice(3, 1));

console.log(animals);

// 4. Crea un set que almacene cinco libros

const books = new Set(["libro-1", "libro-2", "libro-3", "libro-4", "libro-5"]);

console.log(books);

// 5. Añade dos más. Uno de ellos repetido

books.add("libro-6");
books.add("libro-5");

console.log(books);

// 6. Elimina uno concreto a tu elección

books.delete("libro-1");

console.log(books);

// 7. Crea un mapa que asocie el número del mes a su nombre

const months = new Map([
	["1", "January"],
	["2", "February"],
	["3", "March"],
	["4", "April"],
	["5", "May"],
	["6", "June"],
	["7", "July"],
	["8", "August"],
	["9", "September"],
	["10", "October"],
	["11", "November"],
	["12", "December"],
]);

console.log(months);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(months.has("5"), months.get("5"));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("SUMMER", [months.get("6"), months.get("7"), months.get("8")]);

console.log(months);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

const arrayColors = ["red", "green", "blue", "red"];
console.log(arrayColors);

const setColors = new Set(arrayColors);
console.log(setColors);

const mapColors = new Map();
mapColors.set("colors", setColors);
console.log(mapColors);
