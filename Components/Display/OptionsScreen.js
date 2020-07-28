/*  global
    height, Display, game, textAlign, textFont, textSize
    fill, text, Clickable, TOP, backgroundMusic, RIGHT
*/

class OptionsScreen extends Display {
  constructor () {
    super()
    this.y = height / 4
  }

  backgroundMusicText () {
    textFont(this.font)
    textAlign(RIGHT, TOP)
    textSize(this.fontSize)
    fill(this.color())
    text('BACKGROUND MUSIC', this.x, this.y + this.titleSize)
  }

  musicButton () {
    const musicButton = new Clickable()
    musicButton.resize(this.fontSize * 1.5, this.fontSize * 1.5)
    musicButton.locate(this.x + musicButton.width, this.y + this.titleSize - this.buttonSize / 2)
    musicButton.color = this.color()
    musicButton.cornerRadius = 100
    musicButton.strokeWeight = 0
    musicButton.text = `${backgroundMusic.isPlaying() ? 1 : 0}`
    musicButton.textColor = '#0A005C'
    musicButton.textSize = this.buttonSize
    musicButton.textFont = this.font
    musicButton.textScaled = true
    musicButton.onHover = function () {
      musicButton.color = '#0A005C'
      musicButton.strokeWeight = 3
      musicButton.stroke = '#E581CA'
      musicButton.text = `${backgroundMusic.isPlaying() ? 0 : 1}`
      musicButton.textColor = '#E581CA'
      musicButton.draw()
    }
    musicButton.onPress = function () {
      if (backgroundMusic.isPlaying()) {
        backgroundMusic.stop()
      } else {
        backgroundMusic.loop()
      }
    }
    musicButton.draw()
  }

  onDismiss () {
    game.state.current = game.state.start
  }

  show () {
    this.dismissScreen()
    this.musicButton()
    this.backgroundMusicText()
    this.title('OPTIONS')
  }
}
