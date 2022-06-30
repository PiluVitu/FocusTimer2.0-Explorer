export default function Sounds() {
  const natureSound = new Audio(
    'https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view'
  )
  const rainSound = new Audio(
    'https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view'
  )
  const coffeeShopSound = new Audio(
    'https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view'
  )
  const fireSound = new Audio(
    'https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view'
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

  function NatureSound() {
    natureSound.play()
    natureSound.volume = 0.5
    natureSound.loop = true
  }
  function CoffeeShopSound() {
    coffeeShopSound.play()
    coffeeShopSound.volume = 0.5
    coffeeShopSound.loop = true
  }
  function RainSound() {
    rainSound.play()
    rainSound.volume = 0.5
    rainSound.loop = true
  }
  function FireSound() {
    fireSound.play()
    fireSound.volume = 0.5
    fireSound.loop = true
  }

  return {
    PressButton,
    TimerComplete,
    NatureSound,
    CoffeeShopSound,
    RainSound,
    FireSound
  }
}
