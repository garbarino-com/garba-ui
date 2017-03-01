## Imagen de producto

Este componente de imagen de producto es un contenedor unificado para mostrar imagenes de producto a través del sitio.
* **Líquido:** El componente es líquido; esto quiere decir que no tiene ancho fijo y va a tomar el de su contenedor. Esto está hecho así a propósito de manera que se pueda usar este componente tanto para **galerías**, como para **thumbnails**, como para **cajas de producto**.
* **Best-fit:** El componente adaptará por si sólo, el tamaño de la imagen contenida al mejor posible manteniendo relación de ancho/alto (sin cambiar las proporciones de la misma). El componente sin embargo no forzará la imágen más allá de sus dimensiones máximas, con lo cual cada uso debe llamar una imagen con dimensiones adecuadas.

### Props

```javascript
{
  imageUrl: 'string.isRequired',
  altText: 'string'.
  itemprop: 'string'
}
```

### Usage

```javascript
import ImgContainer from '../image-container/image-container';
```
