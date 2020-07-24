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

  possibleXValues = [0, width, -50, width + 50, -25, width + 25]

  parental = new Parental(random(possibleXValues))
  parental2 = new Parental(random(possibleXValues))
  parental3 = new Parental(random(possibleXValues))
  cycler = new Cycler(random(possibleXValues))
  dogServant = new DogServant(random(possibleXValues))

  humans.push(parental)
  humans.push(parental2)
  humans.push(parental3)
  humans.push(cycler)
  humans.push(dogServant)
  console.log(humans)

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
