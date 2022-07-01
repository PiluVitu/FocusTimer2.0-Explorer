export default function Timer({ minutesDisplay }) {
  let minutes = Number(minutesDisplay.textContent)
  function AddMinutes() {
    const sum = minutes + 5
    minutes = sum
    if (minutes <= 60) {
      minutesDisplay.textContent = String(minutes).padStart(2, 0)
    } else {
      alert('Só é possível adicionar até 60 Minutos')
    }
  }
  function RemoveMinutes() {
    const sum = minutes - 5
    minutes = sum
    if (minutes >= 5) {
      minutesDisplay.textContent = String(minutes).padStart(2, 0)
    } else {
      alert('Só é possível reduzir até 5 Minutos')
    }
  }

  return {
    AddMinutes,
    RemoveMinutes
  }
}
