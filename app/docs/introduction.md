# Garba UI. Una librería UI de Garbarino

![alt Main Project Image](./kss-assets/images/garba-ui-main.png)

Un catálogo de componentes visuales y mixins para ser usados en proyectos de la compañía.
* [Modo de Uso](#modo-de-uso)
* [Contribution guidelines](#contribution-guidelines)
* [Dependencias](#dependencias)
* [Responsables](#responsables)
* [Licencia](#licencia)

Basado en [KSS](https://github.com/kss-node/kss-node).

----
# Uso
*Garba UI* está construído usando npm así que es necesario que tengas esa herramienta instalada primero.

Ir al directorio donde lo quieras usar y tipear en la consola:
```
$ npm install garba-ui --save-dev
```
Eso debería instalar todas las dependencias necesarias.

Una vez instalada la dependencia, *Garba UI* contiene toda la librería de estilos:
* *dist:* Dentro de esta carpeta se encuentra la versión pre-compilada de la librería:
  * *css:* Contiene versiones en `css` minificadas y sin minificar de la librería.
  * *fonts:* Contiene las icon fonts.
  * *images:* Contiene imágenes necesarias para el sitio.
* *app:* Contiene los archivos fuente sin compilar que componen la librería:
  * *lib:* Contiene los archivos fuente en `sass`e incluye también la primera versión de la librería (1.3.2) que se irá deprecando de a poco a medida que se migre hacia la nueva versión.
  * *fonts:* Contiene las icon fonts. (Existe la posibilidad de que estas se migren en el futuro a archivos `svg`.)
  * *images:* Contiene imágenes necesarias para el sitio.
  * *docs:* Contiene este archivo explicativo.

>**Opcional:** De ser más cómodo, se ofrece la alternativa, en el caso de ser necesario sobreescribir variables para un proyecto particular, de importarlas desde un archivo .json

----
# Estructura
Las partes que componen la librería se dicen mayormente de **3 categorías**, nombradas (arbitrariamente) y en orden de ascendente de complejidad:

* **Elementos**: Elementos son los bloques de construcción de más bajo nivel. Idealmente deberían ser posibles de ser reducidos a un`número` (ej: un valor de tamaño de fuente, el módulo del baseline-grid), un `string` (ej: el encoding de un ícono, el hexa de uncolor) o un `boolean` (ej: habilitar o deshabilitar `diplay: grid` o ). Cabe aclarar que aunque podrían existir casos en los que eso no sea posible. El elemento sólo vive como una abstracción y no significa nada para el usuario final.
* **Componentes**: El componente es el segundo nivel en orden ascendente de complejidad. Un componente es una articulación de elementos que ya constituyen una unidad de información para el usuario pero que carecen de significado sin un contexto (ej: La caja de producto). Un componente puede además tener un estado individual como por ejemplo `error`, `loading` o `no-disponible (ej. Si un query de búsqueda devuelve una serie de resultados de los cuales uno no está tiene stock y no está disponible, el estado es aplicado sólo en ese ítem).
* **Módulos**: Los módulos son articulaciones de componentes o elementos que constituyen bloques de información para el usuario. Por ej: El componente caja de producto aislado no transmite información alguna por sí mismo, sino cuando se articula con otros componentes y conforma un módulo como un resultado de búsqueda, una landing de categoría o un carousel que muestra otros productos similares. Los módulos pueden tener un estado que se aplica sobre toda la articulación. Ej: Cuando el usuario filtra un Resultado de búsqueda (módulo *lista de productos*), el módulo puede recibir un estado `loading` entre que se hace ese request y se reciben los nuevos resultados.

Por el momento la librería sólo sirve un bundle de javascript para usar junto con *Jquery (v 1.12.3)*. En el futuro se planea incluir bundles que cubran proyectos que utilicen data-binding.

----
# Contribution guidelines
* No hay test escritos todavía.
* Por el momento no se están haciendo code-reviews.

----
# Dependencias
* [Gulp](http://gulpjs.com/) - A toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.
* [Stylelint](https://stylelint.io/) - A CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.
* [Autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules by [Can I Use](http://caniuse.com/).
* [Sass](http://sass-lang.com/) - Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.
* [KSS](http://warpspire.com/kss/) - A methodology for documenting CSS and generating styleguides.
* [Frontend Settings](https://github.com/garbarino-com/frontend-settings) - A repository of settings for shared tools such as linters, processors and prefixers used in site projects.

# Responsables
* **Nicolas Brizuela** - [flycode](https://github.com/flycode)
* **Esteban Calvi** - [estebancalvi](https://github.com/estebancalvi)
* **Leonardo Pittelli** - [leopittelli](https://github.com/leopittelli)

## Licencia ##
Este proyecto está bajo la ISC License - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
