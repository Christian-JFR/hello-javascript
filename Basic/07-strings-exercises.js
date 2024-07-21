/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

console.log("Ejercicio con " + "cadenas de texto.");

// 2. Muestra la longitud de una cadena de texto

console.log("Cual es la longitud de esta cadena?".length);

// 3. Muestra el primer y último carácter de un string

let characterLocation = "ABC DEF";

console.log(characterLocation[0]); // primer caracter
console.log(characterLocation[characterLocation.length - 1]); // ultimo caracter

// 4. Convierte a mayúsculas y minúsculas un string

let myString = "ChRiStIaN";

console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

// 5. Crea una cadena de texto en varias líneas

let loremIpsum = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Placeat velit explicabo ducimus nihil quaerat sed molestiae libero exercitationem 
nostrum inventore aspernatur architecto id quam animi impedit at, 
obcaecati commodi quidem!`;

console.log(loremIpsum);

// 6. Interpola el valor de una variable en un string

console.log(`Esto es un texto de relleno: "${loremIpsum}"`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(loremIpsum.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(loremIpsum.includes("dolor"));

// 9. Comprueba si dos strings son iguales

let areTheyEquals = "Uno" === "uno";

console.log(areTheyEquals);

// 10. Comprueba si dos strings tienen la misma longitud

let areTheSameLength = "12345".length === "ABCDE".length;

console.log(areTheSameLength);
