const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// styles

// add radius to auras to know their limit

ctx.lineWidth = 3
ctx.font = "16px Helvetica"

const friction = 0.2

const ikons = []
const enemies = []
const lasers = []

const particles = []
const physicalHitArray = []

const itemPicked = []
const obstacles = []
const lines = []

const skills = []
const slots = []
const items = []
const itemlist = []
const iconlist = []
const iconstats = []

let pause = false

let timer = 0

const itemDisplay = []

class Lasers {

  constructor(x, y, angle, parent) {
    this.pos = new Vector(x, y)
    this.id = Math.random()
    this.natSpdX = 10
    this.natSpdY = 10
    this.parent = parent
    this.spdX = Math.cos(angle) * 5
    this.spdY = Math.sin(angle) * 5
    this.img = weakLaser
    this.power = 1
    this.timer = 0
    this.toRemove = false
    this.radius = 3
  }

  firing() {

  }

  updatePosition() {

    // this.power = Math.floor((Math.random() * Ikon1.power) + Ikon1.naturalPower)

    this.pos.x += this.spdX
    this.pos.y += this.spdY

    if(this.timer++ > 100){
      this.toRemove = true
    }

    enemies.forEach((enemy) => {

      enemy.hit = false

      if(getDistance(this, Ikon1) < 30 && this.parent !== Ikon1.id && !Ikon1.shield) {

        this.toRemove = true

        if(randomInt(100) < enemy.criticalHit){
          Ikon1.hp -= enemy.power * 3
          new Damage(Ikon1.pos.x, Ikon1.pos.y, enemy.power * 3, true, 'damage')
        } else {
          Ikon1.hp -= enemy.power
          new Damage(Ikon1.pos.x, Ikon1.pos.y, enemy.power, false, 'damage')
        }

      } else if(getDistance(this, Ikon1) < 60 && this.parent !== Ikon1.id && Ikon1.shield){
        this.toRemove = true
        new Damage(Ikon1.pos.x, Ikon1.pos.y, 0, false, 'damage')
      }
    })
  }
}

class Falcon extends Lasers {

  constructor(x, y, angle, parent){
    super()
    this.pos = new Vector(x, y)
    this.id = Math.random()
    this.parent = parent
    this.img = weakLaser
    this.spdX = Math.cos(angle) * Ikon1.AttSpeed
    this.spdY = Math.sin(angle) * Ikon1.AttSpeed
    this.power = 1
    this.timer = 0
    this.toRemove = false
  }

  updatePosition() {

    this.pos.x += this.spdX
    this.pos.y += this.spdY

    if(this.timer++ > 100){
      this.toRemove = true
    }

    enemies.forEach((enemy) => {

      enemy.hit = false

      if(getDistance(this, enemy) < 30 && this.parent !== enemy.id){

        this.toRemove = true
        enemy.hit = true

        if(randomInt(100) < Ikon1.criticalHit){
          enemy.hp -= Ikon1.power * 3
          new Damage(enemy.pos.x, enemy.pos.y, Ikon1.power * 3, true, 'damage')

        } else {
          enemy.hp -= Ikon1.power
          new Damage(enemy.pos.x, enemy.pos.y, Ikon1.power, false, 'damage')
        }

      } else if(getDistance(this, enemy) < 60 && this.parent !== enemy.id && enemy.shield){
        this.toRemove = true
        new Damage(enemy.pos.x, enemy.pos.y, 0, false, 'damage')
      }
    })
  }

  firing() {

    if(itemslots[20]){
      if(itemslots[20].item){
        if(itemslots[20].item.type == 'Laser'){
          this.img = itemslots[20].item.img
        }
      }
    }
  }

}

// FOR EACH PROBLEM DRAWINGTHE SAME AS I HAVE EQUIPPED

function laserUpdate() {
  lasers.forEach((laser, index) => {
    if(laser.toRemove){
      lasers.splice(index, 1)
    } else {
      ctx.drawImage(laser.img, laser.pos.x - laser.img.width/2, laser.pos.y - laser.img.height/2)
      laser.updatePosition()
      laser.firing()
    }
  })
}

// Ikons

let Ikon1 = new Shrouder(700, 900, 0)


/*
if(result == 'Rammer'){
  Ikon1 = new Rammer(700, 900, 30)
} else if(result == 'Shrouder'){
  Ikon1 = new Shrouder(700, 900, 30)
}
*/



// Obstacles let obstacle1 = new Obstacle(400, 800, 200, 200);



// Game Loop

function hero() {

  Ikon1.drawFlower()
  Ikon1.updatePosition()
  Ikon1.reposition()
  Ikon1.rotating()
  Ikon1.laserLight()
  Ikon1.direction()
  Ikon1.equipped()
  Ikon1.shoot()
  Ikon1.levelUp()
  Ikon1.energyShield()
  Ikon1.drawIkon()
  Ikon1.collidin()
  Ikon1.eleStats()

}

Ikon1.inventory.forEach((item, i) => {
  if(!item.available){
    itemslots[i].item = new UpperArmor(itemslots[i].x, itemslots[i].y, item.ac, item.proprieties, item.rarity, false, item.img, itemslots[i], false, item.level)
  }
})


/*
let Smrhew = new CenterArmor(875, 935, 6, 'Fire resistance ' + 10, 'Mythical', true, centerArmorGreen, 4, true, 4)

let YellowVisor = new Visor(855, 855, 50, 50, 'Visor', true, visorYellow, 4, true, 'Yellow')

let RedVisor = new Visor(955, 855, 50, 50, 'Visor', true, visorRed, 4, true, 'Red')

let TurquoiseVisor = new Visor(1055, 955, 50, 50, 'Visor', true, visorTurquoise, 4, true, 'Turquoise')

let PuperVisor = new Visor(1555, 955, 50, 50, 'Visor', true, visorPurple, 4, true, 'Purple')

let YellowArm = new BottomArmor(975, 635, 6, 0, 'Rare', true, bottomYellow, 4, true, 4)

let MagicLaser = new Laser(1155, 1055, 30, 30, 'Laser', true, null, 4, true, 20)

let MagicLaser1 = new Laser(1255, 1255, 30, 30, 'Laser', true, null, 4, true, 6)

let Money = new Gold(700,700, 30)
*/

let Arena = new ObstacleCircle(1260, 1250, 900)

function gameLogic() {
  ctx.save()
  ctx.translate(-MainCamera.pos.x, -MainCamera.pos.y)
  ctx.drawImage(sprites.bgArena, 0, 0)
  cameraMoves()
  Arena.drawCircle()
  goldUpdate()
  laserUpdate()
  handleParticles()
  hero()
  itemUpdate()
  updateEnemies()
  dmgDisplay()
  activateSkill()
  activateItem()
  lightOfZenithCooldown()
  swiftCooldown()
  trifectaCooldown()
  cooldownUAura()
  coolDash()
  cooldownEnt()
  cooldownFixAura()
  drawDescriptionGround()
  ctx.restore()
  ctx.drawImage(sprites.vignette, 0, 0)
}


function menus() {
  charMenu()
  userInterface()
  mainInventory()
  Ikon1.pickUpItem()
  displayItems()
  drawDescriptionInv()
}


// Main Game Loop  current map size 2500, 2000

function mainLoop() {
  if(!pause){
    gameLogic()
    demoLvl()
    menus()
    requestAnimationFrame(mainLoop)
  } else {
    menus()
    requestAnimationFrame(mainLoop)
  }
}
