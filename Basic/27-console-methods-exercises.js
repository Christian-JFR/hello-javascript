/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// 1. Crea un función que utilice error correctamente
function divide(a, b) {
	if (b === 0) {
		console.error("Error: Do not divide by zero.", a, b);
		return;
	}

	const result = `${a} / ${b} = ${a / b}`;
	return result;
}

console.log(divide(7, 2));
console.log(divide(7, 0));

// 2. Crea una función que utilice warn correctamente
function isPasswordStrength(password) {
	if (password.length < 8) {
		console.warn(
			"Warning: Password is too short. It should be at least 8 characters long."
		);
		return false;
	}

	return true;
}

console.log(isPasswordStrength("12345678"));
console.log(isPasswordStrength("1234"));
// 3. Crea una función que utilice info correctamente
const user = {
	name: "Christian Joseph",
	email: "chrisjos@mail.com",
	isPremium: true,
};

function logUserInfo(user) {
	console.info(`User information:`);
	console.info(`- Name: ${user.name}`);
	console.info(`- Email: ${user.email}`);
	console.info(`- Is Premium: ${user.isPremium}`);
}

logUserInfo(user);

// 4. Utiliza table
const cubone = {
	name: "cubone",
	id: 104,
	height: 40,
	weight: 65,
	base_experience: 64,
	stats: {
		hp: 50,
		attack: 50,
		defense: 95,
		"special-attack": 40,
		"special-defense": 50,
		speed: 35,
	},
	type: "ground",
};

console.table(cubone);

// 5. Utiliza group
console.group(cubone.name);
console.log("Id:", cubone.id);
console.log("Height:", cubone.height);
console.log("Weight:", cubone.weight);
console.log("Type:", cubone.type);
console.groupEnd();

// 6. Utiliza time
console.time("Test...");
for (let key in cubone) {
	console.log(`${key}: ${cubone[key]}`);
}
console.timeEnd("Test...");

// 7. Valida con assert si un número es positivo
function isPositive(a) {
	console.assert(a > 0, `${a} is not a positive number.`);
}
isPositive(0);
isPositive(1);
isPositive(-1);

// 8. Utiliza count
function rollDice() {
	const result = Math.floor(Math.random() * 6) + 1;
	console.log(`The dice rolled: ${result}`);
	console.count(`Rolled a ${result}`);
}

for (let i = 0; i < 5; i++) {
	rollDice();
}

// 9. Utiliza trace
for (let i = 0; i < 5; i++) {
	rollDice();
	console.trace("Dice Rolled");
}
// 10. Utiliza clear

for (let i = 1_000_000_000; i >= 0; i--) {
	if (i === 0) {
		console.clear();
	}
}
