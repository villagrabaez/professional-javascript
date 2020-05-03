// Boolean

let muted: boolean = true;
// muted = "callado"; // error de tipado mediante Typescript
muted = false;

// Numbers

let numerador: number = 42;
let denominador: number = 6;
let resultado: number = numerador / denominador;

console.log(resultado);

// Strings

let nombre: string = "Bernardino";
let saludo = `Hola me llamo ${nombre}`;

console.log(saludo);

// Arrays

let people: string[] = [];
people = ["Eli", "Nicole", "Raul"];

people.push(nombre);
console.log(people);

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(30001);

console.log(peopleAndNumbers);

// Enum

enum Color {
  Rojo = "Rojo", // 0
  Verde = "Verde", // 1
  Azul = "Azul", // 2
  Amarillo = "Amarilla" // 3
}

let colorFavorito: Color = Color.Azul;

console.log(`Mi color favorito es: ${colorFavorito}`);

// Any

let comodin: any = "Jocker";
comodin = {type: "Wildcard"};

// Object

let sonObject: object = {type: "Wildcard"};