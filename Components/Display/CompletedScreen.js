/*  global
    Display, width, height, textFont, textAlign, CENTER, textSize, noStroke, fill
    text, score, ship, strokeWeight, noFill, stroke, game, Clickable
*/

class CompletedScreen extends Display {
  constructor () {
    super()
    this.y = height / 6
    this.fontSize = width / 7
  }

  continue () {
    const continueButton = new Clickable()
    continueButton.resize(this.titleSize * 4, this.titleSize / 2)
    continueButton.locate(this.x - continueButton.width / 2, this.y + this.titleSize * 4)
    continueButton.color = this.color()
    continueButton.cornerRadius = 100
    continueButton.strokeWeight = 0
    continueButton.text = 'NEXT ASSIGNMENT'
    continueButton.textColor = '#0A005C'
    continueButton.textSize = this.buttonSize
    continueButton.textFont = this.font
    continueButton.textScaled = true
    continueButton.onHover = function () {
      continueButton.color = '#0A005C'
      continueButton.strokeWeight = 3
      continueButton.stroke = '#E581CA'
      continueButton.text = 'IT\'LL ONLY GET HARDER'
      continueButton.textColor = '#E581CA'
      continueButton.draw()
    }
    continueButton.onPress = function () {
      ship.score = 0
      ship.abductionCount.total = 0
      ship.reset()
      game.state.current = game.state.level
    }
    continueButton.draw()
  }

  stats () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize / 4)
    noStroke()
    fill(this.color())
    text(`HUMANS ABDUCTED: ${ship.abductionCount.total}`, this.x, this.y + this.fontSize / 1.25)
    text(`SCORE: ${ship.score}`, this.x, this.y + this.fontSize * 1.25)
  }

  gameover () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(4)
    stroke(this.color())
    noFill()
    text('COMPLETE', this.x, this.y)
  }

  show () {
    this.gameover()
    this.stats()
    this.continue()
  }
}
