class Fondos_Pantalla{
  constructor(ctx){
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
  }

  draw(){
     this.ctx.fillStyle = 'lime'
    this.ctx.fillRect(this.x,this.y, this.w, this.h)
  }
   
  move(){

  }
}
