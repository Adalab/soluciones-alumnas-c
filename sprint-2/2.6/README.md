## Ejercicios

### EJERCICIO 1:  
1. Vamos crear un repositorio por grupo, dentro del equipo de Adalab y lo llamaremos `clarke-s2-gX`, donde `X` será el número del grupo, de 1 a 4 :)
2. Crearemos una primera versión de nuestra web (solo en HTML) que tendrá:
	1. Un `<header>` con un `<h1>` con el nombre del grupo
	2. Un `<main>` con dos secciones:
		1. `<section class="motivacion"></section>`
		2. `<section class="contenido"></section>`
	3. Un `<footer>` con un `<p>` con el texto: "Maquetado en grupo en Adalab"
3. Lo subiremos a GitHub

### EJERCICIO 2:  
1. Vamos a crear una rama `footer`, a movernos a ella y a modificar un poco nuestro proyecto. Añadiremos a nuestro footer el enlace a la web de Adalab, quedando así:
```html
<footer>
	<p>Maquetado en grupo en <a href="http://adalab.es">Adalab</a></p>
	</footer>
```
2. Como siempre, añadimos, commiteamos y hacemos push, esta vez usando `git push origin footer`.
3. Si ahora cambiamos a la rama `master` veremos que permanece como la dejamos y que el cambio del enlace solo está hecho en nuestra rama `footer`.

### EJERCICIO 3:  
Vamos a fusionar nuestra rama `footer` con `master` para que nuestra web tenga el enlace que hemos añadido anteriormente.
Para ello:
1. Nos movemos a la rama `footer`
2. Comprobamos que está correcto y tenemos la última versión
3. Nos movemos a la rama `master` (sí, es super buena idea asegurarnos de que también tenemos la última versión)
4. Hacermos un merge de la rama `footer`
5. Resolvemos los conflictos si los hay
6. Comprobamos que los cambios está hechos
7. Y subimos al repositorio remoto

### EJERCICIO 4:  
Ahora que hemos hecho un primer acercamiento a las ramas, vamos a hacer lo mismo pero con dos equipos por cada grupo. Cada equipo estará encargado de un trabajo diferente que tendrá que realizar en una rama y posteriormente mezclar en la rama principal.

### EJERCICIO 5:
Vamos a hacer un Pull Request con revisión de código en vivo. Para ello una voluntaria sale a hacer parte del ejercicio, y el profesor hace la revisión de código en directo.
