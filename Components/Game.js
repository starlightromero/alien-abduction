/*  global
    millis, levelStart
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

  assignment () {
    const scoreNeeded = this.level * 500
    const humansNeeded = this.level * 10
    return [scoreNeeded, humansNeeded]
  }

  timeRemaining () {
    const seconds = 60
    const currentTime = millis()
    const timePassed = Math.floor((currentTime - levelStart) / 1000)
    const timeRemaining = seconds - timePassed
    if (timeRemaining >= 0) {
      return timeRemaining
    } else {
      this.state.current = this.state.completed
      return 0
    }
  }
}
