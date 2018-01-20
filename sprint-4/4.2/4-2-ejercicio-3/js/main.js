'use strict';
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
    //return Math.pow(this.base,2);  Otra solución
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

/*Otra solución
class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return Math.pow(this.base, 2);
  }
}

class Square extends Polygon {
  constructor(base) {
    super(4, base);
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area(){
    // Área de un triángulo = (base*altura)/2
    return (this.base * this.height) / 2;
    //return (super.area() / 2);
  }
}


// Creamos nuestras instancias de square
// y les pasamos los valores en cada caso
const square = new Square(5);
const triangle = new Triangle(4,3);

// Cuadrado
console.log('Cuadrado de lado 4 m.:')
console.log(`Perímetro: ${square.perimeter()} m.`);
console.log(`Área: ${square.area()} m².`);
console.log('---')
// Cuadrado de lado 1
console.log('Triángulo de 4m. de base y 3 m. altura:')
console.log(`Perímetro: ${triangle.perimeter()} m.`);
console.log(`Área: ${triangle.area()} m².`);
console.log('---')
*/
