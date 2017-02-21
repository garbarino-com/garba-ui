## Tooltips

El componente tooltip es un work in progress por el momento y tiene algunas limitaciones que se irán solucionando con el tiempo, a saber:
> ### Algunas condideraciones sobre el toolip ###
> * Sólo está disponible por el momento la variante `has__tooltip-on-top` que posiciona el tooltip por encima del elemento. El plan es ir extendiéndolo de modo de poder cubrir todas las posiciones esperables: *arriba*, *abajo*, *izquierda* y *derecha*.
* Actualmente sólo puede usarse en elementos con display *inline* e *inline-block*.
* El tooltip además hace uso de los pseudo elementos de css `::before ` y `::after`. Esto podría generar conflictos con otras clases que hacen uso de estos elementos (como por ejemplo el modificador de estado `button__is-loading`). Una posible solución podría ser migrar el componente hacia javascript en el futuro.

### Props

```javascript
{
  text: 'string',
  content: 'string',
  modifiers: ['string']
}
```

### Usage

```javascript
import Tooltip from '../tooltips/tooltips';
```
