//Ejercicio 1: inflar notas

var marks = [5, 4, 6, 7, 9];
var inflatedMarks = marks.map(function(plus){
  return plus + 1
});
// console.log(inflatedMarks);

//Ejercicio 2: Saludo usuarios

var names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

var saludoNames = names.map(function(name){
  return `Bienvenida ${name}`
});

// console.log(saludoNames);

//EJERCICIO 3: Gracias por confiar en nosotros
var users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false}
];

var saludoPremium = users.map(function(namePremium){
  if (namePremium.isPremium = true){
  return `Bienvenida ${namePremium.name}. Gracias por confiar en nosotros.'`
  } else namePremium.isPremium = false
    return `Bienvenida ${namePremium.name}.`
});

console.log(saludoPremium);
