// Interfaces

interface Rectangulo {
  ancho: number
  alto: number
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
}

function area(r: Rectangulo) : number {
  return r.ancho * r.alto;
}

const areaRect = area(rect);
console.log(areaRect);