/*  global
  createCanvas, angleMode, windowWidth, windowHeight, Game, game, Display, Score
  earthObjects, StreetLight, Tree, Fountain, DEGREES, MotherShip, Status, Time
  Sidewalk, Parental, Cycler, FireHydrant, DogServant, humans, PreGame, PostGame
  Beam
*/

function setup () {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)

  game = new Game()
  game.state.current = game.state.start

  sidewalk = new Sidewalk()

  hydrant = new FireHydrant()
  fountain = new Fountain()
  tree = new Tree()
  light = new StreetLight()

  earthObjects.push(hydrant)
  earthObjects.push(fountain)
  earthObjects.push(tree)
  earthObjects.push(light)

  parental = new Parental()
  cycler = new Cycler()
  dogServant = new DogServant()

  humans.push(parental)
  humans.push(cycler)
  humans.push(dogServant)

  ship = new MotherShip()
  angle = 1
  beam = new Beam()

  display = new Display()
  score = new Score()
  status = new Status()
  time = new Time()
  preGame = new PreGame()
  postGame = new PostGame()
}
