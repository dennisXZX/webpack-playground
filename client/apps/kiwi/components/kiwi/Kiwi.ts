import KiwiImage from '../../assets/kiwi.png'
import './kiwi.scss'

class Kiwi {
  render () {
    const body = document.querySelector('body')
    const icon = document.querySelector('i')
    const img = document.createElement('img')

    img.src = KiwiImage
    img.alt = 'Kiwi'
    img.classList.add('kiwi')
    icon.classList.add('animated', 'tada', 'infinite')

    body.appendChild(img)
  }
}

export default Kiwi