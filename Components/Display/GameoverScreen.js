/*  global
    Display, width, height, textFont, textAlign, CENTER, textSize, noStroke, fill
    text, score, ship, strokeWeight, noFill, stroke
*/

class GameoverScreen extends Display {
  constructor () {
    super()
    this.y = height / 6
    this.fontSize = width / 7
  }

  stats () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize / 4)
    noStroke()
    fill(this.color())
    text(`HUMANS ABDUCTED: ${ship.abductionCount.total}`, this.x, this.y + this.fontSize / 1.25)
    text(`SCORE: ${ship.score}`, this.x, this.y + this.fontSize * 1.25)
  }

  gameover () {
    textFont(this.font)
    textAlign(CENTER, CENTER)
    textSize(this.fontSize)
    strokeWeight(4)
    stroke(this.color())
    noFill()
    text('GAME OVER', this.x, this.y)
  }

  show () {
    this.gameover()
    this.stats()
  }
}
