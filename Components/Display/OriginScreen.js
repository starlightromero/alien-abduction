/*  global
    height, Display
*/

class OriginScreen extends Display {
  constructor () {
    super()
    this.y = height / 4
  }

  show () {
    this.title('IT ALL BEGAN')
  }
}
