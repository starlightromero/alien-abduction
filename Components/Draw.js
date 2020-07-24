/*  global
    background, game, sidewalk, starBackground, earthObjects, humans, levelScreen
    score, status, time, ship, time, postGame, startScreen, controlsScreen
*/

function draw () {
  background(starBackground)

  if (game.state.current === game.state.start) {
    startScreen.show()
  } else if (game.state.current === game.state.level) {
    levelScreen.show()
  } else if (game.state.current === game.state.playing) {
    sidewalk.show()

    for (const earthObject of earthObjects) {
      earthObject.show()
    }

    for (const human of humans) {
      human.show()
      human.walk()
      // human.pause()
    }

    score.show()
    status.show()
    time.show()
    ship.fly()

    ship.show()
  } else if (game.state.current === game.state.completed) {
    postGame.show()
  } else if (game.state.current === game.state.gameover) {
    gameover.show()
  } else if (game.state.current === game.state.controls) {
    controlsScreen.show()
  }
}
