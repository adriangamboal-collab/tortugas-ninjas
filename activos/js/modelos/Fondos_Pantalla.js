class Fondos_Pantalla{
  constructor(ctx){
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.image = new Image()
    this.image.src = './activos/imagenes/fondo_pantalla/level_bg.png'
    this.image.onload = ()=> {this.image.isReady = true}
    this.vx = VEL_BG
    }

  draw(){
    if (this.image.isReady){
      this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
      this.ctx.drawImage(this.image, this.x+this.w, this.y, this.w, this.h)

    }
  }
   
  move(){
    this.x += this.vx
    if( this.x< -this.w){
      this.x =0 
    }
  }
}
