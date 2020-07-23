/*  global
    width, height, textFont, textAlign, textSize, noStroke, fill, rect, text
    millis, strokeWeight, stroke, noFill, circle, CENTER, RIGHT, orbiterFont
    ship, score, game, Clickable
*/

class Display {
  constructor () {
    this.font = orbiterFont
    this.fontSize = height / 25
  }

  color () {
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
    this.scoreLength = ship.score.toString().length
    this.width = -160 - (this.fontSize * this.scoreLength / 1.5)
  }

  show () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(RIGHT, CENTER)
    noStroke()
    fill(this.color())
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
    fill(this.color())
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
  }

  show () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(2)
    stroke(this.color())
    noFill()
    circle(this.x, this.y, this.fontSize * 2)
    circle(this.x, this.y, this.fontSize * 2.2)
    text(game.timeRemaining(), this.x, this.y)
  }
}

class StartScreen extends Display {
  constructor () {
    super()
    this.x = width / 2
    this.y = height / 4
    this.fontSize = width / 12
  }

  startGame () {
    const startGameButton = new Clickable()
    startGameButton.resize(this.fontSize * 5, this.fontSize * 1)
    startGameButton.locate(this.x - startGameButton.width / 2, this.y + this.fontSize * 1.25)
    startGameButton.color = this.color()
    startGameButton.cornerRadius = 100
    startGameButton.strokeWeight = 0
    startGameButton.text = 'START GAME'
    startGameButton.textColor = '#0A005C'
    startGameButton.textSize = this.fontSize / 2
    startGameButton.textFont = this.font
    startGameButton.textScaled = true
    startGameButton.onHover = function () {
      startGameButton.color = '#0A005C'
      startGameButton.strokeWeight = 3
      startGameButton.stroke = '#E581CA'
      startGameButton.text = 'ARE YOU SURE?'
      startGameButton.textColor = '#E581CA'
      startGameButton.draw()
    }
    startGameButton.onPress = function () {
      gameStart = millis()
      game.state.current = game.state.playing
    }
    startGameButton.draw()
  }

  // startGame () {
  //   textFont(this.font)
  //   textAlign(CENTER, CENTER)
  //   textSize(this.fontSize / 2)
  //   noStroke()
  //   fill(this.color())
  //   text('Press any key to start', this.x, this.y + this.fontSize * 2)
  // }

  title () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(3)
    stroke(this.color())
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
    fill(this.color())
    text(`HUMANS ABDUCTED: ${ship.abductionCount.total}`, this.x, this.y + this.fontSize / 1.25)
    text(`SCORE: ${score.score}`, this.x, this.y + this.fontSize * 1.25)
  }

  gameover () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(4)
    stroke(this.color())
    noFill()
    text('GAME OVER', this.x, this.y)
  }

  show () {
    this.gameover()
    this.stats()
  }
}
