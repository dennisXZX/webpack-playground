import HelloWorldButton from '../components/hello-world-button/HelloWorldButton'
import Heading from '../components/heading/Heading'
import addImage from '../utils/add-image'

import React from 'react'
import { upperFirst } from 'lodash'

// call a utility function
addImage()

// render a heading
const heading = new Heading()

// over-engineer to use lodash for this
// but this is used to demonstrate how to extract common code in Webpack
heading.render(upperFirst('hello world'))

// render a button
const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

// check which mode is in
if (process.env.NODE_ENV === 'production') {
  console.log('production mode')
} else {
  console.log('development mode')
}

// ON PURPOSE: for testing how error is handled in production and development modes respectively
// helloWorldButton.methodThatDoesNotExist()