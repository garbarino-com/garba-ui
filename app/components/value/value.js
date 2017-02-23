'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class ValueContainer extends React.Component {
  render() {
    let classes = classNames(
      'value-container',
      this.props.modifiers[this.props.idx]
    );

    return (
      <div is class={classes} itemprop={this.props.itempropContainer} itemscope
          itemtype={this.props.itemtype}>
        <span className="value-note">
          {this.props.note}
        </span>

        <meta is itemprop="priceCurrency" content={this.props.currency} />
        <span className="value-item">
          $<span is itemprop={this.props.itempropItem}>
            {this.props.price}
          </span>
        </span>

        <link href={this.props.availability}
          is itemprop={this.props.availability} />
      </div>
    );
  }
}

ValueContainer.propTypes = {
  itemtype: React.PropTypes.string.isRequired,
  currency: React.PropTypes.string.isRequired,
  itempropContainer: React.PropTypes.string.isRequired,
  itempropItem: React.PropTypes.string.isRequired,
  itempropAvailability: React.PropTypes.string.isRequired,
  note: React.PropTypes.string,
  price: React.PropTypes.string.isRequired,
  availability: React.PropTypes.string,
  modifiers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array])
};

ValueContainer.defaultProps = {
  itemtype: 'http://schema.org/Offer',
  currency: 'ARS',
  itempropContainer: 'offers',
  itempropItem: 'price',
  itempropAvailability: 'availability',
  note: '',
  price: '',
  availability: '',
  modifiers: [
    'value-container--lg',
    'value-container--sm'
  ]
};


export default ValueContainer;
