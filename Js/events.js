import {
  playButton,
  stopButton,
  addButton,
  removeButton,
  natureSoundButton,
  rainSoundButton,
  shopSoundButton,
  fireSoundButton
} from './variable.js'

export default function Events({ Sounds, Timer }) {
  playButton.addEventListener('click', function () {
    Sounds.PressButton()
    Timer.TimerCountDown()
  })
  stopButton.addEventListener('click', function () {
    Sounds.PressButton()
    Timer.TimerCountStop()
  })
  addButton.addEventListener('click', function () {
    Sounds.PressButton()
    Timer.AddMinutes()
  })
  removeButton.addEventListener('click', function () {
    Sounds.PressButton()
    Timer.RemoveMinutes()
  })
  natureSoundButton.addEventListener('click', function () {
    natureSoundButton.classList.toggle('active')
    Sounds.PressButton()
    Sounds.SoundOnOff(Sounds.natureSound, natureSoundButton)
  })

  rainSoundButton.addEventListener('click', function () {
    rainSoundButton.classList.toggle('active')
    Sounds.PressButton()
    Sounds.SoundOnOff(Sounds.rainSound, rainSoundButton)
  })

  shopSoundButton.addEventListener('click', function () {
    shopSoundButton.classList.toggle('active')
    Sounds.PressButton()
    Sounds.SoundOnOff(Sounds.coffeeShopSound, shopSoundButton)
  })

  fireSoundButton.addEventListener('click', function () {
    fireSoundButton.classList.toggle('active')
    Sounds.PressButton()
    Sounds.SoundOnOff(Sounds.fireSound, fireSoundButton)
  })
}
