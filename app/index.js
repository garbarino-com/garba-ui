'use strict';

require('./garba-styleguide.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import StyleGuideBlock from './styleguide/styleguide__block/styleguide__block';

// Define your components in this array
// `modifiers` is a list of BEM classes that modify the base component
const components = [
  /*{
    component: require('./docs/'),
    name: 'Documentation',
    description: require('./docs/introduction.md'),
  },*/
  {
    component: require('./components/buttons/buttons'),
    name: 'Buttons',
    description: require('./components/buttons/README.md'),
    props: {
      text: "Button"
    },
    modifiers: [
      'button--main',
      'button--primary',
      'button--secondary',
      'button--link',
      'button--facebook',
      'button--is-fixed-to-bottom',
      'button--lg',
      'button--sm',
      'button__is-disabled',
      'button__is-loading',
      'button--lg button__is-loading',
      'button--sm button__is-loading'
    ]
  }/*,
  {
    component: require('./components/cards/cards'),
    name: 'Card',
    description: require('./components/cards/README.md'),
    props: {
      title: "Card title",
      text: "I am a very simple card."
    },
    modifiers: []
  }*/
];

class MainComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.setInitialState();
  }

  setInitialState() {
    // This is used for rendering one active component at a time
    const initialState = components.reduce((result, value) => {
      result[value.name] = false;

      return result;
    }, {});

    return initialState;
  }

  handleClick(componentName, e) {
    e.preventDefault();

    let newState = this.setInitialState();
    newState[componentName] = true;

    this.setState(newState);
  }

  render() {
    return (
      <div className="styleguide">
        <h2 className="styleguide__heading">Garba UI V2.0</h2>
        <div className="styleguide__nav col-sm-3">
          <ul className="styleguide__list">
            {components.map((component, i) => {
              return (
                <li className={`styleguide__nav-item${this.state[component.name] ? ' is-selected': ''}`} key={`nav-item-${i}`}>
                  <a
                    className="styleguide__nav-link"
                    href={`#${component.name.toLowerCase()}`}
                    onClick={this.handleClick.bind(this, component.name)}
                  >
                    {component.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="styleguide-components col-sm-offset-3 col-sm-9">
          <h1>Garba UI!</h1>
          <p>One UI framework to rule them all. Based on the <a href="https://github.com/akikoo/react-ui-style-guide/">React UI Style Guide</a> by Aki Karkkainen.</p>

          {components.map((Component, i) => {
            if (!this.state[Component.name]) {
              return null;
            }

            return (
              <StyleGuideBlock
                key={i}
                description={Component.description}
                modifiers={Component.modifiers}
              >
                <Component.component {...Component.props} />
              </StyleGuideBlock>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));
