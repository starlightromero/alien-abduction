/*  global
    Display, height, game
*/

class ControlsScreen extends Display {
  constructor () {
    super()
    this.y = height / 10
  }

  onDismiss () {
    game.state.current = game.state.start
  }

  show () {
    this.dismissScreen()
    this.title('CONTROLS')
  }
}
