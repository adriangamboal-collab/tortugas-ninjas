class Piza{
    constructor(ctx,x,y,
        vx=-PIZZA_VX,
       // vy=PIZZA_VY,
        w=PIZZA_W,
        h=PIZZA_H,
        src=PIZZA_SPRITE,
        healt=PIZZA_HEALT,
        frequency=PIZZA_FREQ
        ){
        this.ctx= ctx
        this.x = x 
        this.y = y
        this.w = w
        this.h = h
        this.vx = vx
        //this.vy = vy
        this.healt = healt
        this.frequency= frequency
        this.src =src
        this.sprite = new Image()
        this.sprite.src = src
        this.sprite.onload = ()=>{
            this.sprite.isReady = true
        }
        this.drawCount = 0
        
    }
    draw(){
    if (this.sprite.isReady){
    this.ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h)
    this.animate()
    this.drawCount++
}

const b = this.hitbox()
this.ctx.strokeStyle = 'blue'
this.ctx.lineWidth = 2
this.ctx.strokeRect(b.x, b.y, b.w, b.h)
    }
    move(){
      this.x += this.vx
     // this.y += this.vy
    }
    animate (){

    }
    hitbox() {
  return { x: this.x, y: this.y, w: this.w, h: this.h }
}
}