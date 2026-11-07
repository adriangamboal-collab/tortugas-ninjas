class Game {
    constructor(canvasID){
        this.canvas = document.getElementById(canvasID)
        this.canvas.width = CANVAS_W
        this.canvas.Height = CANVAS_H

        this.fps = FPS
        this.drawIntervalId = null
        this.ctx = this.canvas.getContext('2d')
    }


    start(){
      if (this.drawIntervalId !== null) {
      this.drawIntervalId = setInterval(() =>{
        },this.fps)
      }
    } 
    stop(){
      clearInterval(this.drawIntervalId)
      this.drawIntervalId = null
    }
}