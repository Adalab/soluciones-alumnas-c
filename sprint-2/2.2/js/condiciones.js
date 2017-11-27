'use strict';

var n = 15;

if ( n === 0) {
  alert('El número es 0')
} else if ( n < 0) {
  alert('El número es negativo')
} else if ( n % 2 === 0 && n % 3 === 0) {
  alert('El número es múltiplo de 2 y de 3')
} else if (n > 20 && n < 50) {
  alert('El número es mayor que 20 pero menor que 50')
} else {
  alert('el número no es 123123125')
}
