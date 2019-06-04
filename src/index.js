import HelloWorldButton from './components/hello-world-button/Hello-world-button'
import Heading from './components/heading/Heading'

import addImage from './utils/add-image'

addImage()

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

const heading = new Heading()
heading.render()
