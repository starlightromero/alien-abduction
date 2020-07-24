/*  global
    width, height, textFont, textAlign, textSize, noStroke, fill, rect, text
    strokeWeight, stroke, noFill, circle, CENTER, RIGHT, orbiterFont
    ship, game, Clickable
*/

class Display {
  constructor () {
    this.font = orbiterFont
    this.titleSize = width / 12
    this.headingSize = this.titleSize / 2
    this.buttonSize = this.titleSize / 3.5
    this.fontSize = height / 25
    this.x = width / 2
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

  title (titleText) {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.titleSize)
    strokeWeight(4)
    stroke(this.color())
    noFill()
    text(titleText, this.x, this.y)
  }

  dismissScreen () {
    const dismissButton = new Clickable()
    dismissButton.resize(100, 100)
    dismissButton.locate(width / 2 - dismissButton.width / 2, height - dismissButton.height * 1.5)
    dismissButton.color = 'rgba(0,0,0,0)'
    dismissButton.strokeWeight = 0
    dismissButton.text = 'X'
    dismissButton.textColor = this.color()
    dismissButton.textSize = this.titleSize / 2
    dismissButton.textFont = this.font
    dismissButton.textScaled = true
    dismissButton.onHover = function () {
      dismissButton.textColor = '#0A005C'
      dismissButton.draw()
    }
    dismissButton.onPress = this.onDismiss
    dismissButton.draw()
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
    text(`SCORE: ${ship.score}`, this.scorex, this.scorey)
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
