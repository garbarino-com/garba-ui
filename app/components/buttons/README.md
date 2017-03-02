## Botones

Las classes de botones se pueden usar en los elementos `<a>`, `<button>`, o `<input>`.

Posee modificadores agrupados por función/color (ej. `.button--primary`), por tamaño (ej. `button--lg`) y estado (ej. `.button__is-loading`) que se pueden agrupar para darle al elemento la visualización que se desea.

Tenemos cinco tipo de botones:
* **Primario** (`.button--primary`)
* **Secundario** (`button--secondary`)
* **Revenue** (`button--main`)
* **Link** (`button--link`)
* **Social** (`button__has-icon`)

Cada botón tiene a su vez cinco estados:
* **Default**
* **Hover**
* **Active** (`:focus`)
* **Loading** (`.button__is-loading`)
* **Disabled** (`button__is-disabled`)

Y por último, los botones tienen 3 variaciones de tamaño que son:
* **Default** (si no hay ninguna especificación de tamaño)
* **Large** (`button--lg`)
* **Small** (`button--sm`)

> ### Links que funcionan como botones ###
En caso que el elemento `<a>` esté usándose para actuar como botón (porque no sirve para navegar hacia otro documento o sección, sino que dispara una funcionalidad dentro de la página actual), también deberían recibir `role="button"`.

> ### Rendering cross-browser ###
Como buena práctica, recomendamos usar el tag `button` siempre que sea posible para asegurar una visualización equivalente en todos los browsers.

> ### Los modificadores `button--main` y `button--primary` ###
El modificador `button--main` está reservada sólo para la acción **agregar al carrito**. *No debe usarse para ninguna otra acción*. La clase `button--primary` en cambio debe usarse en un conjunto de acciones sólo una vez para la acción primaria del conjunto. Ejemplo: Estando el usuario en un paso intermedio en una secuencia de completar comularios, posiblemente se le presenten finalizada la carga de datos tres opciones: **Retroceder**, **Cancelar** y **Enviar**. En este caso, la acción primaria debe usarse sólo una vez, para la acción principal (**Enviar**) y las otras dos acciones llevarán la clase `button--secondary` (default).

### Props

```javascript
{
  type: 'submit',
  text: 'string.isRequired',
  modifiers: ['string']
}
```

### Usage

```javascript
import Button from '../buttons/buttons';
```
