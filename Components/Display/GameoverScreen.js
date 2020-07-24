/*  global
    Display, width, height, textFont, textAlign, CENTER, textSize, noStroke
    text, score, ship, strokeWeight, noFill, stroke, Clickable, fill, game
*/

class GameoverScreen extends Display {
  constructor () {
    super()
    this.y = height / 6
    this.fontSize = width / 7
  }

  returnHome () {
    const returnHomeButton = new Clickable()
    returnHomeButton.resize(this.titleSize * 4, this.titleSize / 2)
    returnHomeButton.locate(this.x - returnHomeButton.width / 2, this.y + this.titleSize * 4)
    returnHomeButton.color = this.color()
    returnHomeButton.cornerRadius = 100
    returnHomeButton.strokeWeight = 0
    returnHomeButton.text = 'RETURN TO EARTH'
    returnHomeButton.textColor = '#0A005C'
    returnHomeButton.textSize = this.buttonSize
    returnHomeButton.textFont = this.font
    returnHomeButton.textScaled = true
    returnHomeButton.onHover = function () {
      returnHomeButton.color = '#0A005C'
      returnHomeButton.strokeWeight = 3
      returnHomeButton.stroke = '#E581CA'
      returnHomeButton.text = 'SIMPLE MORTAL'
      returnHomeButton.textColor = '#E581CA'
      returnHomeButton.draw()
    }
    returnHomeButton.onPress = function () {
      ship.score = 0
      ship.abductionCount.total = 0
      game.level = 0
      game.state.current = game.state.start
    }
    returnHomeButton.draw()
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
    text('GAME OVER', this.x, this.y)
  }

  show () {
    this.gameover()
    this.stats()
    this.returnHome()
  }
}
