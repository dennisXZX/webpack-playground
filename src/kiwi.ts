import Heading from './components/heading/Heading'
import Kiwi from './components/kiwi/Kiwi'

import { upperFirst } from 'lodash'

// render a heading
const heading = new Heading()

// over-engineer to use lodash for this
// but this is used to demonstrate how to extract common code in Webpack
heading.render(upperFirst('kiwi'))

// render a kiwi component
const kiwi = new Kiwi()
kiwi.render()