'use strict';

var usuario = prompt('¿Cómo te llamas?');

if ( usuario === 'Carlos' || usuario === 'Alex' || usuario === 'Israel' ) {
	alert('Bienvenido, ' + usuario);
} else {
	alert('Lo siento pero el nombre que has introducido no está registrado');
}
