class Game {
    constructor(canvasID){
        this.canvas = document.getElementById(canvasID)
        this.canvas.width = CANVAS_W
        this.canvas.Height = CANVAS_H

        this.fps = FPS
        this.drawIntervalId = null
        this.ctx = this.canvas.getContext('2d')
        this.tortuga =  new Tortuga (this.ctx, 20, 20 )
        this.tortuga.groundTo(this.canvas.height)
    }


    start(){
      if (this.drawIntervalId === null) {
        this.setupListeners()
      this.drawIntervalId = setInterval(() =>{
        this.clear()
        this.move()
        this.draw()
        },this.fps)
      }
    } 

    draw(){
      this.tortuga.draw()
    }

    move(){
      this.tortuga.move()
    }

    clear(){

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.Height)
    }


    stop(){
      clearInterval(this.drawIntervalId)
      this.drawIntervalId = null
    }

    setupListeners(){
      addEventListener('keydown',(event)=>{
        this.tortuga.onKeyEvent(event)
      } ) 
      addEventListener('keyup',(event)=>{
        this.tortuga.onKeyEvent(event)
      })
      addEventListener('keypress',(event)=> {
        this.tortuga.onKeyEvent(event)
      })
      
    }
}