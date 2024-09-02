// 9. Exporta una función, una constante y una clase desde una carpeta

// una función
export function secondsToMiliSeconds(seconds) {
	return seconds * 1000;
}

// una constante
export const HOURS_IN_A_DAY = 24;

// una clase
export class Product3 {
	constructor(name, price, description, image, stock) {
		this.name = name;
		this.price = price;
		this.description = description;
		this.image = image;
		this.stock = stock;
	}
}
