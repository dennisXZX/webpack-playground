import './hello-world-button.scss'

class helloWorldButton {
  // use class properties, try babel plugin 'transform-class-properties'
  buttonCssClass = 'hello-world-button'
  textCssClass = 'hello-world-text'

  render() {
    // create a button
    const button = document.createElement('button')
    const body = document.querySelector('body')

    button.innerHTML = 'Hello World'

    button.classList.add(this.buttonCssClass)

    // add a click handler to the button
    // each click would produce a <p> element
    button.onclick = () => {
      const p = document.createElement('p')

      p.innerText = 'Hello World'

      p.classList.add(this.textCssClass)

      body.appendChild(p)
    }

    // append the button to body
    body.appendChild(button)
  }
}

export default helloWorldButton;