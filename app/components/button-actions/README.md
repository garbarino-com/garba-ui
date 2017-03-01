## Action buttons

Las classes de botones de acciones se pueden usar en los elementos `<a>`, `<button>`, o `<input>`.

Los botones de acción no tienen otro modificador más que el definido por la acción que ejecutan:

> Los botones de acción son botones que ejecutan acciones que sean propias del contexto en el que se encuentra el usuario y en ciertos casos para disparar funcionalidades dentro de la página. No se deben usar para navegar entre documentos o secciones, para eso son los links o botones.

* `.button--action__primary`: Ejecuta la acción primaria en un grupo de acciones (por el momento, está reservado a la acción de *"Quitar del carrito"*).
* `.button--action__fav`: Marcar item como favorito.
* `.button--action__facebook`: Compartir item en Facebook.
* `.button--action__twitter`: Compartir item en Twitter.

Este tipo de botones tienen además en el estado `:hover` muestran un tooltip describiendo la acción que realizan.

> Todos los modificadores tienen disponible su propia variables de la clase `button__is-active` para casos en que sea necesario marcar que una acción no puede ejecutarse más de una vez (ej. /"El producto se ha marcado como favorito"/).

### Props

```javascript
{
  type: 'submit',
  text: 'string.isRequired',
  className: 'string',
  modifiers: ['string']
}
```

### Usage

```javascript
import ButtonAction from '../button-actions/button-actions';
```
