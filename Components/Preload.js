/*  global
    loadImage, loadFont, loadSound
*/

function preload () {
  starBackground = loadImage('assets/background/star-background.png')
  fireHydrantImg = loadImage('assets/earth/hydrant.png')
  streetLightImg = loadImage('assets/earth/street-lamp.png')
  fountainImg = loadImage('assets/earth/fountain.png')
  treeImgs = [
    loadImage('assets/earth/trees/033-tree.png')
  ]

  backgroundMusic = loadSound('assets/sound/alien-abduction.mp3')
  teleportSound = loadSound('assets/sound/theme.mp3')

  beamImg = loadImage('assets/aliens/spaceship/spaceshipBeam.png')
  shipImg = loadImage('assets/aliens/spaceship/alienSpaceship.png')

  orbiterFont = loadFont('assets/font/EarthOrbiter-YZ12.otf')

  parentalSubLeft = loadImage('assets/humans/parental-test-subject-left-02.png')
  parentalSubRight = loadImage('assets/humans/parental-test-subject-right-03.png')

  cyclerSubLeft = loadImage('assets/humans/cycling-test-subject-left-05.png')
  cyclerSubRight = loadImage('assets/humans/cycling-test-subject-right-04.png')

  dogServantSubLeftOne = loadImage('assets/humans/animal-walking-human-left-stepOne_Artboard 5.png')
  dogServantSubLeftTwo = loadImage('assets/humans/animal-walking-human-left-stepTwo_Artboard 3.png')
  dogServantSubRightOne = loadImage('assets/humans/animal-walking-human-right-stepOne_Artboard 4.png')
  dogServantSubRightTwo = loadImage('assets/humans/animal-walking-human-right-stepTwo_Artboard 2.png')
}
