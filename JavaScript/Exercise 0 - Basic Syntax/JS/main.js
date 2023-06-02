/* 1 - Define e inicializa un array con 5 elementos string en una sola línea. */

let array1 = ["a", "b", "c", "d", "e"];
console.log(array1);

/* 2 - Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
entero por consola utilizando un string template del tipo: `Longitud: ${}`. */

let array2 = [];
console.log(array2, `Longitud: ${array2.length}`);

array2.push(1, 2, 3);
console.log(array2, `Longitud: ${array2.length}`);

array2.shift();
console.log(array2, `Longitud: ${array2.length}`);

array2.unshift(4, 5);
console.log(array2, `Longitud: ${array2.length}`);

/* 3 - Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
caso contrario. */

const isBool = function (e) {
    if (typeof e === "boolean") {
        return true;
    } else {
        return false;
    };
};
console.log(isBool(false));
console.log(isBool(4));

/* 4 - Escribe una función que devuelva la longitud de un string recibido por argumento. */

const strLength = (e) => console.log(e.length);
strLength("Good Morning");

/* 5 - Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos. */

const minToSec = (min) => console.log(min * 60, "seconds.");
minToSec(10);

/* 6 - Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
directamente). */

const evenNumb = function (number) {
    if ((number % 2) === 0) {
        console.log(number, " is even.");
    } else {
        console.log("The next even number is: ", number + 1);
    };
};

evenNumb(5);

/* 7 - Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
obviar los años bisiestos. */

const daysLived = function (age) {
    console.log("You have lived: ", age * 365, "days.");
};

daysLived(2);

/* 8 - Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
de diferentes longitudes. */

const array8_1 = [1, 2, 3, 4, 5];
const array8_2 = [10, 20, 30, 40, 50];
const array8_3 = [5, 10, 34, 46, 57];

const LastElement = function (array) {
    let finalNumb = array.pop();
    console.log("Last Element: ", finalNumb);
};

LastElement(array8_3);

/* 9 - Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. */

const animalFood = function (pollos, vacas, cerdos) {
    console.log(`Patatas totales: ${(pollos * 2) + (vacas * 4) + (cerdos * 4)}.`);
};

animalFood(5, 2, 8);

/* 10 - Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo. */

const sameType = function (element1, element2) {
    if (typeof element1 === typeof element2) {
        console.log("Los elementos son del mismo tipo");
    } else {
        console.log("Los elementos son distintos");
    };
};

sameType(2, "hola");

/* 11 - Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
palabra de la frase original. Investigar método existente de los strings para este fin. */

const splitPhrase = (phrase) => console.log(phrase.split(" "));
splitPhrase("Hello my name is alex");

/* 12 - Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
postal, calle, número, planta, y número de puerta. */

let address1 = {
    provincia: "Málaga",
    ciudad: "Málaga",
    municipio: "Málaga",
    codigoPostal: 29006,
    calle: "Lepanto",
    número: 23,
    planta: 4,
    numeroPuerta: 1,
};

let address2 = {
    provincia: "Málaga",
    ciudad: "Málaga",
    municipio: "Málaga",
    codigoPostal: 29008,
    calle: "Trafalgar",
    número: 2,
    planta: 1,
    numeroPuerta: 2,
};

console.log(address1, address2);

/* 13 - Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. */

const parseDomain = (url) => {
    web = {
        domain: url.split(".")[0],
        tld: url.split(".")[1],
    };
    console.log(web);
};
parseDomain("codespaceacademy.com");
parseDomain("change.org");
parseDomain("amazon.es");

/* 14 - Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
mismo tipo de dato. Debemos usar el operador lógico “&&”. */

const strictEquality = (a, b) => console.log((a == b) && (typeof a == typeof b));
strictEquality(5, 5);
strictEquality("5", 5);

/* 15 - Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
contrario. */

const sameLength = (str1, str2) => console.log(str1.length === str2.length);
sameLength("Holaa", "Adiós");

/* 16 - Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length. */

const emptyStr = str => {
    if (str === "" || str === undefined) {
        console.log("Empty");
    } else {
        console.log("Not empty");
    }
};
emptyStr("hello");
emptyStr("");

/* 16 v2
const emptyStr = str => {return str ? true : false};
console.log(emptyStr("hello"));
console.log(emptyStr("")); */

/* 17 - Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:
• while
• for
• for of
• forEach. */
// let array1 = ["a", "b", "c", "d", "e"];

for (let i = 0; i < array1.length ; i++) {
    console.log(array1[i]);
};

let index = 0
while (index < array1.length) {
    console.log(array1[index]);
    index++;
};

array1.forEach((value, index) => console.log(`Index ${index}: ${value}`));

for (let item of array1) {
    console.log(item);
};

/* 18 - Crea una función que reciba un string y un número N y devuelva el string original repetido N veces. */

let repeatStr = (str, n) => {
    let repeatedStr = "";
    for (let i = 0; i < n; i++) {
        repeatedStr += str;
    }
    console.log(repeatedStr);
};

repeatStr("Repeat this string - ", 5);

/* 18 v2 */

// function repeatStr (str, n) {
//     console.log(str.repeat(n));
// };
// repeatStr("Repeat this string - ", 5);


/* 19 - Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
la cuenta final. */

const votes = {upVotes: 35, downVotes: 15};

let finalVotes = (object) => console.log("Final Votes: ", object.upVotes - object.downVotes);

/* 20 - Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo
de cada uno de los elementos. */

const array20 = ["I'm learning JS in a bootcamp", 7.5, {}, 0, undefined, [], "codespace"];
console.log(array20);

let getTypes = (array) => {
    let arrayTypes = [];
    for (let item of array) {
        arrayTypes.push(typeof item);
    };
    console.log(arrayTypes);
};

getTypes(array20);

/* 20 v2 */
// let getTypes = (array) => {
//     let arrayTypes = [];

//     array.forEach(element => {
//         arrayTypes.push(typeof element);
//     });
//     console.log(arrayTypes);
// };

// getTypes(array20);

/* 21 - Función que dado un array de números con formato string devuelva un array con los números ya
parseados. */

str = ["1.5", "10", "0"];

const parseStr = function (array) {
    let parsedArray = [];
    array.forEach(element => {
        parsedArray.push(Number(element));
    });
    console.log(parsedArray);
};

console.log(str);
parseStr(str);

/* 22 - Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
igual que cero y “Negativo” en caso contrario. Usa el operador ternario. */

const biggerThan0 = n => {n >= 0 ? console.log("Positivo") : console.log("Negativo")};

biggerThan0(-1);

/* 23 - Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice */

const deleteEl = function (array, index) {array.splice(index, 1)};

console.log(array2);
deleteEl(array2, 2);
console.log(array2);

/* 24 - Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
filtrar, devuelva un array borrando todos las apariciones de dicho número. */

let array24 = [1, 5, 6, 7, 5];
console.log(array24);

const deleteNumber = function (array, n) {
    for (i = 0; i < array.length; i++) { 
        if ( array[i] === n) {  
            deleteEl(array, i); 
        };
    };
    console.log(array);
};

deleteNumber(array24, 5);

/* 24 v2 */
// const deleteNumber = (array, n) => {

//     array.forEach((element, index) => {
//         if (element === n) {
//             deleteEl(array, index);
//         };
//     });
//     console.log(array);
// };

// deleteNumber(array24, 5);


/* 25 - Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
propiedades. La segunda devolverá un array con los valores de dichas propiedades.
Investigar los métodos keys y values del prototipo de Object. */

console.log(address1);

function arrayProperties(object) {
    return Object.keys(object);
};

console.log(arrayProperties(address1));

const arrayValues = (object) => Object.values(object);

console.log(arrayValues(address1));

/* 26 - Crea una función que invierta un string. */

// const reverseStr = (str) => {
//     let splitStr = str.split("");
//     let reverseStr = splitStr.reverse();
//     let joinStr = reverseStr.join("");
//     return joinStr;
// };

const reverseStr = (str) => {return str.split("").reverse().join("")};

console.log(reverseStr(".nóicamargorp ed sedrat sal ne éfac led érasuba oN"));

/* 27 - Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas. */

let str27 = "Darth CODER";
let str27dos = "darth coder";

const compareStr = (str1, str2) => {
    console.log(str1.toLowerCase() === str2.toLowerCase() ? true : false);
};

compareStr(str27, str27dos);

/* 28 - Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string. */

const firstUpper = (str) => {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    };

    let str2 = words.join(" ");
    console.log(str2);
};

firstUpper("comprobaré los errores de la consola antes de pedir ayuda.");

/* 29 - Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto. */

const oposeLogic = (Boolean) => !Boolean;

console.log(oposeLogic(true));
console.log(oposeLogic(false));