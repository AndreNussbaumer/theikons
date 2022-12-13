// Healthbar

function healthBar(x, y, width, height, health, max_health) {
  if(health >= max_health){
    health = max_health
  }
  if(health <= 0){
    health = 0
  }
  ctx.fillStyle = '#000'
  ctx.fillRect(x,y,width,height)
  let colorNumber = Math.round((1-(health/max_health))*0xff)*0x10000+Math.round((health/max_health)*0xff)*0x100
  let colorString = colorNumber.toString(16)
  if(colorNumber >= 0x100000){
    ctx.fillStyle = '#'+colorString
  } else if(colorNumber << 0x100000 && colorNumber >= 0x10000){
    ctx.fillStyle = '#0'+colorString
  } else if(colorNumber<< 0x10000){
    ctx.fillStyle = '#00'+colorString
  }
  ctx.fillRect(x, y,(health/max_health)*(width),height)
}



// Helpers

function getDistance(pt1, pt2) {
  return Math.sqrt(Math.pow(pt1.pos.x - pt2.pos.x, 2) + Math.pow(pt1.pos.y - pt2.pos.y, 2))
}

function getDistanceItem(pt1, pt2) {
  return Math.sqrt(Math.pow(pt1.pos.x - pt2.x, 2) + Math.pow(pt1.pos.y - pt2.y, 2))
}

function isInside(rect) {
  let pos = { x: mouseX, y: mouseY }
  return pos.x > rect.x && pos.x < rect.x + rect.img.width && pos.y < rect.y + rect.img.height && pos.y > rect.y
}

function isInsideCamera(rect) {
  let pos = { x: mouseX, y: mouseY }
  return pos.x + MainCamera.pos.x > rect.x && pos.x + MainCamera.pos.x < rect.x + rect.img.width && pos.y + MainCamera.pos.y < rect.y + rect.img.height && pos.y + MainCamera.pos.y > rect.y
}

function isInsideItem(rect) {
  let pos = { x: mouseX, y: mouseY }
  return pos.x > rect.pos.x && pos.x < rect.pos.x + rect.image.width && pos.y < rect.pos.y + rect.image.height && pos.y > rect.pos.y
}

function isInsideSlot(rect) {
  let pos = { x: mouseX, y: mouseY }
  return pos.x > rect.x && pos.x < rect.x + rect.bg.width && pos.y < rect.y + rect.bg.height && pos.y > rect.y
}

function isInsideBox(rect) {
  let pos = { x: mouseX, y: mouseY }
  return pos.x > rect.closeX && pos.x < rect.closeX + 20 && pos.y < rect.closeY + 20 && pos.y > rect.closeY
}

function clickInside(rect) {
  let pos = { x: clickX, y: clickY }
  return pos.x > rect.x && pos.x < rect.x + rect.img.width && pos.y < rect.y + rect.img.height && pos.y > rect.y
}

function clickInsideItem(rect) {
  let pos = { x: clickX, y: clickY }
  return pos.x > rect.pos.x && pos.x < rect.pos.x + rect.image.width && pos.y < rect.pos.y + rect.image.height && pos.y > rect.pos.y
}

function clickInsideBox(rect) {
  let pos = { x: clickX, y: clickY }
  return pos.x > rect.closeX && pos.x < rect.closeX + 20 && pos.y < rect.closeY + 20 && pos.y > rect.closeY
}

function drawX(x, y) {
  ctx.beginPath();
  ctx.moveTo(x - 5, y - 5);
  ctx.lineTo(x + 5, y + 5);
  ctx.moveTo(x + 5, y - 5);
  ctx.lineTo(x - 5, y + 5);
  ctx.stroke();
}

function box(x, y, width, height, opacity) {
  ctx.save()
  ctx.fillStyle = 'rgba(0, 0, 0,' + opacity + ')'
  ctx.beginPath()
  ctx.rect(x, y, width, height)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 0.6
  ctx.stroke()
  ctx.fillRect(x, y, width, height)
  ctx.closePath()
  ctx.restore()
}

/*
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
*/

function formulaLvl(level) {
  let exponent = 1.5
  let baseXP = 1000
  return (Math.floor(baseXP * (level * exponent)))
}

// random number

function randomInt(max) {
  return Math.floor(Math.random() * max)
}

function randomIntMinMax (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// formula for hero's experience

function xpBar(x, y, width, height, xp, max_xp) {

  ctx.fillStyle = '#000'
  ctx.fillRect(x,y,width,height)
  ctx.fillRect(x, y,(health/max_health)*(width),height)

}

function experience(l) {
 a=0
  for(x = 1 ; x < l ; x++) {
    a += Math.floor(x + 300 * Math.pow(2, (x / 7)))
  }
 return Math.floor(a/4)
}

// formula for enemies experience

function experienceEnemy(l) {
 a=0
  for(x = 1 ; x < l ; x++) {
    a += Math.floor(x + 300 * Math.pow(2, (x / 7)))
  }
 return Math.floor(a/25);
}

for(l = 1 ; l < 20 ; l++) {
  let j = l + 1
  console.log(
    'Level', l, ': ',  experience(l),
    'Difference', j, ': ',  experience(j) - experience(l)
  )
}

const itemTypes = [
  'Bottom Armor',
  'Upper Armor',
  'Center Armor',
]

/*
'Visor',
'Laser'
*/

const itemLevels = [
  'Common',
  'Uncommon',
  'Rare',
  'Mythical'
]

const dmgTypes = [
  'Acid',
  'Fire',
  'Ice',
  'Electric',
  'Light',
]

function generateArmor(x, y, lvl) {

  let proprietyRoll

  let magicProprietyRoll
  let dmgResistance

  let itemType = itemTypes[randomInt(itemTypes.length)]
  let elementalResistance = dmgTypes[randomInt(dmgTypes.length)]

  let itemRoll = randomInt(100)
  let itemEnhancement = randomInt(10)

  if(itemRoll < 3){

    let rarity = 'Mythical'

    if(lvl < 5){

      proprietyRoll = randomIntMinMax(7, 10)
      magicProprietyRoll = randomIntMinMax(1, 2)
      dmgResistance = randomIntMinMax(1, 10)

    } else if(lvl < 10){

      proprietyRoll = randomIntMinMax(10, 15)
      magicProprietyRoll = randomIntMinMax(2, 4)
      dmgResistance = randomIntMinMax(10, 20)

    } else if(lvl < 20){

      proprietyRoll = randomIntMinMax(15, 30)
      magicProprietyRoll = randomIntMinMax(4, 8)
      dmgResistance = randomIntMinMax(20, 40)

    } else if(lvl < 30){

      proprietyRoll = randomIntMinMax(30, 50)
      magicProprietyRoll = randomIntMinMax(8, 16)
      dmgResistance = randomIntMinMax(40, 80)

    }

    let eleResistance = elementalResistance + ' ' + dmgResistance

    console.log(eleResistance)
    console.log(rarity)

    if(itemType == 'Bottom Armor'){
      new BottomArmor(x, y, proprietyRoll, eleResistance, rarity, true, greenBottom, 4, true, lvl)
    } else if(itemType == 'Upper Armor'){
      new UpperArmor(x, y, proprietyRoll, eleResistance, rarity, true, greenTop, 4, true, lvl)
    } else if(itemType == 'Center Armor'){
      new CenterArmor(x, y, proprietyRoll, eleResistance, rarity, true, centerArmorGreen, 4, true, lvl)
    }

  } else if(itemRoll < 10) {

    let rarity = 'Rare'

    if(lvl < 5){

      proprietyRoll = randomIntMinMax(4, 8)
      magicProprietyRoll = randomIntMinMax(1, 2)

    } else if(lvl < 10){

      proprietyRoll = randomIntMinMax(8, 16)
      magicProprietyRoll = randomIntMinMax(2, 4)
      dmgResistance = randomIntMinMax(1, 5)

    } else if(lvl < 20){

      proprietyRoll = randomIntMinMax(16, 32)
      magicProprietyRoll = randomIntMinMax(4, 8)
      dmgResistance = randomIntMinMax(5, 10)

    } else if(lvl < 30){

      proprietyRoll = randomIntMinMax(32, 64)
      magicProprietyRoll = randomIntMinMax(8, 16)
      dmgResistance = randomIntMinMax(10, 20)

    }

    let eleResistance = elementalResistance + ' ' + dmgResistance
    console.log(eleResistance)
    console.log(rarity)

    if(itemType == 'Bottom Armor'){
      if(dmgResistance > 0){
        new BottomArmor(x, y, proprietyRoll, eleResistance, rarity, true, bottomYellow, 4, true, lvl)
      } else {
        new BottomArmor(x, y, proprietyRoll, 0, rarity, true, bottomYellow, 4, true, lvl)
      }

    } else if(itemType == 'Upper Armor'){
      if(dmgResistance > 0){
        new UpperArmor(x, y, proprietyRoll, eleResistance, rarity, true, yellowTop, 4, true, lvl)
      } else {
        new UpperArmor(x, y, proprietyRoll, 0, rarity, true, yellowTop, 4, true, lvl)
      }

    } else if(itemType == 'Center Armor'){
      if(dmgResistance > 0){
        new CenterArmor(x, y, proprietyRoll, eleResistance, rarity, true, centerArmorYellow, 4, true, lvl)
      } else {
        new CenterArmor(x, y, proprietyRoll, 0, rarity, true, centerArmorYellow, 4, true, lvl)
    }
  }

  } else if(itemRoll < 50) {

    let rarity = 'Uncommon'

    if(lvl < 5){

      proprietyRoll = randomIntMinMax(2, 4)
      magicProprietyRoll = randomIntMinMax(1, 2)

    } else if(lvl < 10){

      proprietyRoll = randomIntMinMax(4, 8)
      magicProprietyRoll = randomIntMinMax(2, 4)

    } else if(lvl < 20){

      proprietyRoll = randomIntMinMax(8, 16)
      magicProprietyRoll = randomIntMinMax(4, 8)

    } else if(lvl < 30){

      proprietyRoll = randomIntMinMax(16, 32)
      magicProprietyRoll = randomIntMinMax(8, 16)

    }

    if(itemType == 'Bottom Armor'){
      new BottomArmor(x, y, proprietyRoll, 0, rarity, true, bottomMedium, 4, true, lvl)
    } else if(itemType == 'Upper Armor'){
      new UpperArmor(x, y, proprietyRoll, 0, rarity, true, topMedium, 4, true, lvl)
    } else if(itemType == 'Center Armor'){
      new CenterArmor(x, y, proprietyRoll, 0, rarity, true, centerArmorMetal, 4, true, lvl)
    }

    console.log(rarity)

  } else if(itemRoll < 100){

    let rarity = 'Common'

    if(lvl < 5){

      proprietyRoll = randomIntMinMax(1, 2)

    } else if(lvl < 10){

      proprietyRoll = randomIntMinMax(2, 4)

    } else if(lvl < 20){

      proprietyRoll = randomIntMinMax(4, 8)

    } else if(lvl < 30){

      proprietyRoll = randomIntMinMax(8, 16)

    }

    if(itemType == 'Bottom Armor'){
      new BottomArmor(x, y, proprietyRoll, 0, rarity, true, dentedBottom, 4, true, lvl)
    } else if(itemType == 'Upper Armor'){
      new UpperArmor(x, y, proprietyRoll, 0, rarity, true, dentedUp, 4, true, lvl)
    } else if(itemType == 'Center Armor'){
      new CenterArmor(x, y, proprietyRoll, 0, rarity, true, centerArmor, 4, true, lvl)
    }

    console.log(rarity)

  }
}



function drawFlowerOfLife() {

  let flowerX = [300, 300, 370, 400, 370, 300, 230, 200, 230]
  let flowerY = [300, 200, 230, 300, 370, 400, 370, 300, 230]

  for(let i = 0; i < 9; i++){

    ctx.strokeStyle = 'white'
    ctx.lineWidth = 1.6
    ctx.beginPath()
    ctx.arc(flowerX[i], flowerY[i], 100, 0 * Math.PI, 2 * Math.PI)
    ctx.stroke()

  }

}

// SACRED GEOMETRY FOR FEATS

/*

let number = 0
let scale = 10

function sacredGeo() {

  let sacredAngle = number * 9
  let radius = 50
  let posX = radius * Math.sin(sacredAngle) + canvas.width/2
  let posY = radius * Math.cos(sacredAngle) + canvas.height/2

  ctx.save()
  ctx.fillStyle = 'red'
  ctx.strokeStyle = 'blue'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.arc(posX, posY, 10, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()
  ctx.restore()

  number++
  sacredGeo1()

}

function sacredGeo1() {

  let sacredAngle = number * 11
  let radius = 40
  let posX = radius * Math.sin(sacredAngle) + canvas.width/2
  let posY = radius * Math.cos(sacredAngle) + canvas.height/2

  ctx.save()
  ctx.fillStyle = 'red'
  ctx.strokeStyle = 'blue'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.arc(posX, posY, 5, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()
  ctx.restore()

  number++

}
*/
// Function for collision detection

function col_det_bb(m1, m2){
    if(m1.r + m2.r >= m2.pos.subtr(m1.pos).mag()){
        return true
    } else {
        return false
    }
}

// Collision resolution

function pen_res_bb(m1, m2){
    let dist = m1.pos.subtr(m2.pos)
    let pen_depth = m1.r + m2.r - dist.mag()
    let pen_res = dist.unit().mult(pen_depth /2)
    m1.pos = m1.pos.add(pen_res)
    m2.pos = m2.pos.add(pen_res.mult(-1))
}

// Calculates the ikons new velocity after the collision

function col_res_bb(m1, m2){

  // Normal collision vector
  let normal = m1.pos.subtr(m2.pos).unit()
  // Relative velocity vector
  let relVel = m1.vel.subtr(m2.vel)
  // Separating velocity
  let sepVel = Vector.dot(relVel, normal)
  // Projection value after the collision
  let new_sepVel = -sepVel * Math.min(m1.elasticity, m2.elasticity)
  let vsep_diff = new_sepVel - sepVel

  // Dividing the impulse value in the ration of the inverse masses
  // Adding the impulse vector to the original velocity vectors according to their inverse mass
  let impulse = vsep_diff / (m1.inv_m + m2.inv_m)
  let impulseVec = normal.mult(impulse)

  // Adding the separating velocity vector to the original vel. vector
  m1.vel = m1.vel.add(impulseVec.mult(m1.inv_m))
  // Adding its opposite to the other marbles original vel. vector
  m2.vel = m2.vel.add(impulseVec.mult(-m2.inv_m))
}

// Returns with the closest point on a line segment to a given point

function closestPointMO(m1, o1) {
    let ikonToObstacleStart = o1.start.subtr(m1.pos);
    if(Vector.dot(o1.obstacleUnit(), ikonToObstacleStart) > 0){
        return o1.start;
    }

    let obstacleEndToIkon = m1.pos.subtr(o1.end);
    if(Vector.dot(o1.obstacleUnit(), obstacleEndToIkon) > 0){
        return o1.end;
    }

    let closestDist = Vector.dot(o1.obstacleUnit(), ikonToObstacleStart)
    let closestVect = o1.obstacleUnit().mult(closestDist)
    return o1.start.subtr(closestVect)
}

// Collision detection between Ikon and wall
function col_det_mo(m1, o1){
    let ikonToClosest = closestPointMO(m1, o1).subtr(m1.pos)
    if (ikonToClosest.mag() <= m1.r){
        return true
    }
}

// Collision resolution between Ikon and obstacle
function pen_res_mo(m1, o1){
    let penVect = m1.pos.subtr(closestPointMO(m1, o1))
    m1.pos = m1.pos.add(penVect.unit().mult(m1.r-penVect.mag()))
}

// Collision response between the Ikon and wall
function col_res_mo(m1, o1){
    let normal = m1.pos.subtr(closestPointMO(m1, o1)).unit()
    let sepVel = Vector.dot(m1.vel, normal)
    let new_sepVel = -sepVel * m1.elasticity
    let vsep_diff = sepVel - new_sepVel
    m1.vel = m1.vel.add(normal.mult(-vsep_diff))
}

