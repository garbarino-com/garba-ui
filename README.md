# Garba UI. Una librería UI de Garbarino

Un catálogo de componentes visuales y mixins para ser usados en proyectos de la compañía.
* [¿Cómo se usa?](#-c-mo-se-usa-)
* [Contribution guidelines](#contribution-guidelines)
* [Construído con](#constru-do-con-)
* [A quién le puedo preguntar sobre esto](#-a-qui-n-le-puedo-preguntar-sobre-esto-)
* [Licencia](#licencia)

Basado en [KSS](https://github.com/kss-node/kss-node).

----
# ¿Cómo se usa?
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

> *Opcional:* De ser más cómodo, se ofrece la alternativa, en el caso de ser necesario sobreescribir variables para un proyecto particular, de importarlas desde un archivo .json

----
# Contribution guidelines
* No hay test escritos todavía.
* Por el momento no se están haciendo code-reviews.

----
# Construído con:
* [Gulp](http://gulpjs.com/) - A toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.
* [Stylelint](https://stylelint.io/) - A CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.
* [Autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules by [Can I Use](http://caniuse.com/).
* [Sass](http://sass-lang.com/) - Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.
* [KSS](http://warpspire.com/kss/) - A methodology for documenting CSS and generating styleguides.
* [Frontend Settings](https://github.com/garbarino-com/frontend-settings) - A repository of settings for shared tools such as linters, processors and prefixers used in site projects.

# ¿A quién le puedo preguntar sobre esto?
* **Nicolas Brizuela** - [flycode](https://github.com/flycode)
* **Esteban Calvi** - [leopittelli](https://github.com/estebancalvi)
* **Leonardo Pittelli** - [estebancalvi](https://github.com/leopittelli)

## Licencia ##
Este proyecto está bajo la ISC License - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
