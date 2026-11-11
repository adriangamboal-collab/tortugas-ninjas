class Game {
    constructor(canvasID){
        this.canvas = document.getElementById(canvasID)
        this.canvas.width = CANVAS_W
        this.canvas.height = CANVAS_H

        this.fps = FPS
        this.drawIntervalId = null
        this.ctx = this.canvas.getContext('2d')
        this.fp= new Fondos_Pantalla(this.ctx)
        this.tortuga =  new Tortuga (this.ctx,TORTUGA_W , TORTUGA_H  )
        this.tortuga.groundTo(this.canvas.height-SUELO)
        this.tortuga.limiteDerechoTo(this.canvas.width-MARGEN_DERECHO)
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
      this.fp.draw()
      this.tortuga.draw()

    }

    move(){
      this.fp.move()
      this.tortuga.move()
    }

    clear(){

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
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