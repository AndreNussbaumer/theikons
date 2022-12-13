
class Obstacle {

  constructor(x1, y1, x2, y2){
    this.start = new Vector(x1, y1);
    this.end = new Vector(x2, y2);
    obstacles.push(this);
  }

  drawObstacle(){
    ctx.beginPath()
    ctx.moveTo(this.start.x, this.start.y)
    ctx.lineTo(this.end.x, this.end.y)
    ctx.strokeStyle = "rgba(255, 0, 0, 0.6)"
    ctx.stroke()
    ctx.closePath()
  }

  obstacleUnit(){
    return this.end.subtr(this.start).unit();
  }

}

class ObstacleCircle {

  constructor(x, y, radius){
    this.pos = new Vector(x, y)
    this.r = radius
  }

  drawCircle(){
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.r, 0, 2 * Math.PI)
    ctx.closePath()
  }

}


class Line {

  constructor(x1, y1, x2, y2){
    this.start = new Vector(x1, y1)
    this.end = new Vector(x2, y2)
    lines.push(this)
  }

  drawLine(){
    ctx.beginPath()
    ctx.moveTo(this.start.x, this.start.y)
    ctx.lineTo(this.end.x, this.end.y)
    ctx.strokeStyle = "rgba(255, 0, 0, 0.6)"
    ctx.stroke()
    ctx.closePath()
  }

  obstacleUnit(){
    return this.end.subtr(this.start).unit()
  }

}