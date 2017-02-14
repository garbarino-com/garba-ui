require('./_styleguide__block.scss');
require('highlight.js/styles/github.css');
var hljs = require('highlight.js/lib/highlight.js');
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import reactElementToJSXString from 'react-element-to-jsx-string';

var highlightMarkup = (markup) => {
  return hljs.highlightAuto(markup).value;
};

class StyleGuideBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  renderComponentDescription() {
    if (!this.props.description) {
      return;
    }
    return (
      <div className="styleguide__description" dangerouslySetInnerHTML={{
        __html: this.props.description
      }} />
    );
  }

  renderComponent() {
    const baseComponent = (
      <div className="styleguide__display">
        <h3>Base example</h3>
        {this.props.children}
      </div>
    );

    let componentVariations = [];

    if (this.props.modifiers) {
      this.props.modifiers.map((modifier, i) => {
        return componentVariations.push(
          <div className="styleguide__display" key={`component-${i}`}>
            <h3>Modifiers: <span className="styleguide__modifiers">{modifier}</span></h3>
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {...this.props, modifier});
            })}
          </div>
        );
      })
    }

    return (
      <div>
        {baseComponent}
        {this.renderComponentSource()}
        {componentVariations}
      </div>
    );
  }

  renderComponentSource() {
    const children = React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        return reactElementToJSXString(child);
      }
    });

    return (
      <div className="styleguide__source">
        <h3>Source (React JSX)</h3>
        <pre>
          <code className="hljs">
            {children}
          </code>
        </pre>

        <h3>Source (HTML)</h3>
        <pre>
          <code
            className="hljs"
            dangerouslySetInnerHTML={{
              __html: React.isValidElement(this.props.children) ? this.props.highlighter(ReactDOMServer.renderToStaticMarkup(this.props.children)) : null
            }}
          />
        </pre>
      </div>
    );
  }

  render() {
    return (
      <div className="styleguide__block">
        {this.renderComponentDescription()}
        {this.renderComponent()}
      </div>
    );
  }
}

StyleGuideBlock.propTypes = {
  modifiers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]),
  highlighter: React.PropTypes.func
};

StyleGuideBlock.defaultProps = {
  highlighter: highlightMarkup
};

export default StyleGuideBlock;