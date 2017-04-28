## Precio

La idea es empezar a unificar la comunicación de los distintos tipo de información que se utilizan en el sitio. El objetivo del componente de *Precio* es empezar a unificar la manera en que se comunican los precios en el sitio. Este bloque se debe utilizar sólo con el objetivo de comunicar precio (o importes totales).

### Tiene 3 variantes:
* **Default**: Se utiliza por ejemplo en las cajas de producto de los listados y Carouseles.
* **Large**: Reservada para *Ficha de producto* y *Súper Oferta*.
* **Small**: Se utiliza para comunicar importe total, por ejemplo en el checkout. 

### Props

```javascript
{
  itemtype: 'string',
  currency: 'string',
  itempropContainer: 'string',
  itempropItem: 'string',
  itempropAvailability: 'string',
  note: 'string',
  price: 'string.isRequired',
  availability:  ['string'],
  modifiers:  ['string']
}
```

### Usage

```javascript
import ValueContainer from '../value/value';
```
