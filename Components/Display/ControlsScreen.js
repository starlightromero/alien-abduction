/*  global
    Display, width, height, textFont, textAlign, CENTER, textSize, strokeWeight
    stroke, noFill, text, Clickable
*/

class ControlsScreen extends Display {
  constructor () {
    super()
    this.x = width / 2
    this.y = height / 10
  }

  titleText () {
    text('CONTROLS', this.x, this.y)
  }

  onDismiss () {
    game.state.current = game.state.start
  }

  show () {
    this.dismissScreen()
    this.title()
  }
}
