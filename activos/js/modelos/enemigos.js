class Enemigos {
    constructor(ctx,x,y,w,h,src,vFrames,hFrames,score,damage){
        this.ctx = ctx
        this.x = x
        this.y= y
        this.w=w
        this.h= h
        this.vx= -ENEMY_VX
    
        this.score = score
        this.damage = damage
        this.sprite = new Image()
        this.sprite.src = src
        
        this.sprite.vFrames = vFrames // numero de columnas
        this.sprite.hFrames = hFrames // numeros de filas
        this.sprite.vFrameIndex = 0
        this.sprite.hFrameIndex = 0

        this.sprite.onload = () =>{this.sprite.isReady = true
          this.sprite.frameW = Math.floor(this.sprite.width/this.sprite.vFrames)
          this.sprite.frameH = Math.floor(this.sprite.height/this.sprite.hFrames)
    }
    this.drawcount = 0
}
draw (){   
        if(this.sprite.isReady){
        this.ctx.drawImage(
        this.sprite,
        this.sprite.vFrameIndex*this.sprite.frameW,
        this.sprite.hFrameIndex*this.sprite.frameH,
        this.sprite.frameW,
        this.sprite.frameH,
        this.x,
        this.y, 
        this.w,
        this.h
    )
}
        this.animate()
        this.drawcount++
}
move(){
    this.x +=this.vx
}
animate(){
if(this.drawcount >= ENEMY_SPRITE_FREQ){
    this.drawcount =0
    this.sprite.vFrameIndex =(this.sprite.vFrameIndex+1)% this.sprite.vFrames
}
}
}
        

    