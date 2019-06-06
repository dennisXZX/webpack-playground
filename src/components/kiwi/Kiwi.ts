import KiwiImage from '../../images/kiwi.png'
import './kiwi.scss'

class Kiwi {
  render () {
    const body = document.querySelector('body')

    const img = document.createElement('img')

    img.src = KiwiImage
    img.alt = 'Kiwi'
    img.classList.add('kiwi')

    body.appendChild(img)
  }
}

export default Kiwi