/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let colors = ["red", "blue", "pink", "green"];
let [color1, color2] = colors;

console.log(color1, color2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [, , , , color5 = "purple"] = colors;
console.log(color1, color2, color5);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const enemy = {
	name: "Goblin",
	hp: 50,
	power: 15,
	isBoss: false,
	loot: {
		normal: ["gold", "potion"],
		better: ["gemstone", "nail"],
	},
};

let { hp, power } = enemy;
console.table(enemy);
console.log(hp, power);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { hp: health, power: damage } = enemy;
console.log(health, damage);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {
	loot: { normal: common },
	loot: { better: rare },
} = enemy;

console.log(common, rare);

// 6. Usa propagación para combinar dos arrays en uno nuevo

const colorsA = ["yellow", "blue", "red"];
const colorsB = ["green", "orange", "purple"];

const colorsC = [...colorsA, ...colorsB];
console.log(colorsC);

// 7. Usa propagación para crear una copia de un array

const colorsCCopy = [...colorsC];
console.log(colorsCCopy);

// 8. Usa propagación para combinar dos objetos en uno nuevo
const enemy2 = {
	name: "Dragon",
	health: 50,
	damage: 15,
	isBoss: true,
};

const loot2 = {
	normal: ["gold", "potion"],
	better: ["gemstone", "sword"],
};

const dragon2 = { ...enemy2, ...loot2 };
console.table(dragon2);

// 9. Usa propagación para crear una copia de un objeto
const goblin = { ...enemy };
console.table(goblin);

// 10. Combina desestructuración y propagación
const colorsX = ["yellow", "blue", "red"];
const colorsY = ["green", "orange", "purple"];

const [colorsX1, colorsX2, colorsX3, colorsY1, colorsY2, colorsY3] = [
	...colorsX,
	...colorsY,
];

console.log(colorsX1, colorsX2, colorsX3, colorsY1, colorsY2, colorsY3);
