/*  global
  createCanvas, angleMode, windowWidth, windowHeight, Game, Display
  earthObjects, StreetLight, Tree, Fountain, DEGREES, MotherShip, Time
  Sidewalk, Parental, Cycler, FireHydrant, DogServant, humans, StartScreen
  Beam, possibleXValues, millis, width, random, ControlsScreen, LevelScreen
  CompletedScreen, GameoverScreen, backgroundMusic, StatusBar, OptionsScreen
*/

function setup () {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)

  appStart = millis()

  backgroundMusic.loop()

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

  ship = new MotherShip()
  angle = 1
  beam = new Beam()

  display = new Display()
  time = new Time()
  startScreen = new StartScreen()
  controlsScreen = new ControlsScreen()
  optionsScreen = new OptionsScreen()
  levelScreen = new LevelScreen()
  statusBar = new StatusBar()
  completedScreen = new CompletedScreen()
  gameoverScreen = new GameoverScreen()
}
