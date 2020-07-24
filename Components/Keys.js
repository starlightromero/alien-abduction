/*  global
    keyCode, game, teleportSound, millis
*/

function keyPressed () {
  if (game.state.current === game.state.playing) {
    if (keyCode === 32) {
      teleportSound.play()
    }
  }
}
