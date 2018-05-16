<!--
  Este archivo está escrito en Markdown
  Para obtener más info acerca de qué es Markdown:

  https://www.youtube.com/watch?v=TtSWo2nbzAk&t=199s
-->

* * *
EJERCICIO 4:

En el siguiente [codepen](https://codepen.io/adalab/pen/MOjMPr) hay un módulo con una noticia sobre Bill Murray. Nada nuevo, ¿no?

* ¿Qué pasa si duplico el párrafo de texto?
* ¿Y si duplico otra vez?
* * *

* * *
SOLUCIÓN:

* ¿Qué pasa si duplico el párrafo de texto?
El contenedor `.news__content` crece horizontalmente.

* ¿Y si duplico otra vez?
El contenedor `.news__content` crece horizontalmente hasta llegar a 224px de alto.
max-height (222px) + border-top (1px) + border-bottom (1px)
Además en el mismo contenedor aparece una barra de scroll que nos permite visualizar la totalidad del párrafo, para conseguir que el div sea scrollable hemos añadido la siguiente regla:
`overflow-y: auto;`
* * *
