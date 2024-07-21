/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

// Comentario de una linea usando dos barras inclinadas (//) seguido de un comentario

// 2. Escribe un comentario en varias líneas

/**
 * Comentario
 * en varias
 * lineas
 * usando apertura (/*) y cierre (*\/)
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Original";
let myNumber = 55;
let myBigInt = 2024n;
let myBoolean = true;
let myUndefined;
let myNull = null;
let mySymbol = Symbol("O.O");

// 4. Imprime por consola el valor de todas las variables

console.log(myString);
console.log(myNumber);
console.log(myBigInt);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);

// 5. Imprime por consola el tipo de todas las variables

console.log(myString, typeof myString);
console.log(myNumber, typeof myNumber);
console.log(myBigInt, typeof myBigInt);
console.log(myBoolean, typeof myBoolean);
console.log(myUndefined, typeof myUndefined);
console.log(myNull, typeof myNull);
console.log(mySymbol, typeof mySymbol);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Modified";
myNumber = 66;
myBigInt = 2025n;
myBoolean = false;
myUndefined = undefined;
myNull = null;
mySymbol = Symbol("1.1");

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = false;
myNumber = false;
myBigInt = false;
myBoolean = 1234567890;
myUndefined = false;
myNull = false;
mySymbol = false;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const aString = "ABC";
const aNumber = 123;
const aBigInt = 123n;
const aBoolean = true;
const aUndefined = undefined;
const aNull = null;
const aSymbol = Symbol("a Symbol");

// 9. A continuación, modifica los valores de las constantes

// aString = "DEF";
// aNumber = 456;
// aBigInt = 456n;
// aBoolean = false;
// aUndefined = undefined;
// aNull = null;
// aSymbol = Symbol("another Symbol");

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
