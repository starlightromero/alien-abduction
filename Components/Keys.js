/*  global
    keyCode
*/

function keyPressed () {
  if (game.state.current === game.state.start) {
    game.state.current = game.state.playing
    game.startTimer()
  } else if (game.state.current === game.state.playing) {
    if (keyCode === 32) {
      teleportSound.play()
    }
  }
}
