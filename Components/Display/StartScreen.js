/*  global
    Display, height, Clickable, game
*/

class StartScreen extends Display {
  constructor () {
    super()
    this.y = height / 4
  }

  originButton () {
    const originButton = new Clickable()
    originButton.resize(this.titleSize * 4, this.titleSize / 2)
    originButton.locate(this.x - originButton.width / 2, this.y + this.titleSize * 3)
    originButton.color = this.color()
    originButton.cornerRadius = 100
    originButton.strokeWeight = 0
    originButton.text = 'ORIGIN'
    originButton.textColor = '#0A005C'
    originButton.textSize = this.buttonSize
    originButton.textFont = this.font
    originButton.textScaled = true
    originButton.onHover = function () {
      originButton.color = '#0A005C'
      originButton.strokeWeight = 3
      originButton.stroke = '#E581CA'
      originButton.text = 'REMEMBER...'
      originButton.textColor = '#E581CA'
      originButton.draw()
    }
    originButton.onPress = function () {
      console.log('story')
    }
    originButton.draw()
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
    this.originButton()
  }
}
