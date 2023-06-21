firstTipvisibility = true
secondTipVisibility = false
thirdTipVisibility = false
let firstWave = true
let firstWaveCompleted = false
let secondTipDone = false
let thirdTipDone = false

let iconX = {
  x:1265,
  y:375,
  width:20,
  height:20
}

function demoLvl() {

  if(firstTipvisibility){
    firstTip()
  } else {
  }


  if(!firstTipvisibility && firstWave) {
    let Enemy1 = new Dummy(1300,1100)
    let Enemy2 = new Dummy(1400,1350)
    let Enemy3 = new Dummy(1100,1300)
    let Enemy4 = new Dummy(1000,1200)
    let Enemy5 = new Dummy(1200,1000)
    firstWave = false
  }

  if(enemies == 0 && !firstWave && !secondTipVisibility){
    secondTip()
  }

  if(secondTipVisibility && !secondTipDone){
    let Money = new Gold(1200,1000, 30)
    let Item5 = new Laser(1355, 1055, 30, 30, 'Laser', true, null, 4, true, 10)
    secondTipDone = true
  }

  if(secondTipDone && !thirdTipVisibility && !thirdTipDone){

    if(items){

      let found = items.find(item => item.ground)

      if(!found && itemslots[20].item){
        displayInv()
        thirdTipDone = true
      }
    }
  }

  if(thirdTipDone && !thirdTipVisibility) {
    thirdTip()
  }
}



function firstTip() {

  ctx.save()
  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
  ctx.fillRect(0, 0, 1920, 915)
  ctx.beginPath()
  ctx.rect(canvas.width/2 - 345, 360, 690, 130)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 0.6
  ctx.stroke()
  ctx.fillRect(canvas.width/2 - 345, 360, 690, 130)
  ctx.closePath()
  ctx.fillStyle = 'white'
  ctx.fillText("Hello there and welcome to the tutorial! We will be landing in Valaart soon!", canvas.width/2 - 320, 400)
  ctx.fillText("We must prepare you for the battles ahead.", canvas.width/2 - 320, 420)
  ctx.fillText("Theres couple of malfunctioning Ikons in this room. Use your mouse to shoot lasers.", canvas.width/2 - 320, 440)
  ctx.fillText("You can also ram into them. Use W,A,S,D to move and (Space) so you won't get damaged.", canvas.width/2 - 320, 460)
  drawX(1275, 385)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
  ctx.fillRect(iconX.x,iconX.y,iconX.width,iconX.height)

  if(clickY > 375 && clickY < 375 + 20 && clickX > 1265 && clickX < 1265 + 20) {
    firstTipvisibility = false
  } else {
  }

  if(mouseY > 375 && mouseY < 375 + 20 && mouseX > 1265 && mouseX < 1265 + 20){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.fillRect(iconX.x,iconX.y,iconX.width,iconX.height);
  }

  ctx.restore()
  ctx.drawImage(sprites.dest, 1260, 500, 241, 100)
}

function secondTip() {
  ctx.save()
  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
  ctx.fillRect(0, 0, 1920, 915)
  ctx.beginPath()
  ctx.rect(canvas.width/2 - 345, 360, 690, 130)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 0.6
  ctx.stroke()
  ctx.fillRect(canvas.width/2 - 345, 360, 690, 130)
  ctx.closePath()
  ctx.fillStyle = 'white'
  ctx.fillText("The first mission was a success!", canvas.width/2 - 320, 400)
  ctx.fillText("Let's learn how to use the inventory!", canvas.width/2 - 320, 420)
  ctx.fillText("Pick up the items from the ground by passing over them. Click the icon or I.", canvas.width/2 - 320, 440)
  ctx.fillText("Drag the items to the correct slots to equip.", canvas.width/2 - 320, 460)
  drawX(1275, 385)

  if(clickY > 375 && clickY < 375 + 20 && clickX > 1265 && clickX < 1265 + 20) {
    secondTipVisibility = true
  } else {
  }

  if(mouseY > 375 && mouseY < 375 + 20 && mouseX > 1265 && mouseX < 1265 + 20){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.fillRect(iconX.x,iconX.y,iconX.width,iconX.height)
  }
  ctx.restore()
  ctx.drawImage(sprites.dest, 1260, 500, 241, 100)

}

function thirdTip() {

  ctx.save()
  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
  ctx.fillRect(0, 0, 1920, 915)
  ctx.beginPath()
  ctx.rect(canvas.width/2 - 345, 360, 690, 130)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 0.6
  ctx.stroke()
  ctx.fillRect(canvas.width/2 - 345, 360, 690, 130)
  ctx.closePath()
  ctx.fillStyle = 'white'
  ctx.fillText("You now know how to use the Inventory!", canvas.width/2 - 320, 400)
  ctx.fillText("All the basics are covered and you are ready to embark on this wonderful journey!", canvas.width/2 - 320, 420)


  drawX(1275, 385)

  if(clickY > 375 && clickY < 375 + 20 && clickX > 1265 && clickX < 1265 + 20) {
    thirdTipVisibility = true
    missionCompleted()
  } else {
  }

  if(mouseY > 375 && mouseY < 375 + 20 && mouseX > 1265 && mouseX < 1265 + 20){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.fillRect(iconX.x,iconX.y,iconX.width,iconX.height)
  }
  ctx.restore()
  ctx.drawImage(sprites.dest, 1260, 500, 241, 100)

}

let Enemy6 = new Soulless(1600,1300)

function missionCompleted() {

}

