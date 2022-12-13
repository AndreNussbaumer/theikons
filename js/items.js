class ItmDisplay {

  constructor(name, img, color) {
    this.name = name
    this.img = img
    this.color = color
    itemDisplay.push(this)
    this.time = 0
  }

  drawImg(h) {

    box(canvas.width / 2 - 30, canvas.height / 2 + 250 - h, 175, 50, 0.5)
    if(this.name == 'Upper Armor' || this.name == 'Bottom Armor'){
      ctx.drawImage(this.img, canvas.width / 2 - 20, canvas.height / 2 + 265 - h)
    } else if(this.name == 'Gold'){
      ctx.drawImage(this.img, canvas.width / 2 - 10, canvas.height / 2 + 267 - h)
    } else {
      ctx.drawImage(this.img, canvas.width / 2 - 20, canvas.height / 2 + 260 - h)
    }
    ctx.fillStyle = this.color
    ctx.fillText(this.name, canvas.width / 2 + 20, canvas.height / 2 + 280 - h)
  }

  timer() {
    this.time++
  }

}

function displayItems() {
  itemDisplay.forEach((item, i) => {
    item.timer()
    if(item.time > 150){
      itemDisplay.splice(i, 1)
    } else {
      item.drawImg(i * 70)
    }
  })
}




