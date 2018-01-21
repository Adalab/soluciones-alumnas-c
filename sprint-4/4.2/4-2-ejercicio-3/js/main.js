'use strict';

// Solución gracias a Aida - https://github.com/Alienah
class Polygon{
  constructor(numberOfSides, base, height){
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter(){
    return this.base * this.numberOfSides;
  }
  area(){
    return this.base * this.height;
  }
}
class Square extends Polygon {
  constructor(side){
    super(4, side, side);
  }
}
class Triangle extends Polygon{
  constructor(base, heigth){
    super(3, base, heigth);
  }
  area(){
    return super.area() / 2;
  }
}
const item1 = new Square(4);
const item2 = new Triangle(4, 3);

console.log(`El cuadrado de 4cm de lado tiene un périmetro de ${item1.perimeter()}cm y un área de ${item1.area()}cm²`);
console.log(`El triángulo de 4cm de base y 3cm de altura tiene un périmetro de ${item2.perimeter()}cm y un área de ${item2.area()}cm²`);
