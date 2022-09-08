function Teste() {
  console.log('Passou porra')
}
import Timer from './timer.js'
const timer = Timer()

import Sounds from './sounds.js'

const sounds = Sounds()

import Events from './events.js'

Events({
  Sounds: sounds,
  Timer: timer
})

Timer()

console.log('Mozovo')
