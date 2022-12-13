// DAMAGE DISPLAY

class Damage {

  constructor(x, y, dmg, crit, type) {
    this.pos = new Vector(x, y)
    this.dmg = dmg
    this.type = type
    this.criticalHit = crit
    this.timer = 0
    physicalHitArray.push(this)
  }

  drawDmg() {

    this.timer++

    if(this.criticalHit){
      ctx.fillStyle = "orange"
      ctx.fillText(this.dmg, this.pos.x, this.pos.y)
    } else if(this.type == 'Experience'){
      ctx.save()
      ctx.fillStyle = "white"
      ctx.font = 'bold 14px arial'
      ctx.fillText(this.dmg + ' XP', this.pos.x, this.pos.y)
      ctx.restore()
    } else if(this.type == 'Level Up'){
      ctx.save()
      ctx.fillStyle = "rgba(255, 69, 156, 1)"
      ctx.font = 'bold 16px arial'
      ctx.fillText('Level Up!', this.pos.x, this.pos.y)
      ctx.restore()
    } else {
      ctx.fillStyle = "yellow"
      ctx.fillText(this.dmg, this.pos.x, this.pos.y)
    }
  }

  updateMovement() {

    if(this.type == 'Experience'){

      if(this.timer >= 30){
        this.pos.x -= 0.5
      } else {
        this.pos.x += 0.5
      }
      this.pos.y--

    } else if(this.type == 'Level Up'){
      if(this.timer >= 30){
        this.pos.x -= 0.5
      } else {
        this.pos.x += 0.5
      }
      this.pos.y--
    } else {
      this.pos.y--
    }
  }
}

function dmgDisplay() {
  physicalHitArray.forEach((hit, index) => {
    if(hit.timer > 60){
      physicalHitArray.splice(index, 1)
    } else {
      hit.drawDmg()
      hit.updateMovement()
    }
  })
}

