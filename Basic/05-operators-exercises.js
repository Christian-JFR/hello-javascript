/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética

let myAdd = 5 + 2;
let mySubtraction = 5 - 2;
let myMultiply = 5 * 2;
let myDivision = 5 / 2;
let myModule = 5 % 2;
let myPower = 5 ** 2;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

const anAssignment = myAdd;
myAdd += myAdd;
mySubtraction -= mySubtraction;
myMultiply -= myMultiply;
myDivision /= myDivision;
myModule %= myModule;
myPower **= myPower;

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(0 < 5);
console.log(0 <= 5);
console.log(0 != 5);
console.log(5 > 0);
console.log(0 === 0);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(0 > 5);
console.log(0 >= 5);
console.log(0 === 5);
console.log(5 < 0);
console.log(0 !== 0);

// 5. Utiliza el operador lógico and

console.log(5 > 0 && true);

// 6. Utiliza el operador lógico or

console.log(5 > 0 || true);

// 7. Combina ambos operadores lógicos

console.log((5 > 0 && true) || 0);

// 8. Añade alguna negación

console.log(5 > 0 && !true);

// 9. Utiliza el operador ternario

false ? console.log(true) : console.log(false);

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(7 + 5 < 7 * 8 || (4 / 2 <= 2 ** 2 && 5 % 2 < 3 - 1));
