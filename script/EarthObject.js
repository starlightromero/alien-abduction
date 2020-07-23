/*  global
    image
*/

export default class EarthObject {
  show () {
    image(this.img, this.x, this.y, this.width, this.height)
  }
}
