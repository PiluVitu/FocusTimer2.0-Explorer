import { audios, songsButtons, PlayAndPauseAudios } from './songs.js'

const buttons = {
  Play: document.querySelector('.buttons .play'),
  Pause: document.querySelector('.buttons .pause'),
  Stop: document.querySelector('.buttons .stop'),
  Add: document.querySelector('.buttons .add'),
  Remove: document.querySelector('.buttons .remove')
}
buttons.Play.onclick = () => {
  audios.Alarme.play()
  timer.play()
}

buttons.Pause.onclick = () => console.log('Pause')

buttons.Stop.onclick = () => console.log('Stop')

buttons.Add.onclick = () => console.log('Add')

buttons.Remove.onclick = () => console.log('Remove')

const timeDisplay = {
  MinutesOnDisplay: String(
    document.querySelector('.hours .minutes').innerText
  ).padStart(2, 0),
  SecondsOnDisplay: String(
    document.querySelector('.hours .seconds').innerText
  ).padStart(2.0)
}
const timeCalc = {
  Minutes: Number(timeDisplay.MinutesOnDisplay),
  Seconds: Number(timeDisplay.SecondsOnDisplay)
}

const timer = {
  play() {
    setTimeout(
      --timeCalc.Minutes
      
      
      timer.play()
      ,1000
    )
    
    console.log(`${timeCalc.Minutes} : ${timeCalc.Seconds}`)
  }
}




