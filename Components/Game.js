/*  global
    millis, levelStart, ship
*/

class Game {
  constructor () {
    this.state = {
      current: '',
      controls: 'controls',
      options: 'options',
      start: 'start',
      level: 'level',
      playing: 'playing',
      completed: 'completed',
      gameover: 'gameover'
    }
    this.level = 1
  }

  scoreNeeded () {
    return this.level * 500
  }

  humansNeeded () {
    return this.level * 10
  }

  timeRemaining () {
    const seconds = 60
    const currentTime = millis()
    const timePassed = Math.floor((currentTime - levelStart) / 1000)
    const timeRemaining = seconds - timePassed
    if (timeRemaining >= 0) {
      return timeRemaining
    } else if (ship.score >= this.scoreNeeded()) {
      this.state.current = this.state.completed
      this.level++
      return 0
    } else {
      this.state.current = this.state.gameover
      return 0
    }
  }
}
