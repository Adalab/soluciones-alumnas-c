//EJERCICIO 3: Gracias por confiar en nosotros
var users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false}
];

var saludoPremium = users.map(function(namePremium){
  if (namePremium.isPremium) {
    return `Bienvenida ${namePremium.name}. Gracias por confiar en nosotros.`;
  } else {
    return `Bienvenida ${namePremium.name}.`;
  }
});

console.log(saludoPremium);
