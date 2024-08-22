/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
const myName = "Brais Moure";
const alias = "MoureDev";
const email = `braismoure@mouredev.com`;

// Números (number)
const age = 37; // Entero
const height = 1.77; // Decimal

// Booleanos (boolean)
const isTeacher = true;
const isStudent = false;

// Undefined
let undefinedValue;
console.log(undefinedValue);

// Null
const nullValue = null;

// Symbol

const mySymbol = Symbol("mysymbol");

// BigInt

const myBigInt = BigInt(817239871289371986589716389471628379612983761289376129);
const myBigInt2 = 817239871289371986589716389471628379612983761289376129n;

// Mostramos los tipos de datos
console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);

console.log(typeof age);
console.log(typeof height);

console.log(typeof isTeacher);
console.log(typeof isStudent);

console.log(typeof undefinedValue);

console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigInt);
console.log(typeof myBigInt2);
