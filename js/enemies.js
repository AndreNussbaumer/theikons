
let corrosionTimer = 1000
let corrosion = false

// Enemy constructor

class Enemy {

  constructor() {

    this.acc = new Vector(0,0)
    this.vel = new Vector(0,0)
    this.m = 10
    this.physicalPower = 1
    if(this.m === 0){
        this.inv_m = 0;
    } else {
        this.inv_m = 1 / this.m;
    }
    this.r = 13
    this.elasticity = 1
    this.acceleration = 1
    this.angle = 0
    this.id = Math.random()
    this.hp = null
    this.toRemove = false
    this.shoot = true
    this.shield = false
    this.hit = false
    this.dead = false
    this.naturalAc = 1
    this.entangled = false
    this.corroded = false
    this.entanglement = false
    this.entTimer = 100
    this.img = dentedUpPlay
    enemies.push(this)

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

  decreaseAcc(value) {
    return this.acceleration = this.acceleration - value
  }

  increaseAcc(value) {
    return this.acceleration = this.acceleration + value
  }

  entangle() {


    if(this.entangled){
      this.entanglement = true
      this.entangled = false
      this.decreaseAcc(0.5)
    }

    if(this.entanglement){
      ctx.drawImage(entangledIcon, this.pos.x - 50, this.pos.y - 60)
      this.entTimer--
      if(this.entTimer <= 0){
        this.entTimer = 100
        this.entanglement = false
      }
    } else {
      this.acceleration = 1
    }

  }

  corrode() {

    if(this.corroded){
      corrosion = true
      this.corroded = false
    }

    if(corrosion){
      corrosionTimer--
      this.hp -= 0.1
      if(corrosionTimer <= 0){
        corrosion = false
        corrosionTimer = 1000
      }
    }
  }
}

class Dummy extends Enemy {

  constructor(x, y){
    super()
    this.pos = new Vector(x,y)
    this.lvl = 2
    this.power = 2
    this.shieldTime = 100
    this.hp = 10
    this.img = dentedUpPlay
    this.name = 'Dummy'
    this.hit = false
  }

  updatePosition() {
    this.pos.x += Math.random() * 8
    this.pos.y += Math.random() * 8
    if(this.pos.x + 5 > MainCamera.pos.x || this.pos.y + 5 > MainCamera.pos.y){
      this.pos.x -= Math.random() * 8
      this.pos.y -= Math.random() * 8
    }
  }

  shooting() {
    if(Math.random() < 0.01) {
      lasers.push(new Lasers(this.pos.x, this.pos.y, Math.random()*9, this.id))
    }
   }

   drawEnemy() {
     ctx.save()
     ctx.drawImage(dentedUpPlay, this.pos.x - dentedUpPlay.width / 2, this.pos.y - dentedUpPlay.height / 2)
     healthBar(this.pos.x - 50,this.pos.y -40,100,10,this.hp, 100)
     ctx.fillStyle = "red"
     ctx.font = "bold"
     ctx.fillText(this.name, this.pos.x - 30, this.pos.y - 50)
     ctx.restore()
   }

   destroyed() {
     if(this.hp <= 0){

       this.toRemove = true
     }
   }
}

class Wrecker extends Enemy {

  constructor(x, y){
    super()
    this.pos = new Vector(x,y)
    this.lvl = 3
    this.power = 1
    this.shieldTime = 100
    this.hp = 100
    this.img = dentedUpPlay
    this.name = 'Dummy'
  }

  updatePosition() {
    this.acc.x += this.acceleration
  }

  shooting() {

  }

  drawEnemy() {
   ctx.save()
   ctx.drawImage(sprites.junkArmorTop, this.pos.x - sprites.junkArmorTop.width / 2, this.pos.y - sprites.junkArmorTop.height / 2)
   healthBar(this.pos.x - 50,this.pos.y -40,100,10,this.hp, 100)
   ctx.fillStyle = 'white';
   ctx.fillRect(this.pos.x - 50, this.pos.y - 55, this.shieldTime, 10)
   ctx.fillText(this.acceleration, this.pos.x - 50, this.pos.y - 75)
   ctx.restore()
  }

  destroyed() {

    if(this.hp <= 0){
      this.toRemove = true
      let randomPercentage = Math.floor(Math.random() * 100) + 1
      if(randomPercentage > 10){
        new Gold(this.pos.x, this.pos.y, Math.round(Math.random() * 6 * this.lvl))
      } else if(randomPercentage < 10) {
        new Laser(this.pos.x, this.pos.y)
      } else if(randomPercentage < 5) {
        new Armor(this.pos.x, this.pos.y)
      }
    }
   }
  }

class Soulless extends Enemy {

  constructor(x, y) {

    super()
    this.pos = new Vector(x,y)
    this.lvl = 3
    this.power = 3
    this.shieldTime = 100
    this.hp = 100
    this.angle = 0
    this.timer = 0
    this.criticalHit = 5
    this.img = shrouderSkin
    this.name = 'Soulless'
    this.hit = false

  }

  updatePosition() {

      let dx = this.pos.x - (Ikon1.pos.x)
      let dy = this.pos.y - (Ikon1.pos.y)

      if(RIGHT){
        dx -= 30
        dy -= 30
        this.angle = Math.atan2(-dy, -dx);
      } else {
        let dx = this.pos.x - (Ikon1.pos.x)
        let dy = this.pos.y - (Ikon1.pos.y)
      }

      if(LEFT){
        dx += 30
        dy += 30
        this.angle = Math.atan2(-dy, -dx);
      } else {
        let dx = this.pos.x - (Ikon1.pos.x)
        let dy = this.pos.y - (Ikon1.pos.y)
      }

      this.angle = Math.atan2(-dy, -dx);

      let length = Math.sqrt(dx * dx + dy * dy)
      if(length) {
        dx /= length
        dy /= length
      }

      this.pos.x -= dx
      this.pos.y -= dy

      if(this.timer++ > 5500){
        this.toRemove = true
      }
  }

  drawEnemy() {
    ctx.save()
    ctx.drawImage(shrouderSkin, this.pos.x - shrouderSkin.width/2, this.pos.y - shrouderSkin.height/2)
    healthBar(this.pos.x - 50,this.pos.y -40,100,10,this.hp, 100)
    ctx.fillStyle = 'red';
    ctx.font = "bold"
    ctx.fillText(this.name, this.pos.x - 30, this.pos.y - 50)
    ctx.restore()
  }

  shooting() {

    if(Math.random() < 0.01) {
      lasers.push(new Lasers(this.pos.x, this.pos.y, this.angle, this.id))
    }
   }

  destroyed() {
    if(this.hp <= 0){
      this.toRemove = true
    }
  }
}

function makeCircle(x, y, radius, color, alpha) {
  ctx.save()
  ctx.beginPath();
  ctx.globalAlpha = alpha
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.restore()
}

function makeCircleFill(x, y, radius, color, alpha) {
  ctx.save()
  ctx.beginPath();
  ctx.globalAlpha = alpha
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = 2;
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore()
}

function highlightEnemies() {
  enemies.forEach((enemy, index) => {
    if(isInsideCameraEnemy(enemy)){
      makeCircle(enemy.pos.x, enemy.pos.y, enemy.img.width, 'red', 0.5)
    }
  })
}

function updateEnemies() {
  enemies.forEach((enemy, index) => {
    if(enemy.toRemove){
      generateArmor(enemy.pos.x, enemy.pos.y, enemy.lvl)
      new Damage(enemy.pos.x, enemy.pos.y, experienceEnemy(enemy.lvl), false, 'Experience')
      Ikon1.xp += experienceEnemy(enemy.lvl)
      enemies.splice(index, 1)
    } else {
      enemy.entangle()
      enemy.corrode()
      enemy.reposition()
      enemy.updatePosition()
      enemy.destroyed()
      enemy.shooting()
      enemy.drawEnemy()
    }
  })
}



