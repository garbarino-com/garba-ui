## Labels

Los labels se usan en las cajas de producto y en la ficha como manera de listar sus características, categorías y están pensador para ser usados en los elementos `<span>` o `<a>` (en caso de ser necesario agregar un link a un listado de producto que posean el dicha característica).

Siempre tiene que contener la clase `label`, que es la que le da el tamaño y la variante de fuente. La segunda clase (`modifier`) es la encargada de dar color y explicitar el caso de uso.

> A diferencia del componente `tag`, el `label` solo pueden contener texto.
Tenemos tres tipo de labels:
* **Primario** (`.label--primary`)
* **Revenue** (`label--main`)

> ### Uso de los modificadores `label--main` y `label--primary` ###
Todos los labels usan el modificador `label--primary`. Si ningún modificador se especifica, ese es el valor default de uso de los `labels`. El modificador `label--main` en cambio está reservador (del mismo modo que el modificador `button--main`) a características que impliquen un beneficio para el usuario, por ej.: *descuentos*, *opciones de financiación*, etc.

### Props

```javascript
{
  text: : 'string.isRequired',
}
```

### Usage

```javascript
import Label from '../labels/labels';
```
