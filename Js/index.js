function Teste() {
  console.log('Passou porra')
}
import {
  playButton,
  stopButton,
  addButton,
  removeButton,
  natureSound,
  rainSound,
  shopSound,
  fireSound
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
})
removeButton.addEventListener('click', function () {
  Sounds().PressButton()
})
natureSound.addEventListener('click', function () {
  Sounds().PressButton()
})
rainSound.addEventListener('click', function () {
  Sounds().PressButton()
})
shopSound.addEventListener('click', function () {
  Sounds().PressButton()
})
fireSound.addEventListener('click', function () {
  Sounds().PressButton()
})


