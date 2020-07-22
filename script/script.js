/*    global
     background, createCanvas, fill, height, LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, map
     noStroke, random, strokeWeight, text, textSize, width, loadSound, rect, triangle, collidePointCircle, collideRectRect, collidePointRect, keyCode, keyPressed
     loadImage, image, loadFont, textAlign, CENTER, textFont, windowWidth, windowHeight, strokeWeight, stroke
     resizeCanvas, keyIsDown, noFill, angleMode, DEGREES, rectMode, soundFormats, p5, WEBGL, rotateY, RIGHT, second, circle, millis
 */

//           _____                   _____                   _____                   _____                   _____                   _____
//          /\    \                 /\    \                 /\    \                 /\    \                 /\    \                 /\    \
//         /::\    \               /::\    \               /::\    \               /::\    \               /::\____\               /::\    \
//        /::::\    \             /::::\    \             /::::\    \              \:::\    \             /::::|   |              /::::\    \
//       /::::::\    \           /::::::\    \           /::::::\    \              \:::\    \           /:::::|   |             /::::::\    \
//      /:::/\:::\    \         /:::/\:::\    \         /:::/\:::\    \              \:::\    \         /::::::|   |            /:::/\:::\    \
//     /:::/  \:::\    \       /:::/__\:::\    \       /:::/__\:::\    \              \:::\    \       /:::/|::|   |           /:::/__\:::\    \
//    /:::/    \:::\    \     /::::\   \:::\    \     /::::\   \:::\    \             /::::\    \     /:::/ |::|   |          /::::\   \:::\    \
//   /:::/    / \:::\    \   /::::::\   \:::\    \   /::::::\   \:::\    \   ____    /::::::\    \   /:::/  |::|   | _____   /::::::\   \:::\    \
//  /:::/    /   \:::\ ___\ /:::/\:::\   \:::\    \ /:::/\:::\   \:::\    \ /\   \  /:::/\:::\    \ /:::/   |::|   |/\    \ /:::/\:::\   \:::\    \
// /:::/____/     \:::|    /:::/__\:::\   \:::\____/:::/  \:::\   \:::\____/::\   \/:::/  \:::\____/:: /    |::|   /::\____/:::/__\:::\   \:::\____\
// \:::\    \     /:::|____\:::\   \:::\   \::/    \::/    \:::\   \::/    \:::\  /:::/    \::/    \::/    /|::|  /:::/    \:::\   \:::\   \::/    /
//  \:::\    \   /:::/    / \:::\   \:::\   \/____/ \/____/ \:::\   \/____/ \:::\/:::/    / \/____/ \/____/ |::| /:::/    / \:::\   \:::\   \/____/
//   \:::\    \ /:::/    /   \:::\   \:::\    \              \:::\    \      \::::::/    /                  |::|/:::/    /   \:::\   \:::\    \
//    \:::\    /:::/    /     \:::\   \:::\____\              \:::\____\      \::::/____/                   |::::::/    /     \:::\   \:::\____\
//     \:::\  /:::/    /       \:::\   \::/    /               \::/    /       \:::\    \                   |:::::/    /       \:::\   \::/    /
//      \:::\/:::/    /         \:::\   \/____/                 \/____/         \:::\    \                  |::::/    /         \:::\   \/____/
//       \::::::/    /           \:::\    \                                      \:::\    \                 /:::/    /           \:::\    \
//        \::::/    /             \:::\____\                                      \:::\____\               /:::/    /             \:::\____\
//         \::/____/               \::/    /                                       \::/    /               \::/    /               \::/    /
//          ~~                      \/____/                                         \/____/                 \/____/                 \/____/

let game

let starBackground
let sidewalk

let fireHydrantImg
let hydrant
let streetLightImg
let light
let fountainImg
let fountain
let treeImgs
let tree

const earthObjects = []

const humans = []
let human
let parentalSubLeft
let parentalSubRight
let cyclerSubRight
let cyclerSubLeft
let dogServantSubLeftOne
let dogServantSubRightOne
let dogServantSubRightTwo
let dogServantSubLeftTwo

let teleportSound
let orbiterFont

let beamImg
let beam
let shipImg
let ship
let angle

let display
let score
let status
let time
let preGame
let postGame

//           _____                   _____                   _____                   _____    _______                  _____                   _____
//          /\    \                 /\    \                 /\    \                 /\    \  /::\    \                /\    \                 /\    \
//         /::\    \               /::\    \               /::\    \               /::\____\/::::\    \              /::\    \               /::\    \
//        /::::\    \             /::::\    \             /::::\    \             /:::/    /::::::\    \            /::::\    \             /::::\    \
//       /::::::\    \           /::::::\    \           /::::::\    \           /:::/    /::::::::\    \          /::::::\    \           /::::::\    \
//      /:::/\:::\    \         /:::/\:::\    \         /:::/\:::\    \         /:::/    /:::/~~\:::\    \        /:::/\:::\    \         /:::/\:::\    \
//     /:::/__\:::\    \       /:::/__\:::\    \       /:::/__\:::\    \       /:::/    /:::/    \:::\    \      /:::/__\:::\    \       /:::/  \:::\    \
//    /::::\   \:::\    \     /::::\   \:::\    \     /::::\   \:::\    \     /:::/    /:::/    / \:::\    \    /::::\   \:::\    \     /:::/    \:::\    \
//   /::::::\   \:::\    \   /::::::\   \:::\    \   /::::::\   \:::\    \   /:::/    /:::/____/   \:::\____\  /::::::\   \:::\    \   /:::/    / \:::\    \
//  /:::/\:::\   \:::\____\ /:::/\:::\   \:::\____\ /:::/\:::\   \:::\    \ /:::/    |:::|    |     |:::|    |/:::/\:::\   \:::\    \ /:::/    /   \:::\ ___\
// /:::/  \:::\   \:::|    /:::/  \:::\   \:::|    /:::/__\:::\   \:::\____/:::/____/|:::|____|     |:::|    /:::/  \:::\   \:::\____/:::/____/     \:::|    |
// \::/    \:::\  /:::|____\::/   |::::\  /:::|____\:::\   \:::\   \::/    \:::\    \ \:::\    \   /:::/    /\::/    \:::\  /:::/    \:::\    \     /:::|____|
//  \/_____/\:::\/:::/    / \/____|:::::\/:::/    / \:::\   \:::\   \/____/ \:::\    \ \:::\    \ /:::/    /  \/____/ \:::\/:::/    / \:::\    \   /:::/    /
//           \::::::/    /        |:::::::::/    /   \:::\   \:::\    \      \:::\    \ \:::\    /:::/    /            \::::::/    /   \:::\    \ /:::/    /
//            \::::/    /         |::|\::::/    /     \:::\   \:::\____\      \:::\    \ \:::\__/:::/    /              \::::/    /     \:::\    /:::/    /
//             \::/____/          |::| \::/____/       \:::\   \::/    /       \:::\    \ \::::::::/    /               /:::/    /       \:::\  /:::/    /
//              ~~                |::|  ~|              \:::\   \/____/         \:::\    \ \::::::/    /               /:::/    /         \:::\/:::/    /
//                                |::|   |               \:::\    \              \:::\    \ \::::/    /               /:::/    /           \::::::/    /
//                                \::|   |                \:::\____\              \:::\____\ \::/____/               /:::/    /             \::::/    /
//                                 \:|   |                 \::/    /               \::/    /  ~~                     \::/    /               \::/____/
//                                  \|___|                  \/____/                 \/____/                           \/____/                 ~~

function preload () {
  starBackground = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fstar-background.png?v=1595137971450')
  fireHydrantImg = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fhydrant.png?v=1595136722968')
  streetLightImg = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fstreet-lamp.png?v=1595140565178')
  fountainImg = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Ffountain.png?v=1595140984946https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Ffountain.png?v=1595140984946')
  treeImgs = [
    loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2F033-tree.png?v=1595192059281')
  ]

  teleportSound = loadSound('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2F178346__andromadax24__s-teleport-04.mp3?v=1595212186939')

  beamImg = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2FspaceshipBeam.png?v=1595199136040')
  shipImg = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2FalienSpaceship.png?v=1595195477862')

  orbiterFont = loadFont('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2FEarthOrbiter-YZ12.otf?v=1595213291427')

  parentalSubLeft = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fparental-test-subject-left-02.png?v=1595176220340')
  parentalSubRight = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fparental-test-subject-right-03.png?v=1595176228723')

  cyclerSubLeft = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fcycling-test-subject-left-05.png?v=1595180456668')
  cyclerSubRight = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fcycling-test-subject-right-04.png?v=1595180464161')

  dogServantSubLeftOne = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fanimal-walking-human-left-stepOne_Artboard%205.png?v=1595302975343')
  dogServantSubLeftTwo = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fanimal-walking-human-left-stepTwo_Artboard%203.png?v=1595302997898')
  dogServantSubRightOne = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fanimal-walking-human-right-stepOne_Artboard%204.png?v=1595303007326')
  dogServantSubRightTwo = loadImage('https://cdn.glitch.com/a22283c3-b46c-4b2c-a4bc-36f68affd137%2Fanimal-walking-human-right-stepTwo_Artboard%202.png?v=1595303014669')
}

//           _____                    _____                _____                    _____                    _____
//          /\    \                  /\    \              /\    \                  /\    \                  /\    \
//         /::\    \                /::\    \            /::\    \                /::\____\                /::\    \
//        /::::\    \              /::::\    \           \:::\    \              /:::/    /               /::::\    \
//       /::::::\    \            /::::::\    \           \:::\    \            /:::/    /               /::::::\    \
//      /:::/\:::\    \          /:::/\:::\    \           \:::\    \          /:::/    /               /:::/\:::\    \
//     /:::/__\:::\    \        /:::/__\:::\    \           \:::\    \        /:::/    /               /:::/__\:::\    \
//     \:::\   \:::\    \      /::::\   \:::\    \          /::::\    \      /:::/    /               /::::\   \:::\    \
//   ___\:::\   \:::\    \    /::::::\   \:::\    \        /::::::\    \    /:::/    /      _____    /::::::\   \:::\    \
//  /\   \:::\   \:::\    \  /:::/\:::\   \:::\    \      /:::/\:::\    \  /:::/____/      /\    \  /:::/\:::\   \:::\____\
// /::\   \:::\   \:::\____\/:::/__\:::\   \:::\____\    /:::/  \:::\____\|:::|    /      /::\____\/:::/  \:::\   \:::|    |
// \:::\   \:::\   \::/    /\:::\   \:::\   \::/    /   /:::/    \::/    /|:::|____\     /:::/    /\::/    \:::\  /:::|____|
//  \:::\   \:::\   \/____/  \:::\   \:::\   \/____/   /:::/    / \/____/  \:::\    \   /:::/    /  \/_____/\:::\/:::/    /
//   \:::\   \:::\    \       \:::\   \:::\    \      /:::/    /            \:::\    \ /:::/    /            \::::::/    /
//    \:::\   \:::\____\       \:::\   \:::\____\    /:::/    /              \:::\    /:::/    /              \::::/    /
//     \:::\  /:::/    /        \:::\   \::/    /    \::/    /                \:::\__/:::/    /                \::/____/
//      \:::\/:::/    /          \:::\   \/____/      \/____/                  \::::::::/    /                  ~~
//       \::::::/    /            \:::\    \                                    \::::::/    /
//        \::::/    /              \:::\____\                                    \::::/    /
//         \::/    /                \::/    /                                     \::/____/
//          \/____/                  \/____/                                       ~~

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

  human = new Human()

  for (let i = 0; i < 1; i++) {
    human.generate(Parental)
    human.generate(Cycler)
    human.generate(DogServant)
  }

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

//           _____                    _____                    _____                    _____
//          /\    \                  /\    \                  /\    \                  /\    \
//         /::\    \                /::\    \                /::\    \                /::\____\
//        /::::\    \              /::::\    \              /::::\    \              /:::/    /
//       /::::::\    \            /::::::\    \            /::::::\    \            /:::/   _/___
//      /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/   /\    \
//     /:::/  \:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/   /::\____\
//    /:::/    \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \      /:::/   /:::/    /
//   /:::/    / \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \    /:::/   /:::/   _/___
//  /:::/    /   \:::\ ___\  /:::/\:::\   \:::\____\  /:::/\:::\   \:::\    \  /:::/___/:::/   /\    \
// /:::/____/     \:::|    |/:::/  \:::\   \:::|    |/:::/  \:::\   \:::\____\|:::|   /:::/   /::\____\
// \:::\    \     /:::|____|\::/   |::::\  /:::|____|\::/    \:::\  /:::/    /|:::|__/:::/   /:::/    /
//  \:::\    \   /:::/    /  \/____|:::::\/:::/    /  \/____/ \:::\/:::/    /  \:::\/:::/   /:::/    /
//   \:::\    \ /:::/    /         |:::::::::/    /            \::::::/    /    \::::::/   /:::/    /
//    \:::\    /:::/    /          |::|\::::/    /              \::::/    /      \::::/___/:::/    /
//     \:::\  /:::/    /           |::| \::/____/               /:::/    /        \:::\__/:::/    /
//      \:::\/:::/    /            |::|  ~|                    /:::/    /          \::::::::/    /
//       \::::::/    /             |::|   |                   /:::/    /            \::::::/    /
//        \::::/    /              \::|   |                  /:::/    /              \::::/    /
//         \::/____/                \:|   |                  \::/    /                \::/____/
//          ~~                       \|___|                   \/____/                  ~~

function draw () {
  background(starBackground)

  if (game.state.current === game.state.start) {
    preGame.show()
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

    if (time.update() != 0) {
      score.show()
      status.show()
      time.show()
      ship.fly()
    }

    ship.show()
  } else if (game.state.current === game.state.gameover) {
    postGame.show()
  }
}

//           _____                   _____                   _____                   _____                   _____                   _____
//          /\    \                 /\    \                 /\    \                 /\    \                 /\    \                 /\    \
//         /::\    \               /::\    \               /::\    \               /::\    \               /::\    \               /::\    \
//        /::::\    \             /::::\    \             /::::\    \              \:::\    \              \:::\    \             /::::\    \
//       /::::::\    \           /::::::\    \           /::::::\    \              \:::\    \              \:::\    \           /::::::\    \
//      /:::/\:::\    \         /:::/\:::\    \         /:::/\:::\    \              \:::\    \              \:::\    \         /:::/\:::\    \
//     /:::/__\:::\    \       /:::/__\:::\    \       /:::/__\:::\    \              \:::\    \              \:::\    \       /:::/__\:::\    \
//    /::::\   \:::\    \     /::::\   \:::\    \      \:::\   \:::\    \             /::::\    \              \:::\    \     /::::\   \:::\    \
//   /::::::\   \:::\    \   /::::::\   \:::\    \   ___\:::\   \:::\    \   ____    /::::::\    \              \:::\    \   /::::::\   \:::\    \
//  /:::/\:::\   \:::\____\ /:::/\:::\   \:::\    \ /\   \:::\   \:::\    \ /\   \  /:::/\:::\    \              \:::\    \ /:::/\:::\   \:::\    \
// /:::/  \:::\   \:::|    /:::/__\:::\   \:::\____/::\   \:::\   \:::\____/::\   \/:::/  \:::\___________________\:::\____/:::/__\:::\   \:::\____\
// \::/   |::::\  /:::|____\:::\   \:::\   \::/    \:::\   \:::\   \::/    \:::\  /:::/    \::/    \::::::::::::::::::/    \:::\   \:::\   \::/    /
//  \/____|:::::\/:::/    / \:::\   \:::\   \/____/ \:::\   \:::\   \/____/ \:::\/:::/    / \/____/ \::::::::::::::::/____/ \:::\   \:::\   \/____/
//        |:::::::::/    /   \:::\   \:::\    \      \:::\   \:::\    \      \::::::/    /           \:::\~~~~\~~~~~~        \:::\   \:::\    \
//        |::|\::::/    /     \:::\   \:::\____\      \:::\   \:::\____\      \::::/____/             \:::\    \              \:::\   \:::\____\
//        |::| \::/____/       \:::\   \::/    /       \:::\  /:::/    /       \:::\    \              \:::\    \              \:::\   \::/    /
//        |::|  ~|              \:::\   \/____/         \:::\/:::/    /         \:::\    \              \:::\    \              \:::\   \/____/
//        |::|   |               \:::\    \              \::::::/    /           \:::\    \              \:::\    \              \:::\    \
//        \::|   |                \:::\____\              \::::/    /             \:::\____\              \:::\____\              \:::\____\
//         \:|   |                 \::/    /               \::/    /               \::/    /               \::/    /               \::/    /
//          \|___|                  \/____/                 \/____/                 \/____/                 \/____/                 \/____/

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)

  if (game.state.current) {
    preGame.x = width / 2
    preGame.y = height / 4
    preGame.fontSize = width / 12
  }

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

  score.scorex = width - 5
  score.x = width
  status.statusx = width - 15
  status.x = width
}

//           _____                    _____                _____                    _____
//          /\    \                  /\    \              |\    \                  /\    \
//         /::\____\                /::\    \             |:\____\                /::\    \
//        /:::/    /               /::::\    \            |::|   |               /::::\    \
//       /:::/    /               /::::::\    \           |::|   |              /::::::\    \
//      /:::/    /               /:::/\:::\    \          |::|   |             /:::/\:::\    \
//     /:::/____/               /:::/__\:::\    \         |::|   |            /:::/__\:::\    \
//    /::::\    \              /::::\   \:::\    \        |::|   |            \:::\   \:::\    \
//   /::::::\____\________    /::::::\   \:::\    \       |::|___|______    ___\:::\   \:::\    \
//  /:::/\:::::::::::\    \  /:::/\:::\   \:::\    \      /::::::::\    \  /\   \:::\   \:::\    \
// /:::/  |:::::::::::\____\/:::/__\:::\   \:::\____\    /::::::::::\____\/::\   \:::\   \:::\____\
// \::/   |::|~~~|~~~~~     \:::\   \:::\   \::/    /   /:::/~~~~/~~      \:::\   \:::\   \::/    /
//  \/____|::|   |           \:::\   \:::\   \/____/   /:::/    /          \:::\   \:::\   \/____/
//        |::|   |            \:::\   \:::\    \      /:::/    /            \:::\   \:::\    \
//        |::|   |             \:::\   \:::\____\    /:::/    /              \:::\   \:::\____\
//        |::|   |              \:::\   \::/    /    \::/    /                \:::\  /:::/    /
//        |::|   |               \:::\   \/____/      \/____/                  \:::\/:::/    /
//        |::|   |                \:::\    \                                    \::::::/    /
//        \::|   |                 \:::\____\                                    \::::/    /
//         \:|   |                  \::/    /                                     \::/    /
//          \|___|                   \/____/                                       \/____/

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

//           _____                    _____                    _____                    _____
//          /\    \                  /\    \                  /\    \                  /\    \
//         /::\    \                /::\    \                /::\____\                /::\    \
//        /::::\    \              /::::\    \              /::::|   |               /::::\    \
//       /::::::\    \            /::::::\    \            /:::::|   |              /::::::\    \
//      /:::/\:::\    \          /:::/\:::\    \          /::::::|   |             /:::/\:::\    \
//     /:::/  \:::\    \        /:::/__\:::\    \        /:::/|::|   |            /:::/__\:::\    \
//    /:::/    \:::\    \      /::::\   \:::\    \      /:::/ |::|   |           /::::\   \:::\    \
//   /:::/    / \:::\    \    /::::::\   \:::\    \    /:::/  |::|___|______    /::::::\   \:::\    \
//  /:::/    /   \:::\ ___\  /:::/\:::\   \:::\    \  /:::/   |::::::::\    \  /:::/\:::\   \:::\    \
// /:::/____/  ___\:::|    |/:::/  \:::\   \:::\____\/:::/    |:::::::::\____\/:::/__\:::\   \:::\____\
// \:::\    \ /\  /:::|____|\::/    \:::\  /:::/    /\::/    / ~~~~~/:::/    /\:::\   \:::\   \::/    /
//  \:::\    /::\ \::/    /  \/____/ \:::\/:::/    /  \/____/      /:::/    /  \:::\   \:::\   \/____/
//   \:::\   \:::\ \/____/            \::::::/    /               /:::/    /    \:::\   \:::\    \
//    \:::\   \:::\____\               \::::/    /               /:::/    /      \:::\   \:::\____\
//     \:::\  /:::/    /               /:::/    /               /:::/    /        \:::\   \::/    /
//      \:::\/:::/    /               /:::/    /               /:::/    /          \:::\   \/____/
//       \::::::/    /               /:::/    /               /:::/    /            \:::\    \
//        \::::/    /               /:::/    /               /:::/    /              \:::\____\
//         \::/____/                \::/    /                \::/    /                \::/    /
//                                   \/____/                  \/____/                  \/____/

class Game {
  constructor () {
    this.state = {
      current: '',
      start: 'start',
      playing: 'playing',
      completed: 'completed',
      gameover: 'gameover'
    }
    this.level
  }
  startTimer () {
    let seconds = 61
    let timePassed = millis() / 1000
    let timeRemaining = Math.floor(seconds - timePassed)
    if (timeRemaining >= 0) {
      return timeRemaining
    }
    return 0
  }
}

//           _____                    _____                    _____                    _____                    _____     _____             _____
//          /\    \                  /\    \                  /\    \                  /\    \                  /\    \   /\    \           |\    \
//         /::\    \                /::\    \                /::\    \                /::\    \                /::\____\ /::\    \          |:\____\
//        /::::\    \               \:::\    \              /::::\    \              /::::\    \              /:::/    //::::\    \         |::|   |
//       /::::::\    \               \:::\    \            /::::::\    \            /::::::\    \            /:::/    //::::::\    \        |::|   |
//      /:::/\:::\    \               \:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/    //:::/\:::\    \       |::|   |
//     /:::/  \:::\    \               \:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/    //:::/__\:::\    \      |::|   |
//    /:::/    \:::\    \              /::::\    \       \:::\   \:::\    \      /::::\   \:::\    \      /:::/    //::::\   \:::\    \     |::|   |
//   /:::/    / \:::\    \    ____    /::::::\    \    ___\:::\   \:::\    \    /::::::\   \:::\    \    /:::/    //::::::\   \:::\    \    |::|___|______
//  /:::/    /   \:::\ ___\  /\   \  /:::/\:::\    \  /\   \:::\   \:::\    \  /:::/\:::\   \:::\____\  /:::/    //:::/\:::\   \:::\    \   /::::::::\    \
// /:::/____/     \:::|    |/::\   \/:::/  \:::\____\/::\   \:::\   \:::\____\/:::/  \:::\   \:::|    |/:::/____//:::/  \:::\   \:::\____\ /::::::::::\____\
// \:::\    \     /:::|____|\:::\  /:::/    \::/    /\:::\   \:::\   \::/    /\::/    \:::\  /:::|____|\:::\    \\::/    \:::\  /:::/    //:::/~~~~/~~
//  \:::\    \   /:::/    /  \:::\/:::/    / \/____/  \:::\   \:::\   \/____/  \/_____/\:::\/:::/    /  \:::\    \\/____/ \:::\/:::/    //:::/    /
//   \:::\    \ /:::/    /    \::::::/    /            \:::\   \:::\    \               \::::::/    /    \:::\    \        \::::::/    //:::/    /
//    \:::\    /:::/    /      \::::/____/              \:::\   \:::\____\               \::::/    /      \:::\    \        \::::/    //:::/    /
//     \:::\  /:::/    /        \:::\    \               \:::\  /:::/    /                \::/____/        \:::\    \       /:::/    / \::/    /
//      \:::\/:::/    /          \:::\    \               \:::\/:::/    /                  ~~               \:::\    \     /:::/    /   \/____/
//       \::::::/    /            \:::\    \               \::::::/    /                                     \:::\    \   /:::/    /
//        \::::/    /              \:::\____\               \::::/    /                                       \:::\____\ /:::/    /
//         \::/____/                \::/    /                \::/    /                                         \::/    / \::/    /
//          ~~                       \/____/                  \/____/                                           \/____/   \/____/

class Display {
  constructor () {
    this.font = orbiterFont
    this.fontSize = height / 25
  }

  updateColor () {
    if (ship.currentStatus === 'GOOD') {
      return 'rgba(229, 129, 202, 0.7)'
    }
    if (ship.currentStatus === 'PARALYZED') {
      return 'rgba(255, 255, 0, 0.7)'
    }
    if (ship.currentStatus === 'CRASHED') {
      return 'rgba(255, 0, 0, 0.7)'
    }
  }
}

class Score extends Display {
  constructor () {
    super()
    this.score = 0
    this.scoreLength
    this.scorex = width - 5
    this.scorey = this.fontSize

    this.x = width
    this.y = this.scorey - this.fontSize / 2
    this.width
    this.height = this.fontSize * 1.2
  }

  checkScoreLength () {
    this.scoreLength = this.score.toString().length
    this.width = -160 - (this.fontSize * this.scoreLength / 1.5)
  }

  show () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(RIGHT, CENTER)
    noStroke()
    fill(this.updateColor())
    rect(this.x, this.y, this.width, this.height)
    fill(0)
    text(`SCORE: ${this.score}`, this.scorex, this.scorey)
    this.checkScoreLength()
  }
}

class Status extends Display {
  constructor () {
    super()
    this.currentStatus = ship.currentStatus
    this.statusx = width - 15
    this.statusy = this.fontSize * 3

    this.x = width
    this.y = this.statusy - this.fontSize / 2
    this.width = -300
    this.height = this.fontSize * 1.2
  }

  show () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(RIGHT, CENTER)
    noStroke()
    fill(this.updateColor())
    rect(this.x, this.y, this.width, this.height)
    fill(0)
    text(`STATUS: ${this.currentStatus}`, this.statusx, this.statusy)
  }

  update () {
    this.currentStatus = ship.currentStatus
  }
}

class Time extends Display {
  constructor () {
    super()
    this.x = width / 2
    this.y = height / 2
    this.width = width / 20
    this.height = height / 20
    this.fontSize = height / 7
    this.seconds = 61
  }

  update () {
    let timePassed = millis() / 1000
    let timeRemaining = Math.floor(this.seconds - timePassed)
    if (timeRemaining >= 0) {
      return timeRemaining
    }
    return 0
  }

  show () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(2)
    stroke(this.updateColor())
    noFill()
    circle(this.x, this.y, this.fontSize * 2)
    circle(this.x, this.y, this.fontSize * 2.2)
    text(this.update(), this.x, this.y)
  }
}

class PreGame extends Display {
  constructor () {
    super()
    this.x = width / 2
    this.y = height / 4
    this.fontSize = width / 12
  }

  startGame () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize / 2)
    noStroke()
    fill(this.updateColor())
    text('Press any key to start', this.x, this.y + this.fontSize * 2)
  }

  title () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(3)
    stroke(this.updateColor())
    noFill()
    text('ALIEN ABDUCTION', this.x, this.y)
  }

  show () {
    this.title()
    this.startGame()
  }
}

class PostGame extends Display {
  constructor () {
    super()
    this.x = width / 2
    this.y = height / 4
    this.fontSize = width / 7
  }

  stats () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize / 4)
    noStroke()
    fill(this.updateColor())
    text(`HUMANS ABDUCTED: ${ship.abductionCount.total}`, this.x, this.y + this.fontSize / 1.25)
    text(`SCORE: ${score.score}`, this.x, this.y + this.fontSize * 1.25)
  }

  title () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(4)
    stroke(this.updateColor())
    noFill()
    text('GAME OVER', this.x, this.y)
  }

  show () {
    this.title()
    this.stats()
  }
}

//           _____                    _____            _____                    _____                    _____                    _____
//          /\    \                  /\    \          /\    \                  /\    \                  /\    \                  /\    \
//         /::\    \                /::\____\        /::\    \                /::\    \                /::\____\                /::\    \
//        /::::\    \              /:::/    /        \:::\    \              /::::\    \              /::::|   |               /::::\    \
//       /::::::\    \            /:::/    /          \:::\    \            /::::::\    \            /:::::|   |              /::::::\    \
//      /:::/\:::\    \          /:::/    /            \:::\    \          /:::/\:::\    \          /::::::|   |             /:::/\:::\    \
//     /:::/__\:::\    \        /:::/    /              \:::\    \        /:::/__\:::\    \        /:::/|::|   |            /:::/__\:::\    \
//    /::::\   \:::\    \      /:::/    /               /::::\    \      /::::\   \:::\    \      /:::/ |::|   |            \:::\   \:::\    \
//   /::::::\   \:::\    \    /:::/    /       ____    /::::::\    \    /::::::\   \:::\    \    /:::/  |::|   | _____    ___\:::\   \:::\    \
//  /:::/\:::\   \:::\    \  /:::/    /       /\   \  /:::/\:::\    \  /:::/\:::\   \:::\    \  /:::/   |::|   |/\    \  /\   \:::\   \:::\    \
// /:::/  \:::\   \:::\____\/:::/____/       /::\   \/:::/  \:::\____\/:::/__\:::\   \:::\____\/:: /    |::|   /::\____\/::\   \:::\   \:::\____\
// \::/    \:::\  /:::/    /\:::\    \       \:::\  /:::/    \::/    /\:::\   \:::\   \::/    /\::/    /|::|  /:::/    /\:::\   \:::\   \::/    /
//  \/____/ \:::\/:::/    /  \:::\    \       \:::\/:::/    / \/____/  \:::\   \:::\   \/____/  \/____/ |::| /:::/    /  \:::\   \:::\   \/____/
//           \::::::/    /    \:::\    \       \::::::/    /            \:::\   \:::\    \              |::|/:::/    /    \:::\   \:::\    \
//            \::::/    /      \:::\    \       \::::/____/              \:::\   \:::\____\             |::::::/    /      \:::\   \:::\____\
//            /:::/    /        \:::\    \       \:::\    \               \:::\   \::/    /             |:::::/    /        \:::\  /:::/    /
//           /:::/    /          \:::\    \       \:::\    \               \:::\   \/____/              |::::/    /          \:::\/:::/    /
//          /:::/    /            \:::\    \       \:::\    \               \:::\    \                  /:::/    /            \::::::/    /
//         /:::/    /              \:::\____\       \:::\____\               \:::\____\                /:::/    /              \::::/    /
//         \::/    /                \::/    /        \::/    /                \::/    /                \::/    /                \::/    /
//          \/____/                  \/____/          \/____/                  \/____/                  \/____/                  \/____/

class Beam {
  constructor () {
    this.img = beamImg
    this.width = beamImg.width / 4
    this.height = 1
    this.x = ship.x + (ship.width / 2) - (this.width / 2)
    this.y = ship.y + ship.height
    this.beamSpeed = 10
    this.beamDown = true
    this.abductionSpeed = 10
  }

  show () {
    image(this.img, this.x, this.y, this.width, this.height)
  }

  move () {
    this.x = ship.x + (ship.width / 2) - (this.width / 2)
    this.y = ship.y + ship.height
  }

  extend () {
    this.show()
    ship.beam = true

    for (const human of humans) {
      this.abduct(human, humans.indexOf(human))
    }

    for (const earthObject of earthObjects) {
      this.malfunction(earthObject, earthObjects.indexOf(earthObject))
    }

    if (this.y + this.height < sidewalk.y && this.beamDown) {
      this.height += this.beamSpeed
    } else if (this.y + this.height >= sidewalk.y && this.beamDown) {
      this.beamDown = false
    } else if (this.height > 1 && !this.beamDown) {
      this.height -= this.beamSpeed
    } else if (this.height <= 1 && !this.beamDown) {
      this.beamDown = true
    }
  }

  retract () {
    ship.beam = false
    this.height = 1
    for (const human of humans) {
      let backToEarth = height - sidewalk.height - human.height
      if (human.y < backToEarth) {
        human.y += this.abductionSpeed
      }
    }
    for (const earthObject of earthObjects) {
      let backToEarth = height - sidewalk.height - earthObject.height
      if (earthObject.y < backToEarth) {
        earthObject.y += this.abductionSpeed
      }
    }
  }

  beam () {
    if (keyIsDown(32)) {
      this.extend()
    } else {
      this.retract()
    }
  }

  abduct (human, index) {
    let hit = collideRectRect(this.x, this.y, this.width, this.height, human.x, human.y, human.width, human.height)
    if (hit) {
      keyPressed()
      human.x = this.x + this.width / 2 - human.width / 2
      human.y -= this.abductionSpeed
      if (human.y + (human.height / 2) <= this.y) {
        humans.splice(index, 1)
        human.generate(human.constructor)
        score.score += human.pointValue
        ship.abductionCount.total++
      }
    }
  }

  malfunction (earthObject, index) {
    let hit = collideRectRect(this.x, this.y, this.width, this.height, earthObject.x, earthObject.y, earthObject.width, earthObject.height)
    if (hit) {
      earthObject.y -= this.abductionSpeed
      this.beamDown = false
      if (earthObject.y <= this.y) {
        ship.changeStatus('paralyzed', 3000)
      }
    }
  }
}

class MotherShip {
  constructor () {
    this.img = shipImg
    this.width = shipImg.width / 4
    this.height = shipImg.height / 4
    this.x = width / 2 - this.width / 2
    this.y = 0
    this.speed = 5
    this.tilt = 0.25
    this.beam = false
    this.abductionCount = {
      total: 0
    }
    this.status = {
      good: 'GOOD',
      paralyzed: 'PARALYZED',
      crashed: 'CRASHED'
    }
    this.currentStatus = this.status.good
  }

  show () {
    image(this.img, this.x, this.y, this.width, this.height)
  }

  // rotateLeft () {
  //   if (angle < 30) {
  //     angle -= this.tilt
  //     rotateY(angle)
  //     this.img
  //   } else {
  //     angle += this.tilt
  //   }
  // }

  // rotateRight () {
  //   if (angle < 30) {
  //     angle += this.tilt
  //     rotateY(angle)
  //     this.img
  //   } else {
  //     angle -= this.tilt
  //   }
  // }

  good () {
    beam.beam()
    beam.move()
    if (this.beam === false) {
      if (keyIsDown(LEFT_ARROW) && this.x > 0) {
        // this.rotateLeft()
        this.x -= this.speed
      } else if (keyIsDown(RIGHT_ARROW) && this.x < width - this.width / 2) {
        // this.rotateRight()
        this.x += this.speed
      } else if (keyIsDown(DOWN_ARROW) && this.y < height - this.height - sidewalk.height - 4) {
        this.y += this.speed
      } else if (keyIsDown(UP_ARROW) && this.y > 0) {
        this.y -= this.speed
      }

      for (const obj of earthObjects) {
        let hit = collideRectRect(this.x, this.y, this.width, this.height, obj.x, obj.y, obj.width, obj.height)
        if (hit) {
          this.changeStatus('crashed', 8000)
        }
      }
    }
  }

  resetStatus () {
    this.currentStatus = this.status.good
    status.update()
  }

  changeStatus (newStatus, duration) {
    this.currentStatus = this.status[newStatus]
    status.update()
    setTimeout(this.resetStatus.bind(this), duration)
  }

  paralyzed () {
    beam.retract()
  }

  crashed () {
    this.x > width / 2 - this.width / 2 ? this.x -= 2 : this.x += 2
    this.y > 0 ? this.y -= 2 : 0
  }

  fly () {
    if (this.currentStatus === this.status.good) {
      this.good()
    } else if (this.currentStatus === this.status.paralyzed) {
      this.paralyzed()
    } else if (this.currentStatus === this.status.crashed) {
      this.crashed()
    }
  }
}

//           _____                   _____                   _____                   _____                   _____                   _____
//          /\    \                 /\    \                 /\    \                 /\    \                 /\    \                 /\    \
//         /::\____\               /::\____\               /::\____\               /::\    \               /::\____\               /::\    \
//        /:::/    /              /:::/    /              /::::|   |              /::::\    \             /::::|   |              /::::\    \
//       /:::/    /              /:::/    /              /:::::|   |             /::::::\    \           /:::::|   |             /::::::\    \
//      /:::/    /              /:::/    /              /::::::|   |            /:::/\:::\    \         /::::::|   |            /:::/\:::\    \
//     /:::/____/              /:::/    /              /:::/|::|   |           /:::/__\:::\    \       /:::/|::|   |           /:::/__\:::\    \
//    /::::\    \             /:::/    /              /:::/ |::|   |          /::::\   \:::\    \     /:::/ |::|   |           \:::\   \:::\    \
//   /::::::\    \   _____   /:::/    /      _____   /:::/  |::|___|______   /::::::\   \:::\    \   /:::/  |::|   | _____   ___\:::\   \:::\    \
//  /:::/\:::\    \ /\    \ /:::/____/      /\    \ /:::/   |::::::::\    \ /:::/\:::\   \:::\    \ /:::/   |::|   |/\    \ /\   \:::\   \:::\    \
// /:::/  \:::\    /::\____|:::|    /      /::\____/:::/    |:::::::::\____/:::/  \:::\   \:::\____/:: /    |::|   /::\____/::\   \:::\   \:::\____\
// \::/    \:::\  /:::/    |:::|____\     /:::/    \::/    / ~~~~~/:::/    \::/    \:::\  /:::/    \::/    /|::|  /:::/    \:::\   \:::\   \::/    /
//  \/____/ \:::\/:::/    / \:::\    \   /:::/    / \/____/      /:::/    / \/____/ \:::\/:::/    / \/____/ |::| /:::/    / \:::\   \:::\   \/____/
//           \::::::/    /   \:::\    \ /:::/    /              /:::/    /           \::::::/    /          |::|/:::/    /   \:::\   \:::\    \
//            \::::/    /     \:::\    /:::/    /              /:::/    /             \::::/    /           |::::::/    /     \:::\   \:::\____\
//            /:::/    /       \:::\__/:::/    /              /:::/    /              /:::/    /            |:::::/    /       \:::\  /:::/    /
//           /:::/    /         \::::::::/    /              /:::/    /              /:::/    /             |::::/    /         \:::\/:::/    /
//          /:::/    /           \::::::/    /              /:::/    /              /:::/    /              /:::/    /           \::::::/    /
//         /:::/    /             \::::/    /              /:::/    /              /:::/    /              /:::/    /             \::::/    /
//         \::/    /               \::/____/               \::/    /               \::/    /               \::/    /               \::/    /
//          \/____/                 ~~                      \/____/                 \/____/                 \/____/                 \/____/

class Human {
  constructor () {
    this.height = light.height / 2.5
    this.width = this.height
    this.y = height - (sidewalk.height + this.height)
    this.pointValue
    // this.paused = false
  }

  right () {
    this.x += this.walkSpeed
    this.img = this.rightVersion
  }

  left () {
    this.x -= this.walkSpeed
    this.img = this.leftVersion
  }

  show () {
    image(this.img, this.x, this.y, this.width, this.height)
  }

  offScreen () {
    this.x = 0 || width
    this.speed = random(2, 8)
    console.log('BRB')
  }

  walk () {
    if (this.walkingRight && this.x < width + 500) {
      this.right()
    } else if (this.x >= width && this.walkingRight) {
      this.walkingRight = false
      setTimeout(this.offScreen.bind(this), 3000)
      console.log(`Exit stage Right`)
    } else if (!this.walkingRight && this.x > 0 - 500) {
      this.left()
    } else if ((!this.walkingRight) && this.x <= 0) {
      this.walkingRight = true
      setTimeout(this.offScreen.bind(this), 2500)
      console.log(`Exit stage Left`)
    }
  }

  generate (objClass) {
    humans.push(new objClass())
  }
}

class Parental extends Human {
  constructor () {
    super()
    this.x = 0
    this.pointValue = 80
    this.walkSpeed = 2
    this.walkingRight = true
    this.rightVersion = parentalSubRight
    this.leftVersion = parentalSubLeft
    this.img = this.rightVersion
  }
}

class Cycler extends Human {
  constructor () {
    super()
    this.x = 0
    this.pointValue = 65
    this.walkSpeed = 4
    this.walkingRight = true
    this.rightVersion = cyclerSubRight
    this.leftVersion = cyclerSubLeft
    this.img = this.rightVersion
  }
}

class DogServant extends Human {
  constructor () {
    super()
    this.x = width
    this.pointValue = 50
    this.walkSpeed = 2
    this.walkingRight = false
    this.rightVersion = dogServantSubRightOne
    this.rightVersionTwo = dogServantSubRightTwo
    this.leftVersion = dogServantSubLeftOne
    this.leftVersionTwo = dogServantSubLeftOne
    this.img = this.rightVersion
  }

  // show () {
  //   image(this.img, this.x, this.y, this.width, this.height)
  // }
}

//           _____                    _____                _____                    _____                _____                    _____
//          /\    \                  /\    \              /\    \                  /\    \              /\    \                  /\    \
//         /::\    \                /::\    \            /::\    \                /::\    \            /::\    \                /::\____\
//        /::::\    \              /::::\    \           \:::\    \              /::::\    \           \:::\    \              /:::/    /
//       /::::::\    \            /::::::\    \           \:::\    \            /::::::\    \           \:::\    \            /:::/    /
//      /:::/\:::\    \          /:::/\:::\    \           \:::\    \          /:::/\:::\    \           \:::\    \          /:::/    /
//     /:::/__\:::\    \        /:::/__\:::\    \           \:::\    \        /:::/__\:::\    \           \:::\    \        /:::/____/
//    /::::\   \:::\    \      /::::\   \:::\    \          /::::\    \      /::::\   \:::\    \          /::::\    \      /::::\    \
//   /::::::\   \:::\    \    /::::::\   \:::\    \        /::::::\    \    /::::::\   \:::\    \        /::::::\    \    /::::::\    \   _____
//  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\    \      /:::/\:::\    \  /:::/\:::\   \:::\____\      /:::/\:::\    \  /:::/\:::\    \ /\    \
// /:::/__\:::\   \:::\____\/:::/  \:::\   \:::\____\    /:::/  \:::\____\/:::/  \:::\   \:::|    |    /:::/  \:::\____\/:::/  \:::\    /::\____\
// \:::\   \:::\   \::/    /\::/    \:::\  /:::/    /   /:::/    \::/    /\::/   |::::\  /:::|____|   /:::/    \::/    /\::/    \:::\  /:::/    /
//  \:::\   \:::\   \/____/  \/____/ \:::\/:::/    /   /:::/    / \/____/  \/____|:::::\/:::/    /   /:::/    / \/____/  \/____/ \:::\/:::/    /
//   \:::\   \:::\    \               \::::::/    /   /:::/    /                 |:::::::::/    /   /:::/    /                    \::::::/    /
//    \:::\   \:::\____\               \::::/    /   /:::/    /                  |::|\::::/    /   /:::/    /                      \::::/    /
//     \:::\   \::/    /               /:::/    /    \::/    /                   |::| \::/____/    \::/    /                       /:::/    /
//      \:::\   \/____/               /:::/    /      \/____/                    |::|  ~|           \/____/                       /:::/    /
//       \:::\    \                  /:::/    /                                  |::|   |                                        /:::/    /
//        \:::\____\                /:::/    /                                   \::|   |                                       /:::/    /
//         \::/    /                \::/    /                                     \:|   |                                       \::/    /
//          \/____/                  \/____/                                       \|___|                                        \/____/

class Sidewalk {
  constructor () {
    this.width = 60
    this.height = this.width / 3
    this.x = 0
    this.y = height - this.height
  }

  show () {
    while (this.x < width) {
      strokeWeight(4)
      stroke(100)
      fill(150)
      rect(this.x, this.y, this.width, this.height)
      this.x += this.width
    }
    this.x = 0
  }
}

class EarthObject {
  constructor () {
    this.img
    this.width
    this.height
    this.x
    this.y
  }

  show () {
    image(this.img, this.x, this.y, this.width, this.height)
  }

  generate (obj) {
    earthObjects.push(obj)
  }
}

class FireHydrant extends EarthObject {
  constructor () {
    super()
    this.img = fireHydrantImg
    this.width = sidewalk.width / 3 * 2
    this.height = this.width
    this.x = width / 3
    this.y = sidewalk.y - this.height
  }
}

class StreetLight extends EarthObject {
  constructor () {
    super()
    this.img = streetLightImg
    this.width = hydrant.width * 4
    this.height = this.width
    this.x = width - this.width
    this.y = sidewalk.y - this.height
  }
}

class Fountain extends EarthObject {
  constructor () {
    super()
    this.img = fountainImg
    this.width = hydrant.width * 7 / 3
    this.height = this.width
    this.x = width / 2 - this.width / 2
    this.y = sidewalk.y - this.height
  }
}

class Tree extends EarthObject {
  constructor () {
    super()
    this.img = treeImgs[0]
    this.width = this.img.width / 2
    this.height = this.img.height / 2
    this.x = 0
    this.y = sidewalk.y - this.height
  }
}
