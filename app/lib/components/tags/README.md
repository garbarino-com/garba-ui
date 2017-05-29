## Tags

Los tags se usan en las cajas de producto y en la ficha como manera de listar atributos, categorías y están pensador para ser usados en los elementos `<span>` o `<a>` (en caso de ser necesario agregar un link a un listado de producto que posean el dicho atributo).

Puede contener texto o imagen con sus salvedades:
* **El texto tiene un largo máximo**, luego del cual aparecerá una elipsis. Si eso pasa, el texto completo se puede leer como contenido del atributo `title`.
* **La imagen tiene un alto máximo fijado** que impide que se salga de la línea que contiene los tags.

### Props

```javascript
{
  text: : 'string.isRequired'
}
```

### Usage

```javascript
import Tag from '../tags/tags';
```
