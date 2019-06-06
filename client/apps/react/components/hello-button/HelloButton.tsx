import React, { Component } from 'react'

import { upperFirst } from 'lodash'

class HelloButton extends Component {
  hello = () => {
    alert(upperFirst('hello react'))
  }

  render () {
    return (
      <button onClick={this.hello}>Hello React</button>
    );
  }
}

export default HelloButton;
