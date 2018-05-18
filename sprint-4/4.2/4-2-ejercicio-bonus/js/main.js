'use strict';

class Polygon {
  constructor(numberSides, base, height) {
    this.numberOfSides = numberSides;
    this.base = base;
    this.height = height
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
};

class Square extends Polygon {
  constructor(squareSide) {
    super(4, squareSide, squareSide);
  }
  set side(squareSide) {
    this.base = squareSide;
    this.height = squareSide
  }
  get side() {
    return this.base
  }
}

const mySquare = new Square(7);

console.log(`PASO 1:
Pediremos el área y la guardaremos en una variable`);
const myArea = mySquare.area();
console.log(`El contenido de la variable es ${myArea} cm²`);

console.log(`
PASO 2:
Cambiaremos el lado del cuadrado por 47 cm`);
mySquare.side = 47;

console.log(`
PASO 3:
Pediremos de nuevo el área y la guardaremos en otra variable`);
const myNewArea = mySquare.area();

console.log(`
PASO 4:
Compararemos que los valores son distintos`);
console.log(`  · Área ${myArea} cm² para el poligono de lado 7 cm
  · Área ${myNewArea} cm² para el poligono de lado 47 cm`);
