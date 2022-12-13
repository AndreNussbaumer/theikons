

// Camera Object

class Camera {

  constructor(x, y) {
    this.pos = new Vector(x, y)
    this.width = canvas.width
    this.height = canvas.height
  }

  get left() {
    return this.leftEdge()
  }

  get right() {
    return this.rightEdge()
  }

  get top() {
    return this.topEdge()
  }

  get bottom() {
    return this.bottomEdge()
  }

  leftEdge() {
    return this.pos.x + (this.width * 0.25)
  }

  rightEdge() {
    return this.pos.x + (this.width * 0.75)
  }

  topEdge() {
    return this.pos.y + (this.height * 0.25)
  }

  bottomEdge() {
    return this.pos.y + (this.height * 0.75)
  }

}

function cameraMoves() {
  // Camera movements

  if(Ikon1.pos.x < MainCamera.left) {
    MainCamera.pos.x = Ikon1.pos.x - (MainCamera.width * 0.25)
  }

  if(Ikon1.pos.x + Ikon1.img.width > MainCamera.right) {
    MainCamera.pos.x = Ikon1.pos.x + Ikon1.img.width - (MainCamera.width * 0.75)
  }

  if(Ikon1.pos.y < MainCamera.top) {
    MainCamera.pos.y = Ikon1.pos.y - (MainCamera.height * 0.25)
  }

  if(Ikon1.pos.y + Ikon1.img.height > MainCamera.bottom) {
    MainCamera.pos.y = Ikon1.pos.y + Ikon1.img.height - (MainCamera.height * 0.75)
  }

  if(MainCamera.pos.x < 0){
    MainCamera.pos.x = 0
  }

  if(MainCamera.pos.x + MainCamera.width > Dungeon.width){
    MainCamera.pos.x = Dungeon.width - MainCamera.width
  }

  if(MainCamera.pos.y < 0){
    MainCamera.pos.y = 0
  }

  if(MainCamera.pos.y + MainCamera.height > Dungeon.height){
    MainCamera.pos.y = Dungeon.height - MainCamera.height
  }

  // Character limit edge

  if(Ikon1.pos.x < 0){
    Ikon1.pos.x = 0
  }

  if(Ikon1.pos.x + 20 > Dungeon.width){
    Ikon1.pos.x = Dungeon.width - 20
  }

  if(Ikon1.pos.y < 0){
    Ikon1.pos.y = 0
  }

  if(Ikon1.pos.y + 20 > Dungeon.height){
    Ikon1.pos.y = Dungeon.height - 20
  }
}


let MainCamera = new Camera(0, 0)

class Map {

  constructor() {
    this.x = 0
    this.y = 0
    this.img = sprites.bgArena
    this.width = 2500
    this.height = 2500
  }
}

let Dungeon = new Map()

// Camera center

MainCamera.pos.x = (Dungeon.width - MainCamera.width) / 2
MainCamera.pos.y = (Dungeon.height - MainCamera.height) / 2

