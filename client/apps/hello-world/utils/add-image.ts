import Logo from '../assets/logo_black.png'

function addImage () {
  const img = document.createElement('img')

  img.alt = 'Logo'
  img.width = 160
  img.src = Logo
  img.setAttribute('style', 'position: absolute; right: 0; bottom: 10px')

  const body = document.querySelector('body')

  body.appendChild(img)
}

export default addImage