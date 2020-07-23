/*  global
    keyCode, game, teleportSoundt
*/

function keyPressed () {
  if (game.state.current === game.state.start) {
    gameStart = millis()
    game.state.current = game.state.playing
  } else if (game.state.current === game.state.playing) {
    if (keyCode === 32) {
      teleportSound.play()
    }
  }
}
