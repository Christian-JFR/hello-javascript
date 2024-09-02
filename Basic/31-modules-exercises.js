/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Exporta una función
export function hoursToSeconds(hours) {
	return hours * 60 * 60;
}

// 2. Exporta una constante
export const SECONDS_IN_A_DAY = 86_400;

// 3. Exporta una clase
export class Product1 {
	constructor(name, price, description, image, stock) {
		this.name = name;
		this.price = price;
		this.description = description;
		this.image = image;
		this.stock = stock;
	}
}

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// funcion

// export default function hoursToMinutes(hours) {
// 	return hours * 60;
// }

// constante
// const MINUTES_IN_A_DAY = 1_440;
// export default MINUTES_IN_A_DAY;

// clase

export default class Product2 {
	constructor(name, price, description, image, stock) {
		this.name = name;
		this.price = price;
		this.description = description;
		this.image = image;
		this.stock = stock;
	}
}

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import {
	secondsToMiliSeconds,
	HOURS_IN_A_DAY,
	Product3,
} from "./31-9-export-from-another-directory/31-exercise-9.js";

console.log(secondsToMiliSeconds(2));

console.log(HOURS_IN_A_DAY * 7);

const cap3 = new Product3(
	"black cap 3",
	21.99,
	"New Deluxe Cotton Cap",
	"blac-cap-3.jpg",
	12
);

console.log(cap3);
