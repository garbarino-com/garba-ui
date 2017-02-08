import React from 'react';
import {render} from 'react-dom';
import SayHello from './components/hello';

// Component styles
require('../scss/garbaui.scss');

render(
  <SayHello username={'Esteban'}/>,
  document.getElementById('app')
);
