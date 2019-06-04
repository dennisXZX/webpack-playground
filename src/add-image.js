import Logo from './images/logo_black.png'

function addImage () {
  const img = document.createElement('img')

  img.alt = 'Logo'
  img.width = 300
  img.src = Logo

  const body = document.querySelector('body')

  body.appendChild(img)
}

export default addImage