import React, { Component } from 'react'

class AppItem extends Component {
  props: {
    name: string;
  }

  render () {
    const { name } = this.props

    return (
      <ul>
        <li><a href={name}>{name}</a></li>
      </ul>
    );
  }
}

export default AppItem;
