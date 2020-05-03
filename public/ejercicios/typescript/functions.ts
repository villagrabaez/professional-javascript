// Functions

function add(a: number, b: number) : number {
  return a + b;
}

const sum = add(1, 2);

console.log(sum);

function createAdder(a: number) : (number) => number {
  return function (b: number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlus = addFour(6);

function fullName(firstName: string = "Bernardino", lastName?: string) : string {
  return `${firstName} ${lastName}`;
}

const bernardino = fullName("Bernardino", "Villagra");

console.log(bernardino);