export default function Sounds() {
  const natureSound = new Audio(
    'https://github.com/PiluVitu/FocusTimer2.0-Explorer/blob/main/Assets/Floresta.mp3?raw=true'
  )
  const rainSound = new Audio(
    'https://github.com/PiluVitu/FocusTimer2.0-Explorer/blob/main/Assets/Chuva.mp3?raw=true'
  )
  const coffeeShopSound = new Audio(
    'https://github.com/PiluVitu/FocusTimer2.0-Explorer/blob/main/Assets/Cafeteria.mp3?raw=true'
  )
  const fireSound = new Audio(
    'https://github.com/PiluVitu/FocusTimer2.0-Explorer/blob/main/Assets/Lareira.mp3?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  function PressButton() {
    buttonPressAudio.play()
    buttonPressAudio.volume = 0.5
  }

  function TimerComplete() {
    kitchenTimer.play()
    kitchenTimer.volume = 0.5
  }

  function Nature() {
    natureSound.play()
    natureSound.volume = 0.5
    natureSound.loop = true
    
  }
  function CoffeeShop() {
    coffeeShopSound.play()
    coffeeShopSound.volume = 0.5
    coffeeShopSound.loop = true
  }
  function Rain() {
    rainSound.play()
    rainSound.volume = 0.5
    rainSound.loop = true
  }
  function Fire() {
    fireSound.play()
    fireSound.volume = 0.5
    fireSound.loop = true
  }

  return {
    PressButton,
    TimerComplete,
    Nature,
    CoffeeShop,
    Rain,
    Fire
  }
}
