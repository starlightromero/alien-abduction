/*  global
    width, height, textFont, textAlign, textSize, noStroke, fill, rect, text
    millis, strokeWeight, stroke, noFill, circle, CENTER, RIGHT
*/

class Display {
  constructor () {
    this.font = orbiterFont
    this.fontSize = height / 25
  }

  updateColor () {
    if (ship.currentStatus === 'GOOD') {
      return 'rgba(229, 129, 202, 0.7)'
    }
    if (ship.currentStatus === 'PARALYZED') {
      return 'rgba(255, 255, 0, 0.7)'
    }
    if (ship.currentStatus === 'CRASHED') {
      return 'rgba(255, 0, 0, 0.7)'
    }
  }
}

class Score extends Display {
  constructor () {
    super()
    this.score = 0
    this.scorex = width - 5
    this.scorey = this.fontSize

    this.x = width
    this.y = this.scorey - this.fontSize / 2
    this.height = this.fontSize * 1.2
  }

  checkScoreLength () {
    this.scoreLength = this.score.toString().length
    this.width = -160 - (this.fontSize * this.scoreLength / 1.5)
  }

  show () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(RIGHT, CENTER)
    noStroke()
    fill(this.updateColor())
    rect(this.x, this.y, this.width, this.height)
    fill(0)
    text(`SCORE: ${this.score}`, this.scorex, this.scorey)
    this.checkScoreLength()
  }
}

class Status extends Display {
  constructor () {
    super()
    this.currentStatus = ship.currentStatus
    this.statusx = width - 15
    this.statusy = this.fontSize * 3

    this.x = width
    this.y = this.statusy - this.fontSize / 2
    this.width = -300
    this.height = this.fontSize * 1.2
  }

  show () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(RIGHT, CENTER)
    noStroke()
    fill(this.updateColor())
    rect(this.x, this.y, this.width, this.height)
    fill(0)
    text(`STATUS: ${this.currentStatus}`, this.statusx, this.statusy)
  }

  update () {
    this.currentStatus = ship.currentStatus
  }
}

class Time extends Display {
  constructor () {
    super()
    this.x = width / 2
    this.y = height / 2
    this.width = width / 20
    this.height = height / 20
    this.fontSize = height / 7
    this.seconds = 61
  }

  update () {
    const timePassed = millis() / 1000
    const timeRemaining = Math.floor(this.seconds - timePassed)
    if (timeRemaining >= 0) {
      return timeRemaining
    }
    return 0
  }

  show () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(2)
    stroke(this.updateColor())
    noFill()
    circle(this.x, this.y, this.fontSize * 2)
    circle(this.x, this.y, this.fontSize * 2.2)
    text(this.update(), this.x, this.y)
  }
}

class PreGame extends Display {
  constructor () {
    super()
    this.x = width / 2
    this.y = height / 4
    this.fontSize = width / 12
  }

  startGame () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize / 2)
    noStroke()
    fill(this.updateColor())
    text('Press any key to start', this.x, this.y + this.fontSize * 2)
  }

  title () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(3)
    stroke(this.updateColor())
    noFill()
    text('ALIEN ABDUCTION', this.x, this.y)
  }

  show () {
    this.title()
    this.startGame()
  }
}

class PostGame extends Display {
  constructor () {
    super()
    this.x = width / 2
    this.y = height / 4
    this.fontSize = width / 7
  }

  stats () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize / 4)
    noStroke()
    fill(this.updateColor())
    text(`HUMANS ABDUCTED: ${ship.abductionCount.total}`, this.x, this.y + this.fontSize / 1.25)
    text(`SCORE: ${score.score}`, this.x, this.y + this.fontSize * 1.25)
  }

  title () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(4)
    stroke(this.updateColor())
    noFill()
    text('GAME OVER', this.x, this.y)
  }

  show () {
    this.title()
    this.stats()
  }
}
