/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i1 = 1; i1 <= 20; i1++) {
	console.log("i1 = ", i1);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let result = 0;
let i2 = 0;

while (i2 <= 100) {
	result += i2;
	i2++;
}

console.log(result);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i3 = 2; i3 <= 50; i3 = i3 + 2) {
	console.log(i3);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const names = [
	"Sofía",
	"Martín",
	"Lucía",
	"Diego",
	"Emma",
	"Mateo",
	"Olivia",
	"Hugo",
	"Valentina",
	"Benjamín",
	"Sara",
	"Daniel",
	"Victoria",
	"Alejandro",
	"Carla",
	"David",
	"Andrea",
	"Miguel",
	"Laura",
	"Álvaro",
	"María",
	"Javier",
	"Elena",
	"Manuel",
	"Ana",
];

for (let name of names) {
	console.log(name);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let mensaje =
	"El trabajo en equipo en el ámbito de la programación permite abordar problemas complejos de manera más eficiente y efectiva.".toLowerCase();
let totalVocales = 0;

for (let letra of mensaje) {
	if (
		letra === "a" ||
		letra === "e" ||
		letra === "i" ||
		letra === "o" ||
		letra === "u" ||
		letra === "á" ||
		letra === "é" ||
		letra === "í" ||
		letra === "ó" ||
		letra === "ú"
	) {
		totalVocales++;
	}
}
console.log(`Hay ${totalVocales} vocales en la cadena de texto "${mensaje}"`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const numbers = [2, 4, 6, 8, 10];
let totalMult = 1;

for (let i = 0; i < numbers.length; i++) {
	// console.log(numbers[i]);
	totalMult *= numbers[i];
}
console.log(totalMult);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
const factor1 = 5;
let factor2 = 0;
let product;
while (factor2 <= 10) {
	product = factor1 * factor2;
	console.log(`${factor1} x ${factor2} = ${product}`);
	factor2++;
}

// 8. Usa un bucle para invertir una cadena de texto

let message =
	"Teamwork in programming allows complex problems to be tackled more efficiently and effectively.";
console.log(message);

let char = "";
for (let i8 = message.length - 1; i8 >= 0; i8--) {
	char = char + message[i8];
}
message = char;
console.log(message);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let numA = 0;
let numB = 1;
let aux;

for (let i9 = 0; i9 < 10; i9++) {
	console.log(`El ${i9 + 1} numero de la secuencia Fibonacci es: ${numA}`);
	aux = numA + numB;
	numA = numB;
	numB = aux;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const numeros = [4, 8, 12, 16, 20];
const mayoresQueDiez = [];

let i10 = 0;
while (i10 < numeros.length) {
	if (numeros[i10] > 10) {
		mayoresQueDiez.push(numeros[i10]);
	}
	i10++;
}

console.log(mayoresQueDiez);
