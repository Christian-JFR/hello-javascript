/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

const a = 1;
console.log(typeof a);
function suma(num1, num2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
		const result = num1 + num2;
		console.log(result);
	} else {
		console.log("Introduzca 2 numeros");
	}
}

suma(7, 8);
suma(9, -12);
suma("a", 3);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const numeros = [7, 5, 8, 9, 4, 0, -7, 80];

function greaterNumber(arr) {
	let aux = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		const greater = arr[i] > aux ? (aux = arr[i]) : (aux = aux);
	}
	console.log(aux);
}

greaterNumber(numeros);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function howManyVocals(str) {
	const message = str.toLowerCase();
	let totalVocals = 0;

	for (const letter of message) {
		if (
			letter === "a" ||
			letter === "e" ||
			letter === "i" ||
			letter === "o" ||
			letter === "u" ||
			letter === "á" ||
			letter === "é" ||
			letter === "í" ||
			letter === "ó" ||
			letter === "ú"
		) {
			totalVocals++;
		}
	}
	console.log(`There is ${totalVocals} vocals in the string "${message}"`);
}

howManyVocals("SOLODOLO");

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const lowercaseStrings = [
	"variables",
	"function",
	"datatypes",
	"javascript",
	"nodejs",
	"loops",
	"set",
	"map",
	"conditionals",
	"operators",
];

function capitalizeALl(arr) {
	const uppercaseStrings = [];
	for (const word of arr) {
		const wordUppercase = word.toUpperCase();
		uppercaseStrings.push(wordUppercase);
	}
	return uppercaseStrings;
}

console.log(capitalizeALl(lowercaseStrings));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(6));
console.log(isPrime(0));
console.log(isPrime(101));
console.log(isPrime(19));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

const numbers1 = [1, 2, 3, 4, 5, 6, 7];
const numbers2 = [2, 3, 5, 7, 11, 13];

function commonElements(arr1, arr2) {
	const finalArray = [];
	let commonItem;
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				commonItem = arr2[j];
				finalArray.push(commonItem);
			}
		}
	}
	return finalArray;
}

console.log(commonElements(numbers1, numbers2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const numbers3 = [2, 4, 6, 8, 10];

function addEvens(arr) {
	let result = 0;
	for (const num of arr) {
		if (num % 2 === 0) {
			const add = num;
			result += add;
		}
	}
	return result;
}

console.log(addEvens(numbers1));
console.log(addEvens(numbers2));
console.log(addEvens(numbers3));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function squared(arr) {
	const squaredArr = [];
	arr.forEach((element) => {
		squaredArr.push(element ** 2);
	});
	return squaredArr;
}

console.log(squared(numbers1));
console.log(squared(numbers2));
console.log(squared(numbers3));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

const originalString = "Hello World!! testing word reversal in JavaScript";

function reverseWords(aString) {
	const wordsArr = [];
	const words = aString.split(" ");

	for (let i = words.length - 1; i >= 0; i--) {
		wordsArr.push(words[i]);
	}

	const reverseString = wordsArr.join(" ");

	return reverseString;
}

console.log(reverseWords(originalString));

// 10. Crea una función que calcule el factorial de un número dado

// con un for
function forFactorial(n) {
	let factorial = 1;

	if (n <= 1) {
		return factorial;
	}

	for (let i = 1; i <= n; i++) {
		factorial *= i;
	}

	return factorial;
}

console.log(forFactorial(0));
console.log(forFactorial(1));
console.log(forFactorial(2));
console.log(forFactorial(5));
console.log(forFactorial(7));

// con funcion recursiva

function fnFactorial(n) {
	let factorial = 1;
	if (n <= 1) {
		return factorial;
	}
	factorial = n * fnFactorial(n - 1);
	return factorial;
}

console.log(fnFactorial(0));
console.log(fnFactorial(1));
console.log(fnFactorial(2));
console.log(fnFactorial(5));
console.log(fnFactorial(7));
