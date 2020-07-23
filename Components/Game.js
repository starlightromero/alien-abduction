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
  }

  startTimer () {
    const seconds = 61
    const timePassed = millis() / 1000
    const timeRemaining = Math.floor(seconds - timePassed)
    if (timeRemaining >= 0) {
      return timeRemaining
    }
    return 0
  }
}
