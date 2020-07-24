/*  global
    Display, width, height, ship, textFont, textSize, textAlign, CENTER, LEFT
    noStroke, fill, text, rect, RIGHT
*/

class StatusBar extends Display {
  constructor () {
    super()
    this.x = 0
    this.y = 0
    this.width = width
    this.height = height / 18
    this.currentStatus = ship.currentStatus
  }

  abductionCount () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(RIGHT, CENTER)
    noStroke()
    fill(0)
    text(`ABDUCT: ${ship.abductionCount.total}`, width - 20, this.y + 20)
  }

  status () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(CENTER, CENTER)
    noStroke()
    fill(0)
    text(`STATUS: ${ship.currentStatus}`, width / 2, this.y + 20)
  }

  score () {
    textFont(this.font)
    textSize(this.fontSize)
    textAlign(LEFT, CENTER)
    noStroke()
    fill(0)
    text(`SCORE: ${ship.score}`, this.x + 20, this.y + 20)
  }

  background () {
    noStroke()
    fill(this.color())
    rect(this.x, this.y, this.width, this.height)
  }

  show () {
    this.background()
    this.score()
    this.status()
    this.abductionCount()
  }
}
