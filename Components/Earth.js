/*  global
    ShowImage, width, height, strokeWeight, stroke, fill, rect,
*/

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

class FireHydrant extends ShowImage {
  constructor () {
    super()
    this.img = fireHydrantImg
    this.width = sidewalk.width / 3 * 2
    this.height = this.width
    this.x = width / 3
    this.y = sidewalk.y - this.height
  }
}

class StreetLight extends ShowImage {
  constructor () {
    super()
    this.img = streetLightImg
    this.width = hydrant.width * 4
    this.height = this.width
    this.x = width - this.width
    this.y = sidewalk.y - this.height
  }
}

class Fountain extends ShowImage {
  constructor () {
    super()
    this.img = fountainImg
    this.width = hydrant.width * 7 / 3
    this.height = this.width
    this.x = width / 2 - this.width / 2
    this.y = sidewalk.y - this.height
  }
}

class Tree extends ShowImage {
  constructor () {
    super()
    this.img = treeImgs[0]
    this.width = this.img.width / 2
    this.height = this.img.height / 2
    this.x = 0
    this.y = sidewalk.y - this.height
  }
}
