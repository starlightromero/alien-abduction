/*  global
    resizeCanvas, windowWidth, windowHeight, width, height, sidewalk, hydrant
    fountain, humans, score, status, tree, light, preGame, game, time
*/

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)

  preGame.x = width / 2
  preGame.y = height / 4
  preGame.fontSize = width / 12

  score.scorex = width - 5
  score.x = width
  status.statusx = width - 15
  status.x = width

  time.x = width / 2
  time.y = height / 2
  time.width = width / 20
  time.height = height / 20
  time.fontSize = height / 7

  sidewalk.y = height - sidewalk.height

  hydrant.x = width / 3
  hydrant.y = sidewalk.y - hydrant.height
  fountain.x = width / 2 - fountain.width / 2
  fountain.y = sidewalk.y - fountain.height
  tree.y = sidewalk.y - tree.height
  light.x = width - light.width
  light.y = sidewalk.y - light.height

  for (const human of humans) {
    human.y = height - (sidewalk.height + human.height)
  }
}
