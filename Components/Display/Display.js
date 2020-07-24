/*  global
    width, height, textFont, textAlign, textSize, noStroke, fill, rect, text
    strokeWeight, stroke, noFill, circle, CENTER, RIGHT, orbiterFont, LEFT
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

class ControlCenter extends Display {
  constructor () {
    super()
    this.x = 0
    this.y = 0
    this.width = width
    this.height = height / 18
    this.currentStatus = ship.currentStatus
  }

  status () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(CENTER, CENTER)
    noStroke()
    fill(0)
    text(`STATUS: ${this.update()}`, width / 2, this.y + 20)
  }

  update () {
    this.currentStatus = ship.currentStatus
    return this.currentStatus
  }

  score () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(LEFT, CENTER)
    noStroke()
    fill(0)
    text(`SCORE: ${ship.score}`, this.x + 20, this.y + 20)
  }

  background () {
    noStroke()
    fill(this.color())
    rect(this.x, this.y, this.width, this.height)
  }

  show () {
    this.background()
    this.score()
    this.status()
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
