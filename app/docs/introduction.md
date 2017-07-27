# Garba UI. Una librería UI de Garbarino

![alt Main Project Image](./kss-assets/images/garba-ui-main.png)

Un catálogo de componentes visuales y mixins para ser usados en proyectos de la compañía.
* [Uso](#uso)
* [Estructura](#estructura)
* [Contribution guidelines](#contribution-guidelines)
* [Dependencias](#dependencias)
* [Responsables](#responsables)
* [Licencia](#licencia)

Basado en [KSS](https://github.com/kss-node/kss-node).

----
# Uso
*Garba UI* está construído usando npm así que es necesario que tengas esa herramienta instalada primero.

Al momento todavía no hay una versión de esta librería de la cual hayamos hecho un release y la versión que se encuentra subida a [npm](https://www.npmjs.com/package/garba-ui) es vieja.

Sin embargo, como la idea es que la puedan instalar e ir mirándola, se la pueden instalar yendo a su directorio de proyectos y tipeando en la consola:
```
$ npm install https://github.com/garbarino-com/garba-ui.git#develop
```

Una vez instalada la dependencia, *Garba UI* contiene toda la librería de estilos y scripts:
* *dist:* Dentro de esta carpeta se encuentra la versión pre-compilada de la librería:
  * *css:* Contiene versiones minificadas y sin minificar de la librería de estilos.
  * *fonts:* Contiene las dos icon fonts: la que forma parte de la vieja librería y la que corresponde a la nueva.
  * *images:* Contiene imágenes necesarias que se usan en la librería.
  * *javascript:* Contiene versiones del bundle de javascript necesarias para hacer andar algunos componentes que forman parte de esta librería. El bundle sirve además algunas scripts que son compartidos por todos los proyectos:
    * Modals (Bootstrap).
    * Tooltip (Bootstrap).
    * Tabs (Bootstrap).
    * Jquery (v1.12.3): La versión de jquery que se servía desde [Normandia](https://github.com/garbarino-com/normandia) se incluye como dependencia del proyecto pero no forma parte de este Bundle. Es necesario llamarla aparte. Sugerimos usar `<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script>` como CDN.
    * Algunos scripts compartidos que formaban parte del proyecto [Normandia](https://github.com/garbarino-com/normandia) que empezarían a servirse a través de esta librería:
      * Cookies
      * Campaign Modals/First Purchase
      * Offers Hunter
* *app:* Contiene los archivos fuente sin compilar que componen la librería:
  * *lib:* Contiene los archivos fuente en `sass`e incluye también la primera versión de la librería (1.3.2) que se irá deprecando de a poco a medida que se migre hacia la nueva versión.
  * *fonts:* Contiene las dos icon fonts: la que forma parte de la vieja librería y la que corresponde a la nueva. Existe la posibilidad de que los nuevos íconos se migren en el futuro a `svg`. También se incluye el proyecto de generación de la fuente para [IcoMoon](https://icomoon.io) para ambos ses de íconos.
  * *images:* Contiene imágenes necesarias que se usan en la librería.
  * *docs:* Contiene este archivo explicativo.
  * *javascript:* Contiene los scripts fuente que se incluyen en el build de [Browserify](http://browserify.org/):
    * Modals (Bootstrap).
    * Tooltip (Bootstrap).
    * Tabs (Bootstrap).
    * Jquery (v1.12.3): La versión de jquery que se servía desde [Normandia](https://github.com/garbarino-com/normandia) se incluye como dependencia.
    * Algunos scripts compartidos que formaban parte del proyecto [Normandia](https://github.com/garbarino-com/normandia) que empezarían a servirse a través de esta librería:
      * Cookies
      * Campaign Modals/First Purchase
      * Offers Hunter

>**Opcional:** De ser más cómodo, se ofrece la alternativa, en el caso de ser necesario sobreescribir variables para un proyecto particular, de importarlas desde un archivo .json

----
# Estructura
La estructura de la librería está basada en [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). Las partes que componen la librería se dividen mayormente en **3 categorías**, nombradas (arbitrariamente) y en orden de ascendente de complejidad:

* **Elementos**: Elementos son los bloques de construcción de más bajo nivel. Idealmente deberían ser posibles de ser reducidos a un`número` (ej: un valor de tamaño de fuente, el módulo del baseline-grid), un `string` (ej: el encoding de un ícono, el hexa de uncolor) o un `boolean` (ej: habilitar o deshabilitar `diplay: grid` o ). Cabe aclarar que aunque podrían existir casos en los que eso no sea posible. El elemento sólo vive como una abstracción y no significa nada para el usuario final.
* **Componentes**: El componente es el segundo nivel en orden ascendente de complejidad. Un componente es una articulación de elementos que ya constituyen una unidad de información para el usuario pero que carecen de significado sin un contexto (ej: La caja de producto). Un componente puede además tener un estado individual como por ejemplo `error`, `loading` o `no-disponible (ej. Si un query de búsqueda devuelve una serie de resultados de los cuales uno no está tiene stock y no está disponible, el estado es aplicado sólo en ese ítem).
* **Módulos**: Los módulos son articulaciones de componentes o elementos que constituyen bloques de información para el usuario. Por ej: El componente caja de producto aislado no transmite información alguna por sí mismo sino cuando se articula con otras cajas de producto y conforma un módulo: resultado de búsqueda, una landing de categoría o un carousel que muestra otros productos similares, etc. Dicho de otro modo: lo que define al módulo es que transmite información o tiene un propósito para el usuario. *Es un módulo*: el header, el footer, un form de selección de método de pago. *No son módulos*: Un form con sus inputs y labels o una agrupación de cajas de producto sin indicación que denoten su propósito (como un título o una bajada de texto). Un módulo puede recibir un estado que se aplica sobre toda esa articulación. Ej: Cuando el usuario filtra un Resultado de búsqueda (módulo *lista de productos*), el módulo puede recibir un estado `loading` entre el momento en que se hace ese request y el se vuelven a dibujar los nuevos resultados.

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
