import './heading.scss'

class Heading {
  render(pageName: string) {
    const h1 = document.createElement('h1')
    const body = document.querySelector('body')

    h1.innerHTML = `Webpack is awesome. This is ${pageName} page.`

    h1.classList.add('heading')

    body.appendChild(h1)
  }
}

export default Heading