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
      <div className={classes} itemProp={this.props.itempropContainer}
          itemScope itemType={this.props.itemtype}>
        <span className="value-note">
          {this.props.note}
        </span>

        <meta itemProp="priceCurrency" content={this.props.currency} />
        <span className="value-item">
          $<span itemProp={this.props.itempropItem}>
            {this.props.price}
          </span>
        </span>

        <link href={this.props.availability} itemProp={this.props.availability} />
      </div>
    );
  }
}

ValueContainer.propTypes = {
  itemtype: React.PropTypes.string,
  currency: React.PropTypes.string,
  itempropContainer: React.PropTypes.string,
  itempropItem: React.PropTypes.string,
  itempropAvailability: React.PropTypes.string,
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
