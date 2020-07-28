/*  global
    Display, height, Clickable, game
*/

class StartScreen extends Display {
  constructor () {
    super()
    this.y = height / 4
  }

  optionButton () {
    const optionButton = new Clickable()
    optionButton.resize(this.titleSize * 4, this.titleSize / 2)
    optionButton.locate(this.x - optionButton.width / 2, this.y + this.titleSize * 3)
    optionButton.color = this.color()
    optionButton.cornerRadius = 100
    optionButton.strokeWeight = 0
    optionButton.text = 'OPTIONS'
    optionButton.textColor = '#0A005C'
    optionButton.textSize = this.buttonSize
    optionButton.textFont = this.font
    optionButton.textScaled = true
    optionButton.onHover = function () {
      optionButton.color = '#0A005C'
      optionButton.strokeWeight = 3
      optionButton.stroke = '#E581CA'
      optionButton.text = 'IT\'S YOUR CHOICE'
      optionButton.textColor = '#E581CA'
      optionButton.draw()
    }
    optionButton.onPress = function () {
      game.state.current = game.state.options
    }
    optionButton.draw()
  }

  controlsButton () {
    const controlsButton = new Clickable()
    controlsButton.resize(this.titleSize * 4, this.titleSize / 2)
    controlsButton.locate(this.x - controlsButton.width / 2, this.y + this.titleSize * 2)
    controlsButton.color = this.color()
    controlsButton.cornerRadius = 100
    controlsButton.strokeWeight = 0
    controlsButton.text = 'CONTROLS'
    controlsButton.textColor = '#0A005C'
    controlsButton.textSize = this.buttonSize
    controlsButton.textFont = this.font
    controlsButton.textScaled = true
    controlsButton.onHover = function () {
      controlsButton.color = '#0A005C'
      controlsButton.strokeWeight = 3
      controlsButton.stroke = '#E581CA'
      controlsButton.text = 'THE POWER IS WITHIN'
      controlsButton.textColor = '#E581CA'
      controlsButton.draw()
    }
    controlsButton.onPress = function () {
      game.state.current = game.state.controls
    }
    controlsButton.draw()
  }

  startGameButton () {
    const startGameButton = new Clickable()
    startGameButton.resize(this.titleSize * 4, this.titleSize / 2)
    startGameButton.locate(this.x - startGameButton.width / 2, this.y + this.titleSize)
    startGameButton.color = this.color()
    startGameButton.cornerRadius = 100
    startGameButton.strokeWeight = 0
    startGameButton.text = 'START GAME'
    startGameButton.textColor = '#0A005C'
    startGameButton.textSize = this.buttonSize
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
      game.state.current = game.state.level
    }
    startGameButton.draw()
  }

  show () {
    this.title('ALIEN ABDUCTION')
    this.startGameButton()
    this.controlsButton()
    this.optionButton()
  }
}
