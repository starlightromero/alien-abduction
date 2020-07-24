/*  global
    millis, gameStart
*/

class Game {
  constructor () {
    this.state = {
      current: '',
      controls: 'controls',
      start: 'start',
      level: 'level',
      playing: 'playing',
      completed: 'completed',
      gameover: 'gameover'
    }
    this.level = 1
  }

  timeRemaining () {
    const seconds = 60
    const currentTime = millis()
    const timePassed = Math.floor((currentTime - gameStart) / 1000)
    const timeRemaining = seconds - timePassed
    if (timeRemaining >= 0) {
      return timeRemaining
    } else {
      this.state.current = this.state.completed
      return 0
    }
  }
}
