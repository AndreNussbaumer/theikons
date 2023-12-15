
let LEFT, UP, RIGHT, DOWN, SPACE, EVADELEFT, EVADERIGHT, LEFTCLICK, RIGHTCLICK, SLOTONE, SLOTTWO, SLOTTHREE, SLOTFOUR, SLOTFIVE, SLOTSIX, SLOTSEVEN, SLOTEIGHT

let clickedStats
let clickedInventory
let leftClick
let rightClick
let inv
let char
let leftDown

// MOUSE

let angle = 0

let mouseX = 0
let mouseY = 0

let clickX
let clickY

canvas.addEventListener('mousemove', (event) => {

    mouseX = event.clientX - canvas.offsetLeft
    mouseY = event.clientY - canvas.offsetTop

    angle = new Vector(mouseX, mouseY)


    skills.forEach((skill) => {
      if(skill.dragged) {
        skill.x = mouseX - 25
        skill.y = mouseY - 25
      }
    })

    items.forEach((item) => {
      if(item.dragged) {
        item.x = mouseX - item.img.width/2
        item.y = mouseY - item.img.height/2
      }
    })
})



canvas.addEventListener('click', (e) => {

  clickX = e.clientX - canvas.offsetLeft
  clickY = e.clientY - canvas.offsetTop

  clickXx = e.clientX - canvas.offsetLeft
  clickYy = e.clientY - canvas.offsetTop

  if(clickInside(iconStats)){
    displayInv()
  }

  if(clickInside(iconInv)){
    if(!CharacterMenu.display){
      CharacterMenu.display = true
    } else {
      CharacterMenu.display = false
    }
  }


  if(Ikon1.points){
    for(let i = 0; i < 5; i++) {
      let j = i * 75
        // Leveling up
      if(clickX > 1050 && clickX < 1070 && clickY > 305 + j && clickY < 320 + j) {
        if(i == 0){
          Ikon1.naturalAc += 0.10
          Ikon1.points -= 1
        } else if(i == 1){
          Ikon1.natPhysicalPower += 0.10
          Ikon1.points -= 1
        } else if(i == 2){
          Ikon1.acceleration += 0.01
          Ikon1.points -= 1
        } else if(i == 3){
          Ikon1.naturalPower += 0.01
          Ikon1.points -= 1
        } else if(i == 4){
          Ikon1.natAttSpeed += 0.10
          Ikon1.points -= 1
        }
      }
    }
  }
})

// KEYBOARD

canvas.addEventListener('keydown', (e) => {


    if(e.keyCode === 32){
        SPACE = true
    }

    if(e.keyCode === 65){
        LEFT = true
    }

    if(e.keyCode === 87){
        UP = true
    }

    if(e.keyCode === 68){
        RIGHT = true
    }

    if(e.keyCode === 83){
        DOWN = true
    }

    if(e.keyCode === 32){
        SPACE = true
    }

    if(e.keyCode === 81){
        EVADELEFT = true
    }

    if(e.keyCode === 69){
        EVADERIGHT = true
    }

    if(e.keyCode === 49){
        SLOTONE = true
    }

    if(e.keyCode === 50){
        SLOTTWO = true
    }

})

canvas.addEventListener('keyup', (e) => {

    if(e.keyCode === 32){
        SPACE = false
    }

    if(e.keyCode === 65){
        LEFT = false
    }
    if(e.keyCode === 87){
        UP = false
    }
    if(e.keyCode === 68){
        RIGHT = false
    }
    if(e.keyCode === 83){
        DOWN = false
    }
    if(e.keyCode === 32){
        SPACE = false

    }
    if(e.keyCode === 81){
        EVADELEFT = false

    }
    if(e.keyCode === 69){
        EVADERIGHT = false
    }

    if(e.keyCode === 49){
        SLOTONE = false
    }

    if(e.keyCode === 50){
        SLOTTWO = false
    }

    if(e.keyCode === 73){
        inv = false
    }

    if(e.keyCode === 67){
        char = false
    }


    if(e.keyCode === 80){
      if(!pause){
        pause = true
      } else {
        pause = false
      }
    }

})

canvas.addEventListener('mousedown', function(e) {

  if(e.buttons === 1 ) {
    leftClick = true
    Ikon1.shooting = true
  }

  if(e.button === 2 ) {
    rightClick = true
  }

  for(let i in skills){
    if(isInside(skills[i])) {
      skills[i].dragged = true
    }
  }

  for(let i in items){
    if(InvUi.display) {
      if(isInside(items[i]) && !items[i].ground) {
        items[i].dragged = true
      }
    }
  }
})

canvas.addEventListener('mouseup', function(e) {

  if(e.button === 1 ) {
    leftClick = false
    Ikon1.shooting = false
  }

  if(e.button === 2 ) {
    rightClick = false
    Ikon1.toggled = false
  }

  dragItems()
  dragSkills()

})


canvas.oncontextmenu = function(e) {
   e.preventDefault(); e.stopPropagation();
 }

