
// Particles

class Particles {

  constructor(){

  }

}

class Dust extends Particles {

  constructor(x, y){
    super()
    this.x = x
    this.y = y
    this.size = Math.random() * 7
    this.spdX = Math.random() * 1 - 0.5
    this.spdY = Math.random() * 1 - 0.5
    this.color = Ikon1.visorColor  // Purple 139, 36, 255
  }

  draw(){

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    if(this.color == 'Red'){
      ctx.fillStyle = 'rgba(255, 0, 0, 0.2)'
    } else if(this.color == 'Blue'){
      ctx.fillStyle = 'rgba(0, 0, 255, 0.2)'
    } else if(this.color == 'Green'){
      ctx.fillStyle = 'rgba(0, 255, 0, 0.2)'
    } else if(this.color == 'Orange'){
      ctx.fillStyle = 'rgba(255, 100, 0, 0.2)'
    } else if(this.color == 'Turquoise'){
      ctx.fillStyle = 'rgba(0, 255, 200, 0.2)'
    } else if(this.color == 'Yellow'){
      ctx.fillStyle = 'rgba(255, 255, 0, 0.2)'
    } else if(this.color == 'Purple'){
      ctx.fillStyle = 'rgba(100, 0, 255, 0.2)'
    } else if(this.color == 'Magenta'){
      ctx.fillStyle = 'rgba(255, 0, 130, 0.2)'
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    }
    ctx.fill()
    }

  update() {
    this.x += this.spdX
    this.y += this.spdY
    if(this.size > .2){
      this.size -= .1
    }
    this.draw()
  }
}

let y

class Energy extends Particles {

  constructor(x, y){
    super()
    this.x = Ikon1.pos.x
    this.y = Ikon1.pos.y
    this.radians = 0
    this.velocity = Math.random() * 1
    this.size = Math.random() * 9
    this.color = 'rgba(15, 10, 222, 0.3)'
  }

  draw(){
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
    }

  update() {

    x = 500
    y = 500
    this.radians += this.velocity
    this.x = Ikon1.pos.x + Math.cos(this.radians) * 60
    this.y = Ikon1.pos.y + Math.sin(this.radians) * 60
    if(this.size > .2){
      this.size -= .1
    }
    this.draw()
  }
}

class EnergyLines extends Particles {

  constructor(x, y){
    super()
    this.x = Ikon1.pos.x
    this.y = Ikon1.pos.y
    this.radians = Math.random() * Math.PI * 2
    this.velocity = Math.random() * 1
    this.size = Math.random() * 3
    this.color = 'rgba(255, 255, 255, 0.6)'
  }

  draw(){
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.closePath()
    }

  update() {

    x = 500
    y = 500
    this.radians += this.velocity
    this.x = Ikon1.pos.x + Math.cos(this.radians) * 20
    this.y = Ikon1.pos.y + Math.sin(this.radians) * 20
    if(this.size > .2){
      this.size -= .1
    }
    this.draw()
  }
}

class Whirlwind extends Particles {

    constructor(x, y){
      super()
      this.x = x
      this.y = y
      this.radians = Math.random() * Math.PI * 2
      this.velocity = Math.random() * 1
      this.size = Math.random() * 10
      this.color = 'rgba(255, 25, 0, 0.6)'
      this.distanceFromCenter = {x: randomInt(30), y: randomInt(30)}
    }

    draw(){
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.closePath()

      }

    update() {

      this.radians += this.velocity
      this.x = Ikon1.pos.x + Math.cos(this.radians) * 30
      this.y = Ikon1.pos.y + Math.sin(this.radians) * 30
      if(this.size > .2){
        this.size -= .1
      }
      this.draw()
    }
}

class Smokelight extends Particles {

    constructor(x, y){
      super()
      this.x = x
      this.y = y
      this.radians = Math.random() * Math.PI * 2
      this.velocity = Math.random() * 1
      this.size = Math.random() * 10
      this.color = 'rgba(255, 25, 0, 0.6)'
      this.img = weakLaser
      this.distanceFromCenter = {x: randomInt(30), y: randomInt(30)}
    }

    draw(){
      ctx.drawImage(this.img, this.x, this.y)
    }

    update() {

      this.radians += this.velocity
      this.x = Ikon1.pos.x + Math.cos(this.radians) * 30
      this.y = Ikon1.pos.y + Math.sin(this.radians) * 30
      if(this.size > .2){
        this.size -= .1
      }
      this.draw()
    }
}


class Swift extends Particles {

    constructor(x, y){
      super()
      this.x = x
      this.y = y
      this.radians = Math.random() * Math.PI * 2
      this.velocity = Math.random() * 3
      this.size = Math.random() * 5
      this.color = 'rgba(0, 255, 157, 1)'
      this.distanceFromCenter = {x: randomInt(30), y: randomInt(30)}
    }

    draw(){
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.closePath()
      }

    update() {

      this.radians += this.velocity
      this.x = Ikon1.pos.x + Math.cos(this.radians) * 30
      this.y = Ikon1.pos.y + Math.sin(this.radians) * 30
      if(this.size > .2){
        this.size -= .1
      }
      this.draw()
    }
}

class UniAura extends Particles {

    constructor(x, y){
      super()
      this.x = x
      this.y = y
      this.radians = Math.random() * Math.PI * 2
      this.velocity = Math.random() * 3
      this.size = Math.random() * 5
      this.color = 'rgba(234, 255, 0, 0.8)'
      this.distanceFromCenter = {x: randomInt(50), y: randomInt(50)}
    }

    draw(){
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.closePath()
      }

    update() {

      this.radians += this.velocity
      this.x = Ikon1.pos.x + Math.cos(this.radians) * 30
      this.y = Ikon1.pos.y + Math.sin(this.radians) * 30
      if(this.size > .2){
        this.size -= .1
      }
      this.draw()
    }
}

class AuraEntanglement extends Particles {

    constructor(x, y){
      super()
      this.x = x
      this.y = y
      this.radians = Math.random() * Math.PI * 2
      this.velocity = Math.random() * 3
      this.size = Math.random() * 5
      this.color = 'rgba(117, 255, 0, 0.8)'
      this.distanceFromCenter = {x: randomInt(120), y: randomInt(120)}
    }

    draw(){
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.closePath()
      }

    update() {

      this.radians += this.velocity
      this.x = Ikon1.pos.x + Math.cos(this.radians) * 120
      this.y = Ikon1.pos.y + Math.sin(this.radians) * 120
      if(this.size > .2){
        this.size -= .1
      }
      this.draw()
    }
}


class ItemQuality extends Particles {

    constructor(x, y, color, imgSize){
      super()
      this.x = x
      this.y = y
      this.radians = Math.random() * Math.PI * 2
      this.velocity = Math.random() * 8
      this.size = Math.random() * 5
      this.color = color
      this.imgSize = imgSize
      this.distanceFromCenter = {x: randomInt(111), y: randomInt(111)}
    }

    draw(){
      ctx.save()
      ctx.beginPath()
      ctx.arc(this.x + this.imgSize - 6, this.y + this.imgSize - 6, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.closePath()
      ctx.restore()
    }

    update() {

      this.x = this.x + Math.cos(this.radians) * 1
      this.y = this.y + Math.sin(this.radians) * 1

      this.radians += this.velocity

      if(this.size > .2){
        this.size -= .1
      }
      this.draw()
    }
}

class Smoke extends Particles {

    constructor(x, y){
      super()
      this.x = x
      this.y = y
      this.radians = Math.random() * Math.PI * 2
      this.velocity = Math.random() * 2
      this.size = Math.random() * 3
    }

    draw(){
      ctx.drawImage(smoke, this.x, this.y)
    }

    update() {

      this.x = this.x + Math.cos(this.radians) * 5
      this.y = this.y + Math.sin(this.radians) * 5

      this.radians += this.velocity

      if(this.size > .2){
        this.size -= .1
      }
      this.draw()
    }
}

function handleParticles() {
  for(let i = 0; i < particles.length ; i++){
    particles[i].update()
    if(particles[i].size <= .3){
      particles.splice(i, 1)
      i--
    }
  }

  for(let i = 0; i < 1; i++){
    particles.push(new Dust(Ikon1.pos.x, Ikon1.pos.y))
  }
  /*
  for(let i = 0; i < 1; i++){
    particles.push(new Smoke(600, 600))
  }
  */
}