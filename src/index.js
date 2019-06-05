import HelloWorldButton from './components/hello-world-button/Hello-world-button'
import Heading from './components/heading/Heading'

import addImage from './utils/add-image'

addImage()

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

const heading = new Heading()
heading.render()

if (process.env.NODE_ENV === 'production') {
  console.log('production mode')
} else {
  console.log('development mode')
}

// ON PURPOSE: for testing how error is handled in production and development modes respectively
helloWorldButton.methodThatDoesNotExist()