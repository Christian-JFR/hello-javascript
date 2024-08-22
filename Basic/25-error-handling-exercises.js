/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Captura una excepción utilizando try-catch
try {
	console.log(ThisVariableDoesNotExist);
} catch {
	console.log("an error has occurred");
}

console.log("Fin Ej 1\n");

// 2. Captura una excepción utilizando try-catch y finally
try {
	console.log(ThisVariableDoesNotExist);
} catch {
	console.log("an error has occurred 🔴");
} finally {
	console.log("Finally 🟢");
}

console.log("Fin Ej 2\n");

// 3. Lanza una excepción genérica
try {
	console.log(ThisVariableDoesNotExist);
} catch (error) {
	console.log("an error has occurred 🔴", error.message);
} finally {
	console.log("Finally 🟢");
}

console.log("Fin Ej 3\n");

// 4. Crea una excepción personalizada
function divide(num1, num2) {
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		throw new TypeError("You can Divide only Numbers");
	}
	if (num2 === 0) {
		throw new DivideByZeroError("Do not divide by zero.", num1, num2);
	}
	return num1 / num2;
}
class DivideByZeroError extends Error {
	constructor(message, num1, num2) {
		super(message);
		this.num1 = num1;
		this.num2 = num2;
	}

	printOperands() {
		console.log(`${this.num1} / ${this.num2}`);
	}
}

console.log("Fin Ej 4\n");

// 5. Lanza una excepción personalizada
try {
	console.log(divide(5, 0));
} catch (error) {
	error.printOperands();
	console.log("an error has occurred 🔴", error.message);
}

console.log("Fin Ej 5\n");

// 6. Lanza varias excepciones según una lógica definida
try {
	console.log(divide(5, "2"));
} catch (error) {
	console.log("an error has occurred 🔴", error.message);
}

console.log("Fin Ej 6\n");

// 7. Captura varias excepciones en un mismo try-catch
try {
	console.log(divide(5, 2));
	console.log(divide(5, 0));
	console.log(divide(5, "2"));
} catch (error) {
	if (error instanceof TypeError) {
		console.log("TypeError:", error.message);
	} else if (error instanceof Error) {
		error.printOperands();
		console.log("DivideByZeroError:", error.message);
	}
}

console.log("Fin Ej 7\n");

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const values = ["3.14", "Hello", "7.3e-4", true, null, 25.4, 66, undefined];

for (let i = 0; i < values.length; i++) {
	try {
		const floatValue = parseFloat(values[i]).toFixed(2);
		if (isNaN(floatValue)) {
			throw new Error("some types can not be converted to float");
		}
		console.log(
			`Original Value: ${values[i]}, Value converted to float: ${floatValue}`
		);
	} catch (error) {
		console.error(
			`Error ${String.fromCharCode(0x2716)} failed to convert "${
				values[i]
			}" to float: ${error.message}`
		);
	}
}

console.log("Fin Ej 8\n");

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropertyDoesNotExistError extends Error {
	constructor(message, key) {
		super(message);
		this.key = key;
	}
}

const user1 = {
	name: "Christian",
	email: "chris@email.com",
};

function keyExist(obj, key) {
	try {
		if (!obj.hasOwnProperty(key)) {
			throw new PropertyDoesNotExistError(`Property "${key}" does not exist`);
		} else {
			const value = obj[key];
			console.log(`${key}: ${value}`);
		}
	} catch (error) {
		console.log(String.fromCharCode(0x2716), error.message);
	}
}
keyExist(user1, "mail");
keyExist(user1, "email");

console.log("Fin Ej 9\n");

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function fnTest() {
	const TEST = (Math.random() * 10).toFixed(2);
	if (TEST < 7.0) {
		throw new Error(`${TEST} 🔴`);
	}
	return TEST;
}

testAttempts(fnTest);

function testAttempts(fn) {
	let attempts = 0;
	const MAX_ATTEMPTS = 10;

	const fnAttempts = () => {
		attempts++;

		try {
			const TEST = fn();
			console.log(`Successful test ${TEST} 🟢`);
		} catch (error) {
			if (attempts < MAX_ATTEMPTS) {
				console.error(`Error in attempt ${attempts}: ${error.message}`);
				console.log(`retrying in 1 seconds...`);
				setTimeout(fnAttempts, 1000); // Retrasar el siguiente intento en 1 segundo
			} else {
				console.error(
					"there are no more attempts - last error: ",
					error.message
				);
			}
		}
	};

	fnAttempts();
}
