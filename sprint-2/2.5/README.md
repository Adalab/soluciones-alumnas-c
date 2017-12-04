## Ejercicios

## EJERCICIO: PELÍCULAS  

Vamos a hacer este ejercicio en parejas. ¿Listas? La primera de la pareja con el teclado va a crear un array `movies` con un listado de 3 películas que le gusten. Será un array de cadenas (strings).

Ahora toma el teclado la otra compañera y añade al array anterior otra película más que le guste. No vale modificar la declaración del array, sino que añadiremos la nueva peli metiéndola en la posición 3 del array (recordad que se empiezan a numerar desde el 0). Para comprobar que funciona, tienes que mostrar una alerta con el nombre de la última película del array.

El teclado vuelve a la primera de la pareja. Tienes que modificar la peli que menos te guste de las que hay en el array (¿podría ser la que ha puesto tu compañera? :P) por el nombre de otra que te guste más. Para comprobar que funciona, tienes que mostrar el array completo en una ventana de alerta.

El teclado vuelve a la segunda de la pareja. Ahora es tu turno de modificar la peli que menos te guste del array por otra. De nuevo, muestra el array completo en una ventana de alerta para comprobar que funcionó.

Para terminar este ejericicio, vamos a encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos `workWithMovies`. Ejercutamos la función para comprobar que se muestran los mensajes de alerta correspondientes.

## EJERCICIO: LA MEDIA

a) Vamos a crear un nuevo array `numbers` contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle que calcule la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (llamada *acumulador*) para ir almacenando la suma de todos los números. Para comprobar si el resultado es correcto, vamos a escribirlo en un `alert`.

b) Ahora vamos añadir un nuevo número al array usando `push`, y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

c) Vamos a generalizar el código anterior creando una función `average`. Esta función toma como parámetro un array `numbers`, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad `length`. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) con arrays de varias longitudes y mostraremos el resultado en un ventanas de alerta.
