import HelloWorldButton from './components/hello-world-button/Hello-world-button'
import Heading from './components/heading/Heading'
import addImage from './utils/add-image'

// call a utility function
addImage()

// render a heading
const heading = new Heading()
heading.render()

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