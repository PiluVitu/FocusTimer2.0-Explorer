function Teste() {
  console.log('Passou porra')
}
import Timer from './timer.js'
import {
  playButton,
  stopButton,
  addButton,
  removeButton,
  natureSound,
  rainSound,
  shopSound,
  fireSound,
  natureSoundOff,
  rainSoundOff,
  shopSoundOff,
  fireSoundOff
} from './variable.js'
import Sounds from './sounds.js'

playButton.addEventListener('click', function () {
  Sounds().PressButton()
})
stopButton.addEventListener('click', function () {
  Sounds().PressButton()
})
addButton.addEventListener('click', function () {
  Sounds().PressButton()
  Timer().AddMinutes()
})
removeButton.addEventListener('click', function () {
  Sounds().PressButton()
  Timer().RemoveMinutes()
})
natureSound.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().Nature()
  natureSound.classList.add('hide')
  natureSoundOff.classList.remove('hide')
})
natureSoundOff.addEventListener('click', function () {
  Sounds().NatureStop()
  Sounds().PressButton()
  natureSoundOff.classList.add('hide')
  natureSound.classList.remove('hide')
})
rainSound.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().Rain()
  rainSound.classList.add('hide')
  rainSoundOff.classList.remove('hide')
})
rainSoundOff.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().RainStop()
  rainSoundOff.classList.add('hide')
  rainSound.classList.remove('hide')
})
shopSound.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().CoffeeShop()
})
shopSoundOff.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().CoffeeShopStop()
})
fireSound.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().Fire()
})
fireSoundOff.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().FireStop()
})
