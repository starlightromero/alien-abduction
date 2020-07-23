/* global
   background, loadSound, loadImage, loadFont
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
let parental
let cycler
let dogServant

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

    if (time.update() !== 0) {
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
