import $ from 'jquery'
import './heading.scss'

class Heading {
  render(pageName: string) {
    const h1 = $('<h1>')
    const body = $('body')

    h1.text(`Webpack is awesome. This is ${pageName} page.`)

    h1.addClass('heading')

    body.append(h1)
  }
}

export default Heading