import React from 'react'
import ReactDOM from 'react-dom'

import { upperFirst } from 'lodash'

ReactDOM.render(
  <h1>{ upperFirst('hello, React!') }</h1>,
  document.getElementById('app_root')
);
