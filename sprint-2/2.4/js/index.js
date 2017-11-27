'use strict';

// Ejercicio: Crear un contador

var counter = {
  initialValue: 0,
  currentValue: 1,
  max: 10,
  min: 0
};

//Mostramos el valor actual
alert('Valor inicial del contador: ' + counter.currentValue);


//Creamos la función de incrementar
counter.increment = function(){
  if(counter.currentValue < counter.max){ //Comprueba que no supera el máximo
    counter.currentValue += 1; // Añade 1 al valor actual
  }
}

counter.increment(); //Ejecutamos la función para probarla
alert('Valor del contador incrementado: ' + counter.currentValue);


//Creamos la función de decrementar
counter.decrement = function(){
  if(counter.currentValue > counter.min){ //Comprueba que no baja del mínimo
    counter.currentValue -= 1; // Resta 1 al valor actual
  }
}

counter.decrement(); //Ejecutamos la función para probarla
alert('Valor del contador decrementado: ' + counter.currentValue);

counter.reset = function(){
  counter.currentValue = counter.initialValue;
}

counter.reset(); //Ejecutamos la función para probarla
alert('Valor del contador reseteado: ' + counter.currentValue);

// Ejercicio: Estructura de datos para un usuario

var user = {};
var job = 'developer';

// 1. Añadiremos una propiedad llamada `firstname` y le asignaremos un valor.
user.firstname = 'Ana';

// 2. Añadiremos una propiedad llamada `lastname` y le asignaremos un valor.
user.lastname = 'Martín';

// 3. Añadiremos una propiedad llamada `age` y le asignaremos un valor numérico.
user.age = 30;

// 4. Añadiremos una propiedad `job` a la que asignaremos el valor de la variable `job`
user.job = job;

// 5. Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
alert(user.firstname + ' ' + user.lastname + ' tiene ' + user.age + ' y es ' + user.job);

// 6. Cambiaremos el nombre del usuario por otro distinto
user.firstname = 'Mónica';

// 7. Aumentaremos en 1 la edad del usuario
user.age += 1;

// 8. Comprobaremos de nuevo que todo sigue funcionando correctamente
alert(user.firstname + ' ' + user.lastname + ' tiene ' + user.age + ' y es ' + user.job);
