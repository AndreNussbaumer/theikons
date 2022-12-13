let itemslots = []
let gold = []

let shadowCount = 20
let shadowTrigger = false


class Box {

  constructor(x, y, width, height, opacity) {

    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.opacity = opacity
    this.display = true
    this.closeX = x + width - 30
    this.closeY = y + 10

  }

  draw() {

    if(this.display){
      ctx.save()
      ctx.fillStyle = 'rgba(0, 0, 0,' + this.opacity + ')'
      ctx.beginPath()
      ctx.rect(this.x, this.y, this.width, this.height)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 0.6
      ctx.stroke()
      ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.closePath()
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.fillRect(this.closeX, this.closeY, 20, 20)
      ctx.fillStyle = 'white'

      drawX(this.x + this.width - 20, this.y + 20)

      if(isInsideBox(this)){
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
        ctx.fillRect(this.closeX, this.closeY, 20, 20)
      }
      if(clickInsideBox(this)){
        this.display = false
      }

      ctx.restore()
    }
  }
}

class InvBox {

  constructor() {
    this.display = false
  }

  draw() {

    if(this.display){

      box(250, 200, 1350, 450, 0.8)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 0.6
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.fillRect(1600 - 30, 200 + 10, 20, 20)
      ctx.fillStyle = 'white'
      drawX(1600 - 20, 200 + 20)

      if(mouseX > 1600 - 30 && mouseX < 1600 && mouseY > 200 && mouseY < 200 + 40) {
        ctx.save()
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
        ctx.fillRect(1600 - 30, 200 + 10, 20, 20)
        ctx.restore()
      } else {

      }

      if(clickX > 1600 - 30 && clickX < 1600 && clickY > 200 && clickY < 200 + 40) {
        displayInv()
      } else {

      }

      ctx.drawImage(centerJunkFront, 845, 360)

      if(itemslots[18].item){
        if(itemslots[18].type == itemslots[18].item.type){
          ctx.drawImage(itemslots[18].item.frontView, 845, 360)
        }
      }

      ctx.drawImage(visorOrange, 895, 410, 60, 60)

      if(itemslots[19].item){
        if(itemslots[19].type == itemslots[19].item.type){
          ctx.drawImage(itemslots[19].item.img, 895, 410, 60, 60)
        }
      }

      ctx.drawImage(bottomJunkArmor, 800, 450)

      if(itemslots[16].item){
        if(itemslots[16].type == itemslots[16].item.type){
        ctx.drawImage(itemslots[16].item.frontView, 800, 450)
        }
      }

      ctx.drawImage(topJunkFront, 800, 300)

      if(itemslots[17].item){
        if(itemslots[17].type == itemslots[17].item.type){
        ctx.drawImage(itemslots[17].item.frontView, 800, 300)
        }
      }


      ctx.save()
      ctx.font = "bold 22px arial"
      ctx.fillText('LVL ' + Ikon1.lvl, 275, 240)
      ctx.font = "12px arial"
      ctx.fillText('XP ' + Ikon1.xp + ' // ' + experience(Ikon1.lvl), 275, 260)
      ctx.drawImage(coin, 1540, 613)
      ctx.font = "14px arial"
      ctx.fillText(Ikon1.gold, 1560, 625)
      ctx.fillText('Armor: ', 1300, 250)
      ctx.fillText(Math.round(Ikon1.ac * 10) / 10, 1350, 250)
      ctx.fillText('Acceleration: ', 1300, 270)
      ctx.fillText(Ikon1.acceleration, 1390, 270)
      ctx.fillText('Power: ', 1300, 290)
      ctx.fillText(Ikon1.power, 1350, 290)
      ctx.fillText('Attack Speed: ', 1300, 310)
      ctx.fillText(Ikon1.AttSpeed, 1395, 310)
      ctx.restore()
    }
  }
}

let InvUi = new InvBox()

class ItemSlots {

  constructor(x, y, w, h, img, n){
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.display = false
    this.over = false
    this.img = img
    this.item = null
    this.number = n
    this.toggled = false
    this.available = null
    this.type = null
  }

  draw(){

    if(this.display){

      ctx.save()
      ctx.drawImage(this.img, this.x, this.y, this.img.width, this.img.height)
      ctx.restore()

      if(isInside(this)){
        ctx.save()
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
        ctx.fillRect(this.x, this.y, this.img.width, this.img.height)
        ctx.restore()
      }

      if(this.item){
        if(this.type){
          if(this.type !== this.item.type){
            ctx.save()
            ctx.fillStyle = 'rgba(255, 0, 0, 0.4)'
            ctx.fillRect(this.x, this.y, this.width, this.height)
            ctx.restore()
          }
        }
      }
    }
  }

  addItem(item) {
    this.item = item
  }

  removeItem(item) {
    this.item = null
  }

  toggleSkill() {

  }

  attributingSlots() {

    itemslots[16].type = 'Bottom Armor'
    itemslots[17].type = 'Upper Armor'
    itemslots[18].type = 'Center Armor'
    itemslots[19].type = 'Visor'
    itemslots[20].type = 'Laser'

    if(itemslots[25].item){

      itemslots[25].item.over = false
      itemslots[25].item.x = Ikon1.pos.x - 40
      itemslots[25].item.y = Ikon1.pos.y - 40
      itemslots[25].item.ground = true
      itemslots[25].item = null

    }
  }


  availability() {

    if(this.item !== null){
      this.available = false
    } else {
      this.available = true
    }
   }
  }

class Items {

  constructor(){
    this.id = items.length
    items[items.length] = this
    return this
  }

  mouseOver() {

    if(isInside(this)) {
     this.over = true
    } else {
     this.over = false
    }

  }

  mouseOverGround() {

    if(isInsideCamera(this)) {
     this.over = true
    } else {
     this.over = false
    }
  }

  drop() {

    this.dragged = false
    this.x = this.slot.x
    this.y = this.slot.y
  }

  dropOnSlot(x, y, slot) {
    this.dragged = false
    this.slot = slot
    this.x = x
    this.y = y
  }

  positioning() {

    // REFACTOR IN FOR EACH AND ADD A PROPRIETIES FUNCTION

    if(this.slot.number == 16 && !this.dragged){
      this.x = 440
      this.y = 465
    }

    if(this.slot.number == 17 && !this.dragged){
      this.x = 440
      this.y = 340
    }

    if(this.slot.number == 18 && !this.dragged){
      this.x = 438
      this.y = 402
    }

    if(this.slot.number == 19 && !this.dragged){
      this.x = 387
      this.y = 403
    }

    if(this.slot.number == 20 && !this.dragged){
      this.x = 492
      this.y = 403
    }

  }
}

class UpperArmor extends Items {

  constructor(x, y, ac, extras, rarity, d, img, s, g, level){

    super()

    this.x = x
    this.y = y
    this.ac = ac
    this.proprieties = extras
    this.rarity = rarity
    this.display = d
    this.slot = s
    this.ground = g
    this.level = level
    this.width = 25
    this.height = 20
    this.name = null
    this.img = img
    this.dragged = false
    this.clicked = false
    this.type = 'Upper Armor'
    this.color = null
    this.top = null
    this.over = false
    this.frontView = null
    this.toRemove = false

  }

  draw() {

    ctx.save()

    if(this.img){
      this.img.width = 25
      this.img.height = 20
    }

    if(this.rarity == 'Mythical'){
      this.color = 'orange'
    } else if(this.rarity == 'Rare'){
      this.color = 'rgba(130, 0, 255, 1)'
    } else if(this.rarity == 'Uncommon'){
      this.color = 'rgba(8, 243, 255, 1)'
    } else if(this.rarity == 'Common'){
      this.color = 'white'
    }

    if(this.img == greenTop){
      this.top = greenTopView
      this.frontView = topGreenFront
    }

    if(this.img == yellowTop){
      this.top = yellowTopView
      this.frontView = topYellowFront
    }

    if(this.img == topMedium){
      this.top = topMediumPlay
      this.frontView = topMediumFront
    }

    if(this.img == dentedUp){
      this.top = dentedUpPlay
      this.frontView = topDentedFront
    }

    if(this.img == ikon){
      this.frontView = topJunkFront
    }

    ctx.drawImage(this.img, this.x + 2, this.y + 6, 25, 15)
    ctx.restore()
  }
}

class BottomArmor extends Items {

  constructor(x, y, ac, extras, rarity, d, img, s, g, level){

    super()
    this.x = x
    this.y = y
    this.height = 25
    this.width = 20
    this.name = name
    this.display = d
    this.dragged = false
    this.clicked = false
    this.img = img
    this.level = level
    this.type = 'Bottom Armor'
    this.ac = ac
    this.color = null
    this.proprieties = extras
    this.slot = s
    this.over = false
    this.toRemove = false
    this.ground = g
    this.rarity = rarity
    this.frontView = null
  }

  draw() {

    ctx.save()

    if(this.rarity == 'Mythical'){
      this.color = 'orange'
    } else if(this.rarity == 'Rare'){
      this.color = 'rgba(130, 0, 255, 1)'
    } else if(this.rarity == 'Uncommon'){
      this.color = 'rgba(8, 243, 255, 1)'
    } else if(this.rarity == 'Common'){
      this.color = 'white'
    }


    if(this.img == greenBottom){
      this.frontView = bottomGreenFront
    }

    if(this.img == bottomYellow){
      this.frontView = bottomYellowFront
    }

    if(this.img == bottomMedium){
      this.frontView = bottomMediumFront
    }

    if(this.img == dentedBottom){
      this.frontView = bottomDentedFront
    }

    if(this.img == rustyBottom){
      this.frontView = bottomRustyFront
    }

    if(this.img == ikon){
      this.frontView = bottomJunkArmor
    }

    ctx.drawImage(this.img, this.x + 2, this.y + 6, 25, 15)

    ctx.restore()
  }

}

class CenterArmor extends Items {

  constructor(x, y, ac, extras, rarity, d, img, s, g, level){

    super()
    this.x = x
    this.y = y
    this.height = 20
    this.width = 20
    this.name = null
    this.display = d
    this.dragged = false
    this.clicked = false
    this.img = img
    this.level = level
    this.type = 'Center Armor'
    this.ac = ac
    this.proprieties = extras
    this.color = null
    this.model = null
    this.slot = s
    this.over = false
    this.toRemove = false
    this.ground = g
    this.rarity = rarity
  }

  draw() {

    ctx.save()

    if(this.rarity == 'Mythical'){
      this.color = 'orange'
    } else if(this.rarity == 'Rare'){
      this.color = 'rgba(130, 0, 255, 1)'
    } else if(this.rarity == 'Uncommon'){
      this.color = 'rgba(8, 243, 255, 1)'
    } else if(this.rarity == 'Common'){
      this.color = 'white'
    }

    // FLICKERING SHADOW

    if(this.ground){

      if(this.rarity == 'Mythical'){

        ctx.save()
        ctx.shadowColor = this.color
        ctx.shadowBlur = shadowCount
        ctx.restore()

        particles.push(new ItemQuality(this.x - 10, this.y - 10, this.color, this.img.width))
        if(!shadowTrigger){
          if(shadowCount <= 20){
            shadowCount -= 0.5
            if(shadowCount <= 0){
              shadowTrigger = true
            }
          }
        }

        if(shadowTrigger){
          shadowCount += 0.5
          if(shadowCount >= 20){
            shadowTrigger = false
          }
        }
      }
    }

    ctx.drawImage(this.img, this.x + 5, this.y + 5, 20, 20)

    if(this.img == centerArmorGreen){
      this.frontView = centerGreenFront
    }

    if(this.img == centerArmorMetal){
      this.frontView = centerDentedFront
    }

    if(this.img == centerArmorRusty){
      this.frontView = centerPlatinumFront
    }

    if(this.img == centerArmor){
      this.frontView = centerDentedFront
    }

    if(this.img == centerArmorYellow){
      this.frontView = centerYellowFront
    }

    if(this.img == ikon){
      this.frontView = centerJunkFront
    }


    ctx.restore()
  }

}

class Visor extends Items {

  constructor(x, y, h, w, type, d, img, s, g, color){

    super()

    this.x = x
    this.y = y
    this.height = h
    this.width = w
    this.name = name
    this.display = d
    this.dragged = false
    this.clicked = false
    this.img = img
    this.proprieties = 0
    this.type = type
    this.color = color
    this.slot = s
    this.over = false
    this.toRemove = false
    this.ground = g
  }

  draw() {

    ctx.drawImage(this.img, this.x, this.y, 30, 30)

  }


}

class Laser extends Items {

  constructor(x, y, h, w, type, d, img, s, g, power){

    super()

    this.x = x
    this.y = y
    this.height = h
    this.width = w
    this.name = name
    this.display = d
    this.dragged = false
    this.clicked = false
    this.img = weakLaser

    this.level = null
    this.type = type

    this.ac = null
    this.color = null
    this.model = null
    this.top = null

    this.slot = s
    this.over = false
    this.toRemove = false
    this.ground = g
    this.power = power
    this.AttSpeed = null
    this.proprieties = 0
    this.corrosive = false
  }

  draw() {

    ctx.save()

    this.AttSpeed = this.power

    if(this.power <= 5) {
      this.model = 'Lesser'
      this.color = 'white'
      this.img = weakLaser
      ctx.fillStyle = this.color
      ctx.drawImage(weakLaser, this.x, this.y, 30, 30)
    } else if(this.power <= 8) {
      this.model = 'Medium'
      this.color = 'yellow'
      this.img = mediumLaser
      ctx.fillStyle = this.color
      ctx.drawImage(mediumLaser, this.x, this.y, 30, 30)
    } else {
      this.model = 'Superior'
      this.img = magicalLaser
      this.color = 'orange'
      ctx.fillStyle = this.color
      ctx.drawImage(magicalLaser, this.x, this.y, 30, 30)
    }
    ctx.restore()
  }

}

class Gold {

  constructor(x, y, qt){
    this.x = x
    this.y = y
    this.quantity = qt
    this.over = false
    this.type = 'Gold'
    this.img = coin
    this.toRemove = false
    this.color = 'Yellow'
    gold.push(this)
  }

  mouseOver() {
    if(isInsideCamera(this)) {
     this.over = true
    } else {
     this.over = false
    }
  }

  draw() {
    ctx.save()
    ctx.drawImage(this.img, this.x, this.y)
    ctx.restore()
  }

  drawDescription() {
    if(this.over) {
      ctx.save()
      ctx.fillStyle = this.color
      ctx.fillText(this.quantity + ' ' + this.type, this.x - 17, this.y - 20)
      ctx.restore()
    }
  }
}

for(let i = 0; i < 8; i++) {

  // inventory

  itemslots[i] = new ItemSlots(300 + (40 * i), 600, 50, 50, invSlot, 0 + i)
  itemslots[i + 8] = new ItemSlots(300 + (40 * i), 550, 50, 50, invSlot, 8 + i)

  // equipment slots

  itemslots[16] = new ItemSlots(420, 455, 69, 47, armorSlot, 16)
  itemslots[17] = new ItemSlots(420, 330, 69, 47, armorSlot, 17)
  itemslots[18] = new ItemSlots(437, 400, 33, 33, intArmor, 18)
  itemslots[19] = new ItemSlots(380, 400, 44, 33, diskSlot, 19)
  itemslots[20] = new ItemSlots(485, 400, 44, 33, diskSlot, 20)
  itemslots[25] = new ItemSlots(580, 250, 33, 33, intArmor, 25)
}



function displayInv() {

  if(!InvUi.display){
    InvUi.display = true
  } else {
    InvUi.display = false
  }

  itemslots.forEach((item) => {
    if(!item.display){
      item.display = true
    } else {
      item.display = false
    }
  })

  items.forEach((item) => {
    if(!item.display){
      item.display = true
    } else {
      item.display = false
    }
  })
}


function mainInventory() {

  InvUi.draw()

  for(let i in itemslots) {
    itemslots[i].draw()
    itemslots[i].availability()
  }

  for(let i in items){
    if(!items[i].ground && items[i].display){
      if(items[i].toRemove){
        items.splice(i, 1)
      } else {
        items[i].positioning()
        items[i].draw()
        items[i].mouseOver()
        }
      }
    }
  }

function activateItem() {
  for(let i in itemslots) {
    itemslots[i].toggleSkill()
    itemslots[i].attributingSlots()
  }
}

function dragItems() {

  for(let i in items){
    if(items[i].dragged && !items[i].ground) {
      for(let s in itemslots){
        if(isInside(itemslots[s])){
          let x = itemslots[s].x
          let y = itemslots[s].y
          if(itemslots[s].item){
            let item = itemslots[s].item
            let newItemSlot = item.slot
            let oldItemSlot = items[i].slot
            newItemSlot.addItem(items[i])
            oldItemSlot.addItem(item)
            item.dropOnSlot(oldItemSlot.x, oldItemSlot.y, oldItemSlot)
            items[i].dropOnSlot(newItemSlot.x, newItemSlot.y, newItemSlot)
          } else {
            items[i].slot.removeItem()
            itemslots[s].addItem(items[i])
            items[i].dropOnSlot(x, y, itemslots[s])
          }
        } else {
          items[i].drop()
        }
      }
    }
  }
}


function itemUpdate() {
  for(let i in items){
    if(items[i].ground){
      if(items[i].toRemove){
        items.splice(i, 1)
      } else {
        items[i].draw()
        items[i].mouseOverGround()
      }
    }
  }
}

function goldUpdate() {
  for(let i in gold){
    if(gold[i].toRemove){
      gold.splice(i, 1)
    } else {
      gold[i].draw()
      gold[i].mouseOver()
      gold[i].drawDescription()
    }
  }
}

function drawDescriptionInv() {

  items.forEach((item) => {
    if(!item.ground && item.display && item.over){
      ctx.save()
      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.moveTo(item.x + 45, item.y)
      ctx.lineTo(item.x + 45, item.y - 30)
      ctx.lineWidth = 0.6

      ctx.fillStyle = item.color
      if(item.proprieties !== 0){
        box(item.x - 14, item.y - 40, 120, 50, 0.5)
        ctx.textAlign = "center"
        ctx.fillText(item.type, item.x + 45, item.y - 20, 200)
        ctx.font = "small-caps 10px arial"
        ctx.fillStyle ='white'
        ctx.fillText(item.proprieties + '%', item.x + 46, item.y, 200)
      } else if(item.type == 'Visor'){
        box(item.x - 10, item.y - 40, 60, 30, 0.5)
        ctx.fillText(item.type, item.x, item.y - 20, 200)
      } else {
        box(item.x - 10, item.y - 40, 120, 30, 0.5)
        ctx.fillText(item.type, item.x, item.y - 20, 200)
      }
      ctx.restore()
    }
  })

}

function drawDescriptionGround() {

  items.forEach((item) => {
    if(item.ground && item.over){
      if(item.type == 'Visor' || item.type == 'Laser'){
        ctx.save()
        box(item.x - 10, item.y - 40, 60, 30, 0.5)
        ctx.fillStyle = item.color
        ctx.fillText(item.type, item.x, item.y - 20, 200)
        ctx.restore()
      } else {
        ctx.save()
        box(item.x - 10, item.y - 40, 120, 30, 0.5)
        ctx.fillStyle = item.color
        ctx.fillText(item.type, item.x, item.y - 20, 200)
        ctx.restore()
      }
    }
  })
}

