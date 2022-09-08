const songsButtons = {
  Nature: document.querySelector('.soundCards .tree'),
  Rain: document.querySelector('.soundCards .rain'),
  ShopStore: document.querySelector('.soundCards .shop'),
  Fire: document.querySelector('.soundCards .fire')
}
const audios = {
  Nature: new Audio('../Assets/Floresta.mp3'),
  Rain: new Audio('../Assets/Chuva.mp3'),
  Shop: new Audio('../Assets/Cafeteria.mp3'),
  Fire: new Audio('../Assets/Lareira.mp3'),
  Alarme: new Audio('../Assets/aaal.mp3')
}
function PlayAndPauseAudios(button, audio) {
  audio.loop = true
  let playing = button.classList.contains('playing')
  playing === false ? audio.play() : audio.pause()
  button.classList.toggle('playing')
}
songsButtons.Nature.onclick = () => {
  PlayAndPauseAudios(songsButtons.Nature, audios.Nature)
}

songsButtons.Rain.onclick = () => {
  PlayAndPauseAudios(songsButtons.Rain, audios.Rain)
}

songsButtons.ShopStore.onclick = () => {
  PlayAndPauseAudios(songsButtons.ShopStore, audios.Shop)
}

songsButtons.Fire.onclick = () => {
  PlayAndPauseAudios(songsButtons.Fire, audios.Fire)
}

export { songsButtons, audios, PlayAndPauseAudios }
