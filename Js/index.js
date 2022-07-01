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
  fireSound
} from './variable.js'
import Sounds from './sounds.js'


let minutesDisplay = document.querySelector('.minutes')
const timer = Timer({minutesDisplay})


playButton.addEventListener('click', function () {
  Sounds().PressButton()
})
stopButton.addEventListener('click', function () {
  Sounds().PressButton()
})
addButton.addEventListener('click', function () {
  Sounds().PressButton()
  timer.AddMinutes()
})
removeButton.addEventListener('click', function () {
  Sounds().PressButton()
  timer.RemoveMinutes()
})
natureSound.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().Nature()
})
rainSound.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().Rain()
})
shopSound.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().CoffeeShop()
})
fireSound.addEventListener('click', function () {
  Sounds().PressButton()
  Sounds().Fire()
})
