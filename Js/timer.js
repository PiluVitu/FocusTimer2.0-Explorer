export default function Timer() {
  let minutesDisplay = document.querySelector('.minutes')
  let secondsDisplay = document.querySelector('.seconds')
  let defaultMinutes = minutesDisplay.textContent
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  let timerOut

  

  

  function AddMinutes() {
    const sum = Number(defaultMinutes) + 5
    defaultMinutes = sum
    if (defaultMinutes <= 60) {
      minutesDisplay.textContent = String(defaultMinutes).padStart(2, 0)
    } else {
      defaultMinutes = 60
      alert('Só é possível adicionar até 60 Minutos')
    }
  }
  function RemoveMinutes() {
    const sum = Number(defaultMinutes) - 5
    defaultMinutes = sum
    if (defaultMinutes >= 5) {
      minutesDisplay.textContent = String(defaultMinutes).padStart(2, 0)
    } else {
      defaultMinutes = 5
      alert('Só é possível reduzir até 5 Minutos')
    }
  }

  return {
    AddMinutes,
    RemoveMinutes,
    TimerCountDown,
    TimerCountPause,
    TimerCountStop
  }
}
