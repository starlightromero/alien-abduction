/*  global
    millis
*/

class Game {
  constructor () {
    this.state = {
      current: '',
      start: 'start',
      playing: 'playing',
      completed: 'completed',
      gameover: 'gameover'
    }
    this.level = 0
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
