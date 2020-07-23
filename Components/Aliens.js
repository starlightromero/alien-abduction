/*  global
    ShowImage, width, height, keyIsDown, collideRectRect, humans, earthObjects
    LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, keyPressed, ship, beamImg
    sidewalk, random, possibleXValues, shipImg, beam, status
*/

class Beam extends ShowImage {
  constructor () {
    super()
    this.img = beamImg
    this.width = beamImg.width / 4
    this.height = 1
    this.x = ship.x + (ship.width / 2) - (this.width / 2)
    this.y = ship.y + ship.height
    this.beamSpeed = 10
    this.beamDown = true
    this.abductionSpeed = 10
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
      const backToEarth = height - sidewalk.height - human.height
      if (human.y < backToEarth) {
        human.y += this.abductionSpeed
      }
    }
    for (const earthObject of earthObjects) {
      const backToEarth = height - sidewalk.height - earthObject.height
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
    const hit = collideRectRect(this.x, this.y, this.width, this.height, human.x, human.y, human.width, human.height)
    if (hit) {
      keyPressed()
      human.x = this.x + this.width / 2 - human.width / 2
      human.y -= this.abductionSpeed
      if (human.y + (human.height / 2) <= this.y) {
        human.x = random(possibleXValues)
        human.y = height - (sidewalk.height + this.height)
        ship.score += human.pointValue
        ship.abductionCount.total++
      }
    }
  }

  malfunction (earthObject) {
    const hit = collideRectRect(this.x, this.y, this.width, this.height, earthObject.x, earthObject.y, earthObject.width, earthObject.height)
    if (hit) {
      earthObject.y -= this.abductionSpeed
      this.beamDown = false
      if (earthObject.y <= this.y) {
        ship.changeStatus('paralyzed', 3000)
      }
    }
  }
}

class MotherShip extends ShowImage {
  constructor () {
    super()
    this.img = shipImg
    this.width = shipImg.width / 4
    this.height = shipImg.height / 4
    this.x = width / 2 - this.width / 2
    this.y = 0
    this.speed = 5
    this.tilt = 0.25
    this.beam = false
    this.score = 0
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
        const hit = collideRectRect(this.x, this.y, this.width, this.height, obj.x, obj.y, obj.width, obj.height)
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
