/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades
const theBatman = {
	name: "Bruce Wayne",
	"alter ego": "Batman",
	hero: true,
};

// 2. Accede y muestra su valor
console.table(theBatman);
console.log(theBatman.name);
console.log(theBatman.hero);
console.log(theBatman["alter ego"]);

// 3. Agrega una nueva propiedad
theBatman.appearance = "1939";
console.table(theBatman);
console.log(theBatman.appearance);

// 4. Elimina una de las 3 primeras propiedades
delete theBatman.hero;
console.table(theBatman);

// 5. Agrega una función e invócala
theBatman.callBatmobile = function () {
	console.log("Batmobile is on its way");
};

console.table(theBatman);
theBatman.callBatmobile();

// 6. Itera las propiedades del objeto
for (const key in theBatman) {
	console.log(`${key} => ${theBatman[key]}`);
}

// 7. Crea un objeto anidado

const characters = {
	theBatman: {
		name: "Bruce Wayne",
		"alter ego": "Batman",
		hero: true,
		appearance: "1939",
		callBatmobile: function () {
			console.log("Batmobile is on its way");
		},
	},
};
console.table(characters);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(
	`${characters.theBatman.name}\n${characters.theBatman.hero}\n${characters.theBatman.appearance}\n${characters.theBatman["alter ego"]}\n${characters.theBatman.callBatmobile}`
);
// 9. Comprueba si los dos objetos creados son iguales

console.log(theBatman == characters);
console.log(theBatman === characters);

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(theBatman.name == theBatman.appearance);
console.log(theBatman.name === theBatman.appearance);
