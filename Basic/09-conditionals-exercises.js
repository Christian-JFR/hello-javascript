/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Christian";

if (myName === "Christian") {
	console.log(`The name is ${myName}`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "admin";
let password = "1234567890";

if (user === "admin" && password === "1234567890") {
	console.log("successful login");
} else {
	console.log("incorrect user or password");
}

// con op. ternario

let message =
	user !== "admin" || password !== "1234567890"
		? "Incorrect user or password"
		: "Successful Login";
console.log(message);

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let myNumber = -4;

if (myNumber > 0) {
	console.log(`${myNumber} is Positive.`);
} else if (myNumber < 0) {
	console.log(`${myNumber} is Negative.`);
} else {
	console.log("The number is 0");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

const ofLegalAge = 18;
let userAge = 15;
let yearsAway;

if (userAge >= ofLegalAge) {
	console.log("You can vote");
} else {
	yearsAway = ofLegalAge - userAge;
	console.log(`you are ${yearsAway} years away from voting`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let category = userAge >= ofLegalAge ? "adulto" : "menor";
console.log(category);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = "February";

if (month === "March" || month === "April" || month === "May") {
	console.log("we are in Spring season");
} else if (month === "June" || month === "July" || month === "August") {
	console.log("we are in Summer season");
} else if (
	month === "September" ||
	month === "October" ||
	month === "November"
) {
	console.log("we are in Autumn season");
} else if (
	month === "December" ||
	month === "January" ||
	month === "February"
) {
	console.log("we are in Winter season");
} else {
	console.log("Enter a valid Month");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let year = 2024;

if (month === "February") {
	if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
		console.log(`in ${year} ${month} has 29 days`);
	} else {
		console.log(`in ${year} ${month} has 28 days`);
	}
} else if (
	month === "January" ||
	month === "March" ||
	month === "May" ||
	month === "July" ||
	month === "August" ||
	month === "October" ||
	month === "December"
) {
	console.log(`${month} has 31 days`);
} else if (
	month === "April" ||
	month === "June" ||
	month === "September" ||
	month === "November"
) {
	console.log(`${month} has 30 days`);
} else {
	console.log("Enter a valid Month");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "es";

switch (language) {
	case "es":
		console.log("Hola Mundo");
		break;
	case "en":
		console.log("Hello World");
		break;
	default:
		console.log("Enter a valid language");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (month) {
	case "January":
		console.log("we are in Winter season");
		break;
	case "February":
		console.log("we are in Winter season");
		break;
	case "March":
		console.log("we are in Spring season");
		break;
	case "April":
		console.log("we are in Spring season");
		break;
	case "May":
		console.log("we are in Spring season");
		break;
	case "June":
		console.log("we are in Summer season");
		break;
	case "July":
		console.log("we are in Summer season");
		break;
	case "August":
		console.log("we are in Summer season");
		break;
	case "September":
		console.log("we are in Autumn season");
		break;
	case "October":
		console.log("we are in Autumn season");
		break;
	case "November":
		console.log("we are in Autumn season");
		break;
	case "December":
		console.log("we are in Winter season");
		break;
	default:
		console.log("Enter a valid Month");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let leapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

switch (month) {
	case "January":
		console.log(`${month} has 31 days`);
		break;
	case "February":
		switch (leapYear) {
			case true:
				console.log(`in ${year} ${month} has 29 days`);
				break;
			default:
				console.log(`in ${year} ${month} has 28 days`);
		}
		break;

	case "March":
		console.log(`${month} has 31 days`);
		break;
	case "April":
		console.log(`${month} has 30 days`);
		break;
	case "May":
		console.log(`${month} has 31 days`);
		break;
	case "June":
		console.log(`${month} has 30 days`);
		break;
	case "July":
		console.log(`${month} has 31 days`);
		break;
	case "August":
		console.log(`${month} has 31 days`);
		break;
	case "September":
		console.log(`${month} has 30 days`);
		break;
	case "October":
		console.log(`${month} has 31 days`);
		break;
	case "November":
		console.log(`${month} has 30 days`);
		break;
	case "December":
		console.log(`${month} has 31 days`);
		break;
	default:
		console.log("Enter a valid Month");
}
