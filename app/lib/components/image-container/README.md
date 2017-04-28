## Imagen de producto

El componente de imagen de producto se pueden usar en los elementos `<a>`, en elementos block (como por ejemplo: `<div>`).

Es un contenedor unificado para mostrar imagenes de producto a través del sitio.

> ### Características del componente **Imagen de producto** 
* **Líquido:** El componente es líquido; esto quiere decir que no tiene ancho fijo y va a tomar el de su contenedor. Esto está hecho así a propósito de manera que se pueda usar este componente tanto para **galerías**, como para **thumbnails**, como para **cajas de producto**.
* **Best-fit automático:** El componente adaptará por si sólo el tamaño de la imagen contenida al mejor posible manteniendo relación de ancho/alto (sin alterar las proporciones de la misma). El componente sin embargo no forzará a la imágen más allá de sus dimensiones máximas. Con lo cual cada uso debe llamar una imagen con dimensiones adecuadas.

### Props

```javascript
{
  link: 'string', ## Opcional para cuando se usa en <a>
  imageUrl: 'string.isRequired',
  altText: 'string',
  itemprop: 'string'
}
```

### Usage

```javascript
import ImgContainer from '../image-container/image-container';
```
