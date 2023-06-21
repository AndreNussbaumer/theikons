class Menu {

  constructor(x, y, w, h){

    this.x = 700
    this.y =  250
    this.width = 200
    this.height = 370
    this.display = false

  }

  draw(){

  }
}

class StatIcons {

  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 20
    this.height = 20
    iconstats.push(this)
  }

  draw(){
    ctx.drawImage(pointsIcon, x, y)
  }

}

class CharMenu extends Menu {

  constructor(x, y, w, h){
    super()
    this.x = 700
    this.y =  250
    this.width = 200
    this.height = 370
    this.display = false
  }

  draw(){

    if(this.display){
      ctx.save()
      box(850, 200, 250, 520, 0.8)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 0.6
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.fillRect(1100 - 30, 200 + 10, 20, 20)
      ctx.fillStyle = 'white'
      drawX(1100 - 20, 200 + 20)


      if(mouseX > 1100 - 30 && mouseX < 1100 && mouseY > 200 && mouseY < 200 + 40) {
        ctx.save()
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
        ctx.fillRect(1100 - 30, 200 + 10, 20, 20)
        ctx.restore()
      } else {
      }

      if(clickX > 1100 - 30 && clickX < 1100 && clickY > 200 && clickY < 200 + 40) {
        CharacterMenu.display = false
      }

      ctx.fillStyle = 'white'
      ctx.moveTo(900, 270)
      ctx.lineTo(1050, 270)
      ctx.lineWidth = 0.6
      ctx.stroke()

      ctx.textAlign = "center"

      ctx.fillText('Character Stats', 975, 250)
      ctx.fillText('Physical Power', 975, 380)
      ctx.fillText(Ikon1.physicalPower, 975, 410)
      ctx.fillText('Acceleration', 975, 450)
      ctx.fillText(Ikon1.acceleration, 975, 480)
      ctx.fillText('Lasers Power', 975, 520)
      ctx.fillText(Ikon1.power, 975, 550)
      ctx.fillText('Attack Speed', 975, 590)
      ctx.fillText(Ikon1.AttSpeed, 975, 620)
      ctx.fillText('Points Available:', 975, 660)
      ctx.fillText(Ikon1.points, 975, 690)
      ctx.fillText('Armor Class', 975, 310)
      ctx.fillText(Math.round(Ikon1.ac * 10) / 10, 975, 330)

      if(Ikon1.points){
        ctx.save()
        ctx.fillStyle = 'white'
        for(let i = 0; i < 5; i++) {
          let j = i * 75
          ctx.drawImage(pointsIcon, 1050, 305 + j)
          if(mouseX > 1050 && mouseX < 1070 && mouseY > 305 + j && mouseY < 325 + j) {
            ctx.save()
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
            ctx.fillRect(1050, 305 + j, 20, 20)
            ctx.restore()
          }
        }
        ctx.restore()
      }
      ctx.restore()
    }
  }
}

let CharacterMenu = new CharMenu()

function charMenu() {
  CharacterMenu.draw()
}


class SkillSlots {

  constructor(x, y, n){
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.display = true
    this.over = false
    this.img = emptySlot
    this.skill = null
    this.number = n
    this.toggled = false
  }

  draw(){
    ctx.save()
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.restore()
    if(isInside(this)){
      ctx.save()
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.fillRect(this.x, this.y, this.img.width, this.img.height)
      ctx.restore()
    }
  }

  addSkill(skill) {
    this.skill = skill
  }

  removeSkill(skill) {
    this.skill = null
  }

  toggleSkill() {
   if(rightClick){
     for(let i = 0; i < slots.length; i++) {
       if(slots[0].skill){
         slots[0].skill.power()
       }
     }
   }
   if(SLOTONE){
     for(let i = 0; i < slots.length; i++) {
       if(slots[1].skill){
         slots[1].skill.power()
       }
     }
   }
   if(SLOTTWO){
     for(let i = 0; i < slots.length; i++) {
       if(slots[2].skill){
         slots[2].skill.power()
       }
     }
   }
  }
}

class Skill {

  constructor(x, y, name, s, img, power){
    this.x = x
    this.y = y
    this.height = 50
    this.width = 50
    this.name = name
    this.display = true
    this.dragged = false
    this.clicked = false
    this.power = power
    this.slot = s
    this.img = img
    this.over = false
    this.id = skills.length
    skills[skills.length] = this
    return this
  }

  mouseOver() {
    if(isInside(this)) {
     this.over = true
    } else {
     this.over = false
    }
  }


  draw() {
    ctx.save()
    ctx.drawImage(this.img, this.x, this.y, 50, 50)
    ctx.restore()
  }

  cooldownOverlay() {

    // DISCHARGER

    if(cooldownLOFtimer <= 99 && this.img == loz){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownLOFtimer/2, 50)
    }

    if(cooldownTRItimer <= 49 && this.img == trifekta){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownTRItimer, 50)
    }

    if(cooldownSwiftTimer <= 999 && this.img == swift){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownSwiftTimer/20, 50)
    }

    // SHROUDER

    if(cooldownDashTimer <= 99 && this.img == evadeSkill){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownDashTimer/2, 50)
    }

    if(cooldownEntTimer <= 99 && this.img == invaura){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownEntTimer/2, 50)
    }

    if(cooldownUniTimer <= 999 && this.img == uniaura){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownUniTimer/20, 50)
    }

    // RAMMER

    if(cooldownDashTimer <= 99 && this.img == spinningdash){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownDashTimer/2, 50)
    }

    if(cooldownWhirlwindTimer <= 499 && this.img == whirlwind){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownWhirlwindTimer/9, 50)
    }

    if(cooldownSaTimer <= 999 && this.img == steelArmor){
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(this.x, this.y, cooldownSaTimer/20, 50)
    }


  }

  drawDescription() {

    if(this.over) {
      ctx.save()
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
      ctx.beginPath()
      ctx.rect(this.x - 60, this.y - 60, 145, 60)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 0.6
      ctx.stroke()
      ctx.fillRect(this.x - 60, this.y - 60, 145, 60)
      ctx.closePath()
      ctx.beginPath()
      ctx.moveTo(this.x + 10, this.y - 60);
      ctx.lineTo(this.x + 10, this.y);
      ctx.lineWidth = 1
      ctx.closePath()
      ctx.textAlign = "center"
      ctx.fillStyle = 'white'
      ctx.fillText(this.name, this.x + 10, this.y - 35)
      if(this.slot.number == 0){
        ctx.font = 'italic small-caps bold 12px arial'
        ctx.fillText('Right Click', this.x + 10, this.y - 15, 50)
      } else {
        ctx.font = 'italic small-caps bold 12px arial'
        ctx.fillText(this.slot.number, this.x + 10, this.y - 15, 50)
      }
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.fillRect(this.x, this.y, 50, 50)
      ctx.restore()
    }
  }

  drop() {
    this.dragged = false
    this.x = this.slot.x
    this.y = this.slot.y
  }

  dropOnSlot(x, y, slot) {
    this.dragged = false
    this.x = x
    this.y = y
    this.slot = slot
  }
}

for(let i = 0; i < 8; i++) {
  slots[i] = new SkillSlots(750 + (60 * i), 850, 0 + i)
}

Ikon1.featsAvailable.forEach((feat, i) => {
  slots[i].skill = new Skill(slots[i].x, slots[i].y, feat.name, slots[i], feat.img, feat.activate, false)
})

/*
for(let i = 0; i < 3; i++) {
  slots[i].skill = new Skill(slots[i].x, slots[i].y, Ikon1.featsAvailable[i].name, slots[i], skillImgs[i])
}
*/



class Icon {

  constructor(x, y, img){
    this.x = x
    this.y = y
    this.img = img
    iconlist.push(this)
  }

  draw(){

    ctx.drawImage(this.img, this.x, this.y)

  }


}

let iconStats = new Icon(30, 30, spriteInv)
let iconInv = new Icon(90, 30, spriteStats)

function ikonDisplay() {

}


function userInterface() {

  iconStats.draw()
  iconInv.draw()

  iconlist.forEach((icon, i) => {

    if(isInside(icon)){
      ctx.save()
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.fillRect(icon.x, icon.y, 50, 50)
      if(icon.img == spriteInv){
        box(icon.x + 10, icon.y + 20, 100, 40, 0.8)
        ctx.font = 'italic bold 12px arial'
        ctx.fillStyle = 'white'
        ctx.fillText('Inventory', icon.x + 30, icon.y + 43)
      }
      if(icon.img == spriteStats){
        box(icon.x + 20, icon.y + 20, 133, 40, 0.8)
        ctx.font = 'italic bold 12px arial'
        ctx.fillStyle = 'white'
        ctx.fillText('Character Stats', icon.x + 40, icon.y + 43)
      }
      ctx.restore()
    }

  })


  for(let i in slots) {
    slots[i].draw()
  }

  for(let i in skills){
    skills[i].draw()
    skills[i].mouseOver()
    skills[i].drawDescription()
    skills[i].cooldownOverlay()
  }

}

function activateSkill() {
  for(let i in slots) {
    slots[i].toggleSkill()
  }
}



function dragSkills() {
  for(let i in skills){
    if(skills[i].dragged) {
      for(let s in slots){
        if(isInside(slots[s])){
          let x = slots[s].x
          let y = slots[s].y
          if(slots[s].skill){
            let skill = slots[s].skill
            let newSlot = skill.slot
            let oldSlot = skills[i].slot
            newSlot.addSkill(skills[i])
            oldSlot.addSkill(skill)
            skill.dropOnSlot(oldSlot.x, oldSlot.y, oldSlot)
            skills[i].dropOnSlot(newSlot.x, newSlot.y, newSlot)
          }
          else {
            skills[i].slot.removeSkill()
            slots[s].addSkill(skills[i])
            skills[i].dropOnSlot(x, y, slots[s])
          }
        } else {
          skills[i].drop()
        }
      }
    }
  }
}


// CRAFT YOUR OWN SKILLS WITH THE MOUSE TRACKING
// HAVE ITEMS THAT GIVE SKILLS WHICH AREN'T FOUND IN SKILL TREE
// MINES
// EXPANDING DOOM RATIO OF RAMMER INCREASES // RAMMER'S GRAVITY PULLS ENEMIES TOWARDS HIM
// ARTISAN, ILLUSIONIST,

// REGENERATION AURA

// +7 ITEMS CHANGE HUE

// SHIELD HAS LEVELS AND SOAKS UP DAMAGE

// IKON KODEX, DISPLAY XP NEXT LVL THIS LVL, ADD IKON ARMOR DISPLAY

// MAKES THE DISCHARGER SHOOT LIKE A MACHINE GUN.

// SHADOW AND LIGHT, TWO IKONS THAT SUPPORT YOU, AND YOU CAN EQUIP THEM

// FEATS LIKE SNIPER MODE YOU CAN'T SHOOT ALL THE TIME BUT WHEN YOU SHOOT DEALS 3* DAMAGE AND IT'S FASTER