/*  global
    background, game, sidewalk, starBackground, earthObjects, humans
    time, ship, time, startScreen, levelScreen, controlsScreen
    gameoverScreen, completedScreen, statusBar, random, optionsScreen
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
      human.pauseWalking()
    }

    statusBar.show()
    time.show()
    ship.fly()

    ship.show()
  } else if (game.state.current === game.state.completed) {
    completedScreen.show()
  } else if (game.state.current === game.state.gameover) {
    gameoverScreen.show()
  } else if (game.state.current === game.state.controls) {
    controlsScreen.show()
  } else if (game.state.current === game.state.options) {
    optionsScreen.show()
  }
}
