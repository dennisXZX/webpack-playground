import React, { Component } from 'react'

import appData from '../../../../../api/apps.json'

import AppItem from '../app-item/AppItem'
import { App } from '../../interfaces/app'
import './appList.scss'

class AppList extends Component {
  apps: App[]

  constructor (props) {
    super(props)
    this.apps = appData
  }

  render () {
    return (
      <div className='app-list'>
        {this.apps.map(app => <AppItem key={app.name} name={app.name} />)}
      </div>
    );
  }
}

export default AppList;
