/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

const myArray = [1, 2, 3, 4];

const person = {
	name: "Brais",
	age: 37,
	alias: "MoureDev",
};

const myValue = myArray[1];
console.log(myValue);

const myName = person.name;
console.log(myName);

// Desestructuración

// Sintaxis arrays

const [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;
console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);

// Sintaxis arrays con valores predeterminados

const [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] =
	myArray;
console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);

// Ignorar elementos array

const [myValue10, , , myValue13] = myArray;
console.log(myValue10);
console.log(myValue13);

// Sintaxis objects

const { name, age, alias } = person;
console.log(name);
console.log(age);
console.log(alias);

// Sintaxis objects con valores predeterminados

const { name2, age2, alias2, email = "email@email.com" } = person;
console.log(name2); // No existe
console.log(age2); // No existe
console.log(alias2); // No existe
console.log(email);

// Sintaxis objects con nuevos nombres de variables

const { alias: alias3, name: name3, age: age3 } = person;
console.log(name3);
console.log(age3);
console.log(alias3);

// Objects anidados

const person3 = {
	name: "Brais",
	age: 37,
	alias: "MoureDev",
	walk: function () {
		console.log("La persona camina.");
	},
	job: {
		name: "Programador",
		exp: 15,
		work: function () {
			console.log(`La persona de ${this.age} años de experiencia trabaja.`);
		},
	},
};

const {
	name: name4,
	job: { name: jobName },
} = person3;

console.log(name4);
console.log(jobName);

// Propagación (...)

// Sintaxis arrays

const myArray2 = [...myArray, 5, 6];

console.log(myArray2);

// Copia de arrays

const myArray3 = [...myArray];

console.log(myArray3);

// Combinación de arrays

const myArray4 = [...myArray, ...myArray2, ...myArray3];

console.log(myArray4);

// Sintaxis objects

const person4 = { ...person, email: "braismoure@mouredev.com" };

console.log(person4);

// Copia de objects

const person5 = { ...person };

console.log(person5);
