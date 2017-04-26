'use strict';

require('./garba-styleguide.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import components from './components';

import StyleGuideBlock from './styleguide/styleguide__block/styleguide__block';

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
                    onClick={this.handleClick.bind(this, component.name)}>
                      {component.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="styleguide-components col-sm-offset-3 col-sm-9">
          <header className="styleguide-header">
            <h1>Garba UI!</h1>
          </header>

          {components.map((Component, i) => {
            if (!this.state[Component.name]) {
              return null;
            }

            return (
              <StyleGuideBlock
                key={i}
                description={Component.description}
                modifiers={Component.modifiers}>
                  <Component.component {...Component.props} />
              </StyleGuideBlock>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('app')
);
