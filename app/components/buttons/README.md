## Botones

Las classes de botones se pueden usar en los elementos `<a>`, `<button>`, o `<input>`.

Posee modificadores agrupados por función/color (ej. `.button--primary`), por tamaño (ej. `button--lg`) y estado (ej. `.button__is-loading`) que se pueden agrupar para darle al elemento la visualización que se desea.

> ### Links que funcionan como botones ###
En caso que el elemento `<a>` esté usándose para actuar como botón (porque no sirve para navegar hacia otro documento o sección, sino que dispara una funcionalidad dentro de la página actual), también deberían recibir `role="button"`.

> ### Rendering cross-browser ###
Como buena práctica, recomendamos usar el tag `button` siempre que sea posible para asegurar una visualización equivalente en todos los browsers.

> ### La clase `.button--main` ###
Esta clase está reservada para ser usada sólo en la acción principal del sitio. En nuestro caso (tratándose de un sitio e-commerce), se destina a la acción de *agregar al carrito*.

### Props

```javascript
{
  type: 'submit',
  text: 'string',
  modifiers: ['string']
}
```

### Usage

```javascript
import Button from '../buttons/buttons';
```
