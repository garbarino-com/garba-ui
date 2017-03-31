// Define your components in this array
// `modifiers` is a list of BEM classes that modify the base component

const components = [
  {
    component: require('./docs/docs'),
    name: 'Introducción',
    description: require('./docs/introduction.md'),
  },
  {
    component: require('./components/buttons/buttons'),
    name: 'Buttons',
    description: require('./components/buttons/README.md'),
    props: {
      text: 'Button'
    },
    modifiers: [
      'button--main',
      'button--primary',
      'button--secondary',
      'button--link',
      'button--lg',
      'button--sm',
      'button--block',
      'button__is-fixed-to-bottom',
      'button__is-disabled',
      'button__is-loading',
      'button--lg button__is-loading',
      'button--sm button__is-loading',
      'button--block button__is-loading',
      'button__has-icon',
      'button__has-icon button--block button--facebook',
    ]
  },
  {
    component: require('./components/button-actions/button-actions'),
    name: 'Button Actions',
    description: require('./components/button-actions/README.md'),
    props: {
      text: 'Placeholder text',
      className: 'icon-action',
      content: 'Texto que describe la acción que realiza el botón',
    },
    modifiers: [
      'button--action__primary has-tooltip__on-top',
      'button--action__fav has-tooltip__on-top',
      'button--action__default has-tooltip__on-top',
      'button--action__facebook has-tooltip__on-top',
      'button--action__twitter has-tooltip__on-top'
    ]
  },
  {
    component: require('./components/labels/labels'),
    name: 'Labels',
    description: require('./components/labels/README.md'),
    props: {
      text: 'Texto del label',
      link: '/url-de-categoria-opcional/'
    },
    modifiers: [
      'label--primary',
      'label--main'
    ]
  },
  {
    component: require('./components/tags/tags'),
    name: 'Tags',
    description: require('./components/tags/README.md'),
    props: {
      text: 'Tag de muestra',
      link: '/url-de-categoria-opcional/'
    }
  },
  {
    component: require('./components/tooltips/tooltips'),
    name: 'Tooltips',
    description: require('./components/tooltips/README.md'),
    props: {
      text: 'Este es un elemento con tooltip.',
      content: 'Esto es un tooltip de muestra.'
    }
  },
  {
    component: require('./components/image-container/image-container'),
    name: 'Imagen de producto',
    description: require('./components/image-container/README.md'),
    props: {
      link: 'link-opcional',
      imageUrl: 'http://lorempixel.com/1200/400/sports/',
      altText: 'Ejemplo de texto alternativo para imagen.'
    },
    modifiers: [
      'img-container__is-loading'
    ]
  },
  {
    component: require('./components/value/value'),
    name: 'Precio',
    description: require('./components/value/README.md'),
    props: {
      note: 'Precio en 1 pago.',
      price: '119.99',
      availability: 'http://schema.org/InStock http://schema.org/OutOfStock http://schema.org/PreOrder',
    },
    modifiers: [
      'value-container--lg',
      'value-container--sm'
    ]
  }
];

export default components;
