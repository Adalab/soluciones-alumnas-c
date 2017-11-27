// Suma

function sum(a, b) {
  return a + b;
}

alert(sum(1, 1));
alert(sum(2, 2));
alert(sum(1, 4));


// Media

function average(a, b, c, d) {
  return (a + b + c + d)/4;
}

alert(average(1, 1, 1, 1));
alert(average(2, 2, 2, 2));
alert(average(1, 2, 1, 4));

// IVA

function calculateVAT(price) {
  var VAT = price * 0.21;
  var total = price + VAT;
  return 'Precio sin IVA: ' + price + ', IVA: ' + VAT + ' y Total: ' + total;
}

alert(calculateVAT(100));

// Modelo de caja

function boxModelCalculator(isBorderBox, width, padding, border) {
  if(isBorderBox){
    return width - 2 * padding - 2 * border;
  } else{
    return width + 2 * padding + 2 * border;
  }
}

var width = 100;
var padding = 10;
var border = 1;

alert('Si tengo una caja con border-box con ancho ' + width + ', padding de ' + padding + 'px y borde de ' + border + 'px, el tamaño del contenido es de ' + boxModelCalculator(true, width, padding, border));

alert('Si tengo una caja con content-box con un ancho de contenido de ' + width + ', padding de ' + padding + 'px y borde de ' + border + 'px, el tamaño de la caja es de ' + boxModelCalculator(false, width, padding, border));
