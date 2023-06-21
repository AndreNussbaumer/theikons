let cooldownDash = false
let cooldownDashTimer = 100

let cooldownSa = false
let cooldownSaTimer = 1000
let steelArmorEffect = 1000

let cooldownSwift = false
let cooldownSwiftTimer = 1000

let cooldownUniAura = false
let cooldownUniTimer = 1000

let cooldownEntanglement = false
let cooldownEntTimer = 100

let cooldownWhirlwind = false
let cooldownWhirlwindTimer = 500
let cooldownWhirlwindEffect = false
let whirlWindEffect = 50

let cooldownLOF = false
let cooldownLOFtimer = 100

let cooldownTRI = false
let cooldownTRItimer = 50

let opacityTrigger = false
let opacityCount = 0.2

let timerDash = 0

let cooldownFlower = false
let cooldownFlowertimer = 0

let itX
let itY

class Ikon {

  constructor(x, y) {

    this.pos = new Vector(x,y)
    this.acc = new Vector(0,0)
    this.naturalAc = 3
    this.ac = 0
    this.naturalPower = 1
    this.power = 1
    this.natPhysicalPower = 1
    this.physicalPower = 1
    this.natAttSpeed = 5
    this.AttSpeed = 5
    this.r = 13
    this.m = 30
        if(this.m === 0){
            this.inv_m = 0;
        } else {
            this.inv_m = 1 / this.m;
        }
    this.vel = new Vector(0,0)
    this.elasticity = 1
    this.acceleration = 1
    this.id = Math.random()
    this.angle = 0
    this.LEFTCLICK = false
    this.SPACE = false
    this.shooting = false
    this.img = ikon
    this.lvl = 1
    this.shield = false
    this.shieldTime = 100
    this.maxLvl = 20
    this.hp = 500
    this.hpMax = 500
    this.featsPoints = 0
    this.visorColor = 'white'
    this.criticalHit = 10
    this.elementalStats = [
      {
        Acid: 0,
        Fire: 0,
        Ice: 0,
        Electric: 0,
        Light: 0,
      }
    ]

    /*
    this.slots = [
      {
        number: 0,
        x: 725,
        y: 445,
        bg: invSlot,
        available: true
      },
      {
        number: 1,
        x: 775,
        y: 445,
        bg: invSlot,
        type: null,
        power: null,
        level: null,
        ac: null,
        available: true,
      },
      {
        number: 2,
        x: 825,
        y: 445,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 3,
        x: 875,
        y: 445,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 4,
        x: 925,
        y: 445,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 5,
        x: 975,
        y: 445,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 6,
        x: 1025,
        y: 445,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 7,
        x: 1075,
        y: 445,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 8,
        x: 725,
        y: 495,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 9,
        x: 775,
        y: 495,
        bg: invSlot ,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 10,
        x: 825,
        y: 495,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 11,
        x: 875,
        y: 495,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 12,
        x: 925,
        y: 495,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 13,
        x: 975,
        y: 495,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 14,
        x: 1025,
        y: 495,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },
      {
        number: 15,
        x: 1075,
        y: 495,
        bg: invSlot,
        available: true,
        type: null,
        power: null,
        level: null,
        ac: null
      },


    ]
    */
    this.inventory = [
      {
        x: 725,
        y: 445,
        ac: 10,
        proprieties: 0,
        type: 'Upper Armor',
        rarity: 'Mythical',
        img: greenTop,
        slot: 0,
        power: 3,
        available: false,
        ground: false,
        level: 10,
      },
      {
        x: 775,
        y: 445,
        ac: 4,
        proprieties: 0,
        type: 'Upper Armor',
        rarity: 'Uncommon',
        img: topMedium,
        slot: 0,
        power: 3,
        available: false,
        ground: false,
        level: 4,
      },
      {
        x: 825,
        y: 445,
        ac: 2,
        proprieties: 0,
        type: 'Upper Armor',
        rarity: 'Common',
        img: dentedUp,
        slot: 0,
        power: 3,
        available: false,
        ground: false,
        level: 6,
      },
    ]
    this.equipment = []
    this.rotation = 0
    this.color = null
    this.inventoryDisplay = false
    this.inventoryfull = false
    this.gold = 0
    this.progress = 0
    this.points = 2
    this.fixing = false
    ikons.push(this)
  }

  updatePosition() {

    if(LEFT){
      this.acc.x =- this.acceleration
    }

    if(UP){
      this.acc.y =- this.acceleration
    }

    if(RIGHT){
      this.acc.x = this.acceleration
    }

    if(DOWN){
      this.acc.y = this.acceleration
    }

    if(!LEFT && !RIGHT){
        this.acc.x = 0;
    }

    if(!UP && !DOWN){
        this.acc.y = 0;
    }

    enemies.forEach((enemy) => {
      if(col_det_bb(this, enemy)){
        if(!enemy.shield){
          enemy.hp -= this.physicalPower
          pen_res_bb(this, enemy)
          col_res_bb(this, enemy)
          new Damage(enemy.pos.x, enemy.pos.y, this.physicalPower, false, 'damage')
        }
        if(!this.shield){
          this.hp -= enemy.physicalPower
          pen_res_bb(this, enemy)
          col_res_bb(this, enemy)
          new Damage(this.pos.x, this.pos.y, enemy.physicalPower, false, 'damage')
        } else {
          pen_res_bb(this, enemy)
          col_res_bb(this, enemy)
        }
      }
    })

    // Obstacles

    obstacles.forEach((o) => {

      o.drawObstacle()

      if(col_det_mo(this, o)) {
        col_res_mo(this, o)
        pen_res_mo(this, o)
      }
    })

    // light of zenith

    lines.forEach((l) => {
      l.drawLine()
      enemies.forEach((e) => {
        if(col_det_mo(e, l)) {
          e.hp -= 20
        }
      })
    })
  }


  direction() {

    let opposite = angle.y - this.pos.y
    let adjacent = angle.x - this.pos.x

    this.angle = Math.atan2(opposite + MainCamera.pos.y, adjacent + MainCamera.pos.x)

  }

  collidin() {

    let boundRadio = 900,
    boundRadioX = 1260,
    boundRadioY = 1250

    let dx = boundRadioX - this.pos.x
    let dy = boundRadioY - this.pos.y

    let dist = Math.sqrt(dx * dx + dy * dy)

    if(getDistance(this, Arena) > 900) {
      this.pos.x -= this.vel.x
      this.pos.y -= this.vel.y
    }

    /*

    const cx = Ikon1.pos.x - 900
    const cy = Ikon1.pos.y - 900

    const collision = Math.sqrt(cx * cx + cy * cy) >= 900 - Ikon1.r

    if (collision) {
      console.log('Out')
    }
    */

  }


  rotating() {

    if(this.acc.x == 0 && this.acc.y == 0){
      this.rotation = this.rotation += 0.05
      if(this.rotation >= 360){
        this.rotation = 0
      }
    } else {
      this.rotation += 1
    }

  }

  reposition() {

    this.acc = this.acc.unit().mult(this.acceleration)
    // Marbles acceleration + velocity
    this.vel = this.vel.add(this.acc)
    // Marble friction
    this.vel = this.vel.mult(1-friction)
    // Position for COLLISIONS
    this.pos = this.pos.add(this.vel)
  }

  shoot() {

    if(this.shooting){
      lasers.push(new Falcon(this.pos.x, this.pos.y, this.angle, this.id))
    }
    this.shooting = false
  }

  laserLight() {

    ctx.save()

    if(this.visorColor == 'Red'){
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)'
    } else if(this.visorColor == 'Blue'){
      ctx.strokeStyle = 'rgba(0, 0, 255, 0.2)'
    } else if(this.visorColor == 'Green'){
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)'
    } else if(this.visorColor == 'Orange'){
      ctx.strokeStyle = 'rgba(255, 100, 0, 0.2)'
    } else if(this.visorColor == 'Turquoise'){
      ctx.strokeStyle = 'rgba(0, 255, 200, 0.2)'
    } else if(this.visorColor == 'Yellow'){
      ctx.strokeStyle = 'rgba(255, 255, 0, 0.2)'
    } else if(this.visorColor == 'Purple'){
      ctx.strokeStyle = 'rgba(100, 0, 255, 0.2)'
    } else if(this.visorColor == 'Magenta'){
      ctx.strokeStyle = 'rgba(255, 0, 130, 0.2)'
    } else {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    }

    this.visorColor = 'rgba(255, 255, 255, 0.1)'

    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(this.pos.x, this.pos.y)
    ctx.lineTo(mouseX + MainCamera.pos.x, mouseY + MainCamera.pos.y)
    ctx.stroke()
    ctx.restore()
  }

  levelUp() {

    if(this.xp > experience(this.lvl)) {
      this.lvl += 1
      this.points += 5
      this.featsPoints += 1
      new Damage(this.pos.x, this.pos.y, this.lvl, false, 'Level Up')
    }
  }

  energyShield() {

    if(SPACE) {
      this.shield = true
      this.shieldTime--
    } else {
      this.shield = false
      this.shieldTime += 0.3
    }

    if(this.shieldTime <= 0) {
      this.shield = false
      this.shieldTime = 0
    }

    if(this.shieldTime >= 100) {
      this.shieldTime = 100
    }

    if(this.shield){
      for(let i = 0; i < 2; i++){
        particles.push(new Energy(this.pos.x, this.pos.y))
      }
    }
  }

  drawIkon() {

    ctx.save()
    ctx.translate(this.pos.x, this.pos.y)
    ctx.rotate(this.rotation)
    ctx.translate(-this.pos.x, -this.pos.y)
    ctx.drawImage(this.img, this.pos.x - this.img.width/2, this.pos.y - this.img.height/2)
    ctx.restore()
    ctx.save()
    healthBar(this.pos.x - 50, this.pos.y -40, 100, 10, this.hp, this.hpMax)
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.pos.x - 50, this.pos.y - 55, this.shieldTime, 10)
    ctx.restore()
  }

  equipped() {

    if(itemslots[17].item){
      if(itemslots[17].item.top){
        this.img = itemslots[17].item.top
      }
    } else {
      this.img = ikon
    }

    if(itemslots[19].item){
      if(itemslots[19].type == itemslots[19].item.type){
        this.visorColor = itemslots[19].item.color
      }
    }

    this.ac = Math.round(this.naturalAc * 10) / 10
    this.power = Math.round(this.naturalPower * 10) / 10
    this.AttSpeed = Math.round(this.natAttSpeed * 10) / 10
    this.physicalPower = Math.round(this.natPhysicalPower * 10) / 10

    itemslots.forEach((item) => {
      if(item.type){
        if(item.item){
          if(item.type == item.item.type){

            if(item.item.ac){
              this.addAc(item.item.ac)
            }

            if(item.item.power){
              this.addPower(item.item.power)
            }

            if(item.item.physicalPower){
              this.addPhysicalPower(item.item.physicalPower)
            }

            if(item.item.AttSpeed){
              this.addAttSpd(item.item.AttSpeed)
            }
          }
        }
      }
    })

  }


  eleStats() {

    this.elementalStats[0].Fire = 0

    if(itemslots[18].item){
      if(itemslots[18].item.proprieties){

        const splitText = itemslots[18].item.proprieties
        const string = splitText.split(" ")

        if(string[0] == 'Fire'){
          return this.elementalStats[0].Fire = string[2]
        }

        if(string[0] == 'Acid'){
          return this.elementalStats[0].Acid = string[2]
        }

        if(string[0] == 'Ice'){
          return this.elementalStats[0].Ice = string[2]
        }

        if(string[0] == 'Electric'){
          return this.elementalStats[0].Electric = string[2]
        }

        if(string[0] == 'Light'){
          return this.elementalStats[0].Light = string[2]
        }
      }
    }
  }

  addAc(value) {
    return this.ac = this.ac + value
  }

  addAttSpd(value) {
    return this.AttSpeed = this.AttSpeed + value
  }

  addPower(value) {
    return this.power = this.power + value
  }

  addPhysicalPower(value) {
    return this.physicalPower = this.physicalPower + value
  }

  addXp(value) {
    return this.xp = this.xp + value
  }

  drawFlower() {

    if(this.fixing){

      let flowerX = [this.pos.x, this.pos.x + 100, this.pos.x + 70, this.pos.x, this.pos.x - 70, this.pos.x - 100, this.pos.x - 70, this.pos.x + 70]
      let flowerY = [this.pos.y - 100, this.pos.y, this.pos.y + 70, this.pos.y + 100, this.pos.y + 70, this.pos.y, this.pos.y - 70, this.pos.y - 70]

      for(let i = 0; i < 8; i++){
        ctx.save()
        ctx.fillStyle = 'rgba(0, 255, 50, ' + opacityCount + ')'
        ctx.beginPath()
        ctx.arc(flowerX[i], flowerY[i], 100, 0 * Math.PI, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
      }

      if(!opacityTrigger){
        if(opacityCount <= 0.2){
          opacityCount -= 0.001
          if(opacityCount <= 0){
            opacityTrigger = true
          }
        }
      }

      if(opacityTrigger){
        opacityCount += 0.001
        if(opacityCount >= 0.2){
          opacityTrigger = false
        }
      }
    }
  }

  pickUpItem() {

    items.forEach((item, i) => {

      if(getDistanceItem(this, item) < 20 && item.ground){

        let found = itemslots.find(slot => slot.available)

        if(found){

          new ItmDisplay(item.type, item.img, item.color)

          if(InvUi.display){
            if(item.type == 'Upper Armor'){
              found.item = new UpperArmor(found.x, found.y, item.ac, item.proprieties, item.rarity, true, item.img, found, false, item.level)
              found.available = false
              items.splice(i, 1)
            } else if(item.type == 'Bottom Armor'){
              found.item = new BottomArmor(found.x, found.y, item.ac, item.proprieties, item.rarity, true, item.img, found, false, item.level)
              found.available = false
              items.splice(i, 1)
            } else if(item.type == 'Center Armor'){
              found.item = new CenterArmor(found.x, found.y, item.ac, item.proprieties, item.rarity, true, item.img, found, false, item.level)
              found.available = false
              items.splice(i, 1)
            } else if(item.type == 'Visor'){
              found.item = new Visor(found.x, found.y, found.h, found.w,  item.type, true, item.img, found, false, item.color)
              found.available = false
              items.splice(i, 1)
            } else if(item.type == 'Laser'){
              found.item = new Laser(found.x, found.y, found.h, found.w,  item.type, true, item.img, found, false, item.power)
              found.available = false
              items.splice(i, 1)
            }

          } else {

            if(item.type == 'Upper Armor'){
              found.item = new UpperArmor(found.x, found.y, item.ac, item.proprieties, item.rarity, false, item.img, found, false, item.level)
              found.available = false
              items.splice(i, 1)
            } else if(item.type == 'Bottom Armor'){
              found.item = new BottomArmor(found.x, found.y, item.ac, item.proprieties, item.rarity, false, item.img, found, false, item.level)
              found.available = false
              items.splice(i, 1)
            } else if(item.type == 'Center Armor'){
              found.item = new CenterArmor(found.x, found.y, item.ac, item.proprieties, item.rarity, false, item.img, found, false, item.level)
              found.available = false
              items.splice(i, 1)
            } else if(item.type == 'Visor'){
              found.item = new Visor(found.x, found.y, found.h, found.w,  item.type, false, item.img, found, false, item.color)
              found.available = false
              items.splice(i, 1)
            } else if(item.type == 'Laser'){
              found.item = new Laser(found.x, found.y, found.h, found.w,  item.type, false, item.img, found, false, item.power)
              found.available = false
              items.splice(i, 1)
            }
          }
        }
      }
    })

    gold.forEach((coins, i) => {
      if(getDistanceItem(this, coins) < 30){
        new ItmDisplay(coins.type, coins.img, coins.color)
        this.gold += coins.quantity
        gold.splice(i, 1)
      }
    })
  }
}

class Rammer extends Ikon {

  constructor(x, y, xpe){
    super()
    this.pos = new Vector(x,y)
    this.physicalPower = 3
    this.naturalAc = 5
    this.acceleration = 0.8
    this.power = 1
    this.xp = xpe
    this.type = 'Rammer'
    this.featsAvailable = [
      {
        name: 'Spinning Dash',
        img: spinningdash,
        activate: () => {
          evade()
        }
      },
      {
        name: 'Steel Shield',
        img: steelArmor,
        activate: () => {
          Armorofsteel()
        }
      },
      {
        name: 'Whirlwind',
        img: whirlwind,
        activate: () => {
          whirlWind()
        }
      }
    ]
    this.featsTaken = [{
    }]
  }
}

// RAMMER SKILLS

function Armorofsteel() {

  if(cooldownSa == false) {
      Ikon1.naturalAc += 1
      cooldownSa = true
  }

}

function steelCoolDown() {
  if(cooldownSa == true){
    for(let i = 0; i < 2; i++){
      particles.push(new EnergyLines(500, 550))
    }
    cooldownSaTimer--
    if(cooldownSaTimer <= 0){
      Ikon1.naturalAc -= 1
      cooldownSa = false
      cooldownSaTimer = 1000
    }
  }
}


function whirlWind() {
  console.log(cooldownWhirlwind)

    if(cooldownWhirlwind == false) {
      Ikon1.physicalPower += 1
      cooldownWhirlwind = true
      cooldownWhirlwindEffect = true
    }
}

function whirlWindCoolDown() {

  if(cooldownWhirlwindEffect){
    for(let i = 0; i < 3; i++){
      particles.push(new Whirlwind(Ikon1.pos.x, Ikon1.pos.y))
    }
    whirlWindEffect--
    if(whirlWindEffect <= 0){
      Ikon1.physicalPower -= 1
      whirlWindEffect = 50
      cooldownWhirlwindEffect = false
    }
  }

  if(cooldownWhirlwind){
    cooldownWhirlwindTimer--
    if(cooldownWhirlwindTimer <= 0){
      cooldownWhirlwind = false
      cooldownWhirlwindTimer = 500
  }
 }
}

class Shrouder extends Ikon {

  constructor(x, y, xpe){
    super()
    this.pos = new Vector(x,y)
    this.naturalAc = 4
    this.acceleration = 1
    this.power = 1
    this.type = 'Shrouder'
    this.xp = xpe
    this.featsAvailable = [
      {
        name: 'Unifiying Aura',
        img: uniaura,
        activate: () => {
          uniAura()
        }
      },
      {
        name: 'Evade',
        img: evadeSkill,
        activate: () => {
          evade()
        }
      },
      {
        name: 'Entanglement',
        img: invaura,
        activate: () => {
          auraOfEntanglement()
        }
      },
      {
        name: 'Fixing Aura',
        img: fixaura,
        activate: () => {
          fixAura()
        }
      },
    ]
    this.featsTaken = [{
    }]
  }


}

// SKILLS SHROUDER

function evade() {

    if(RIGHT && !UP && !DOWN){
      if(cooldownDash == false){
          Ikon1.vel.x = Ikon1.vel.x + 15
          Ikon1.acc.x = Ikon1.acc.x + 15
          cooldownDash = true
      }
    }

    if(LEFT && !UP && !DOWN){
      if(cooldownDash == false) {
          Ikon1.vel.x = Ikon1.vel.x - 15
          Ikon1.acc.x = Ikon1.acc.x - 15
          cooldownDash = true
      }
    }

    if(DOWN && !RIGHT && !LEFT){
      if(cooldownDash == false) {
        Ikon1.vel.y = Ikon1.vel.y + 15
        Ikon1.acc.y = Ikon1.acc.y + 15
        cooldownDash = true
      }
    }

    if(UP && !RIGHT && !LEFT){
      if(cooldownDash == false) {
        Ikon1.vel.y = Ikon1.vel.y - 15
        Ikon1.acc.y = Ikon1.acc.y - 15
        cooldownDash = true
      }
    }

    // Diagonal dodge

    if(RIGHT && UP){
      if(cooldownDash == false) {
        Ikon1.vel.y = Ikon1.vel.y - 15
        Ikon1.acc.y = Ikon1.acc.y - 15
        Ikon1.vel.x = Ikon1.vel.x + 15
        Ikon1.acc.x = Ikon1.acc.x + 15
        cooldownDash = true
      }
    }

    if(RIGHT && DOWN){
      if(cooldownDash == false) {
        Ikon1.vel.y = Ikon1.vel.y + 15
        Ikon1.acc.y = Ikon1.acc.y + 15
        Ikon1.vel.x = Ikon1.vel.x + 15
        Ikon1.acc.x = Ikon1.acc.x + 15
        cooldownDash = true
      }
    }

    if(LEFT && UP){
      if(cooldownDash == false) {
        Ikon1.vel.y = Ikon1.vel.y - 15
        Ikon1.acc.y = Ikon1.acc.y - 15
        Ikon1.vel.x = Ikon1.vel.x - 15
        Ikon1.acc.x = Ikon1.acc.x - 15
        cooldownDash = true
      }
    }

    if(LEFT && DOWN){
      if(cooldownDash == false) {
        Ikon1.vel.y = Ikon1.vel.y + 15
        Ikon1.acc.y = Ikon1.acc.y + 15
        Ikon1.vel.x = Ikon1.vel.x - 15
        Ikon1.acc.x = Ikon1.acc.x - 15
        cooldownDash = true
      }
    }
  }

function coolDash() {
  if(cooldownDash == true){
    cooldownDashTimer--
    if(cooldownDashTimer <= 0){
      cooldownDash = false
      cooldownDashTimer = 100
    }
  }
}

function uniAura() {

  if(cooldownUniAura == false) {
      Ikon1.naturalPower += 1
      Ikon1.physicalPower += 1
      cooldownUniAura = true
  }

}

function cooldownUAura() {
  if(cooldownUniAura){
    for(let i = 0; i < 2; i++){
      particles.push(new UniAura(Ikon1.pos.x, Ikon1.pos.y))
    }
    cooldownUniTimer--
    if(cooldownUniTimer <= 0){
      Ikon1.naturalPower -= 1
      Ikon1.physicalPower -= 1
      cooldownUniAura = false
      cooldownUniTimer = 1000
    }
  }
}

function auraOfEntanglement() {

    if(cooldownEntanglement == false){

      ctx.beginPath()
      ctx.arc(Ikon1.pos.x, Ikon1.pos.y, 120, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(117, 255, 0, 0.1)'
      ctx.fill()
      ctx.closePath()

      for(let i in enemies){
        enemy = enemies[i]
        if(getDistance(Ikon1, enemy) < 120){
            enemy.entangled = true
          }
      }

      for(let i = 0; i < 5; i++){
        particles.push(new AuraEntanglement(Ikon1.pos.x, Ikon1.pos.y))
      }
      cooldownEntanglement = true
  }
}

function cooldownEnt() {
  if(cooldownEntanglement){
    cooldownEntTimer--
    if(cooldownEntTimer <= 0){
      cooldownEntanglement = false
      cooldownEntTimer = 100
    }
  }
}

function fixAura() {

  Ikon1.fixing = true

  if(cooldownFlower == false){
    cooldownFlower = true
  }
}

function cooldownFixAura() {

  if(cooldownFlower){

    cooldownFlowertimer++
    Ikon1.hp += 0.1
    ctx.drawImage(healingIcon, Ikon1.pos.x - 56, Ikon1.pos.y - 80)

    if(cooldownFlowertimer > 200){
      cooldownFlower = false
      cooldownFlowertimer = 0
      Ikon1.fixing = false
    }

  }
}


class Discharger extends Ikon {

  constructor(x, y){
    super()
    this.pos = new Vector(x,y)
    this.naturalAc = 4
    this.acceleration = 0.9
    this.power = 1
    this.type = 'Discharger'
    this.featsAvailable = [
      {
        name: 'Light of Zenith',
        img: loz,
        activate: () => {
          lightOfZenith()
        }
      },
      {
        name: 'Swift',
        img: swift,
        activate: () => {
          swiftSkill()
        }
      },
      {
        name: 'Trifekta',
        img: trifekta,
        activate: () => {
          trifecta()
        }
      }
    ]
    this.featsTaken = [{

    }]
  }

}



// SKILLS DISCHARGER

function lightOfZenith() {

    if(cooldownLOF == false){

      ctx.save()
      ctx.strokeStyle = 'rgba(255, 255, 255, 1)'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(Ikon1.pos.x, Ikon1.pos.y)
      ctx.lineTo(mouseX + MainCamera.pos.x, mouseY + MainCamera.pos.y)
      ctx.stroke()
      ctx.restore()
      ctx.save()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.lineWidth = 20
      ctx.beginPath()
      ctx.moveTo(Ikon1.pos.x, Ikon1.pos.y)
      ctx.lineTo(mouseX + MainCamera.pos.x, mouseY + MainCamera.pos.y)
      ctx.stroke()
      ctx.restore()

      let newLight = new Line(Ikon1.pos.x, Ikon1.pos.y, angle.x + MainCamera.pos.x, angle.y + MainCamera.pos.y)
      cooldownLOF = true
  }
}

function lightOfZenithCooldown() {
  if(cooldownLOF){
    cooldownLOFtimer--
    if(cooldownLOFtimer <= 95){
        lines.splice(0,1)
    }
    if(cooldownLOFtimer <= 0){
      cooldownLOF = false
      cooldownLOFtimer = 100
    }
  }
}

function swiftSkill() {

  if(cooldownSwift == false) {
      Ikon1.acceleration += 0.3
      cooldownSwift = true
  }
}

function swiftCooldown() {
  if(cooldownSwift){
    for(let i = 0; i < 2; i++){
      particles.push(new Swift(Ikon1.pos.x, Ikon1.pos.y))
    }
    cooldownSwiftTimer--
    if(cooldownSwiftTimer <= 0){
      Ikon1.acceleration -= 0.3
      cooldownSwift = false
      cooldownSwiftTimer = 1000
    }
  }
}

function trifecta() {

  if(cooldownTRI == false) {
    lasers.push(new Falcon(Ikon1.pos.x, Ikon1.pos.y, Ikon1.angle, Ikon1.id))
    lasers.push(new Falcon(Ikon1.pos.x, Ikon1.pos.y, 94.5 + Ikon1.angle, Ikon1.id))
    lasers.push(new Falcon(Ikon1.pos.x, Ikon1.pos.y, 100 + Ikon1.angle, Ikon1.id))
    lasers.push(new Falcon(Ikon1.pos.x, Ikon1.pos.y, -94.5 + Ikon1.angle, Ikon1.id))
    lasers.push(new Falcon(Ikon1.pos.x, Ikon1.pos.y, -100 + Ikon1.angle, Ikon1.id))
    cooldownTRI = true
  }

}

function trifectaCooldown() {
  if(cooldownTRI){
    cooldownTRItimer--
    if(cooldownTRItimer <= 0){
      cooldownTRI = false
      cooldownTRItimer = 50
    }
  }
}
