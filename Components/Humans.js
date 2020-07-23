/*  global
    ShowImage, width, height, random
*/

class Human extends ShowImage {
  constructor () {
    super()
    this.height = light.height / 2.5
    this.width = this.height
    this.y = height - (sidewalk.height + this.height)
    // this.paused = false
    // Will need to define this globally? Potentially? Also, need to refactor generate so that I can take an argument to make this work
    // This is to pseudo randomize the x values so that child class instantiations don't appear on top of each other
    this.possibleXValues = [0, width, -50, width + 50, -25, width + 25]
  }

  right () {
    this.x += this.walkSpeed
    this.img = this.rightVersion
  }

  left () {
    this.x -= this.walkSpeed
    this.img = this.leftVersion
  }

  offScreen () {
    if (this.randomWalk < 6) {
      this.x = 0
      this.walkingRight = true
      this.speed = random(2, 8)
    } else {
      this.x = width
      this.walkingRight = false
      this.speed = random(2, 8)
    }
  }

  walk () {
    if (this.walkingRight && this.x < width + 500) {
      this.right()
    } else if (this.x >= width && this.walkingRight) {
      this.walkingRight = false
      this.offScreen()
    } else if (!this.walkingRight && this.x > 0 - 500) {
      this.left()
    } else if ((!this.walkingRight) && this.x <= 0) {
      this.walkingRight = true
      this.offScreen()
    }
  }
}

class Parental extends Human {
  constructor (x) {
    super()
    this.x = x
    this.pointValue = 80
    this.walkSpeed = 2
    this.walkingRight = true
    this.rightVersion = parentalSubRight
    this.leftVersion = parentalSubLeft
    this.img = this.rightVersion
  }
}

class Cycler extends Human {
  constructor (x) {
    super()
    this.x = x
    this.pointValue = 65
    this.walkSpeed = 4
    this.walkingRight = true
    this.rightVersion = cyclerSubRight
    this.leftVersion = cyclerSubLeft
    this.img = this.rightVersion
  }
}

class DogServant extends Human {
  constructor (x) {
    super()
    this.x = x
    this.pointValue = 50
    this.walkSpeed = 2
    this.walkingRight = false
    this.rightVersion = dogServantSubRightOne
    this.rightVersionTwo = dogServantSubRightTwo
    this.leftVersion = dogServantSubLeftOne
    this.leftVersionTwo = dogServantSubLeftOne
    this.img = this.rightVersion
  }
}
