'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Icon extends React.Component {
  render() {
    let classes = classNames(
      'icon',
      this.props.modifiers[this.props.idx]
    );

    return (
      <span className={classes} aria-hidden="true"></span>
    );
  }
}

Icon.propTypes = {
  modifiers: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array])
}

Icon.defaultProps = {
  modifiers: 'icon-close icon-bag icon-bank icon-calendar icon-card icon-cart icon-checkmark icon-checkmark-circle icon-clock icon-cross icon-cross-circle icon-dashboard icon-dialog icon-double-thin-arrow-botom icon-double-thin-arrow-left icon-double-thin-arrow-right icon-double-thin-arrow-top icon-download icon-email icon-exclamation-mark-circle icon-exclamation-mark-triangle icon-facebook icon-filled-arrow-bottom icon-filled-arrow-left icon-filled-arrow-right icon-filled-arrow-top icon-filter icon-fire icon-gallery-view icon-games icon-garbarino-viajes icon-gift icon-gplus icon-heart icon-home icon-info-circle icon-instagram icon-key icon-list-view icon-marker icon-menu-hamburguer icon-music icon-notifications icon-pencil icon-percent-star icon-phone icon-photos icon-plane icon-play icon-preferences icon-question-mark-circle icon-search icon-shipping icon-shop icon-simple-bold-arrow-bottom icon-simple-bold-arrow-left icon-simple-bold-arrow-right icon-simple-bold-arrow-top icon-simple-thin-arrow-bottom icon-simple-thin-arrow-left icon-simple-thin-arrow-right icon-simple-thin-arrow-top icon-sort icon-star icon-star-half-left icon-star-half-right icon-tag icon-trash icon-twitter icon-user icon-users icon-video icon-whatsapp icon-youtube icon-two-card icon-shipping-2 icon-cash icon-bag2 icon-trash2 icon-arrow-left'
};

export default Icon;
