/*  global
    loadImage, loadFont, loadSound
*/

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
