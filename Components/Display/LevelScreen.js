/*  global
    Display, game, height, textFont,textAlign, CENTER, textSize, fill
    noStroke, text, Clickable, rect, millis
*/

class LevelScreen extends Display {
  constructor () {
    super()
    this.y = height / 4
  }

  acceptButton () {
    const acceptButton = new Clickable()
    acceptButton.resize(this.titleSize * 4, this.titleSize / 2)
    acceptButton.locate(this.x - acceptButton.width / 2, this.y + this.titleSize * 4)
    acceptButton.color = this.color()
    acceptButton.cornerRadius = 100
    acceptButton.strokeWeight = 0
    acceptButton.text = 'ACCEPT ASSIGNMENT'
    acceptButton.textColor = '#0A005C'
    acceptButton.textSize = this.buttonSize
    acceptButton.textFont = this.font
    acceptButton.textScaled = true
    acceptButton.onHover = function () {
      acceptButton.color = '#0A005C'
      acceptButton.strokeWeight = 3
      acceptButton.stroke = '#E581CA'
      acceptButton.text = 'NO TURNING BACK'
      acceptButton.textColor = '#E581CA'
      acceptButton.draw()
    }
    acceptButton.onPress = function () {
      levelStart = millis()
      game.state.current = game.state.playing
    }
    acceptButton.draw()
  }

  divider () {
    noStroke()
    fill(this.color())
    rect(this.x - this.headingSize * 5, this.y + this.headingSize * 2.7, this.headingSize * 10, 5)
  }

  assignment () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    noStroke()
    fill(this.color())
    text(`REQUIRED SCORE: ${game.scoreNeeded()}`, this.x, this.y + this.headingSize * 4)
    text('OR', this.x, this.y + this.headingSize * 5)
    text(`REQUIRED HUMANS: ${game.humansNeeded()}`, this.x, this.y + this.headingSize * 6)
  }

  heading () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.headingSize)
    noStroke()
    fill(this.color())
    text('Assignment', this.x, this.y + this.headingSize * 2)
  }

  show () {
    this.title(`LEVEL ${game.level}`)
    this.heading()
    this.divider()
    this.assignment()
    this.acceptButton()
  }
}
