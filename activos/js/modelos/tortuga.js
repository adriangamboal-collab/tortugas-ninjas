class Tortuga {
    constructor(ctx,x,y ){
        this.ctx = ctx
        this.x = x
        this.y= y
        this.ground = 0
        this.limiteSuperior= LIMITE_SUPERIOR
        this.w = TORTUGA_W*2.5
        this.h = TORTUGA_H*2.5
        this.vx = 0
        this.vy = 0
        this.ay = 0
        this.z = 0
        this.vz = 0
        this.isJumping = false 
        this.isRunning =  false
        this.margenDerecho = MARGEN_DERECHO
        this.sprite = new Image()
        this.sprite.src = '/activos/imagenes/sprite_tortuga/sprite_leonardo.png'
        
        this.sprite.vFrames = 6 // numero de columnas
        this.sprite.hFrames = 5 // numeros de filas
        this.sprite.vFrameIndex = 0
        this.sprite.hFrameIndex = 0

        this.sprite.onload = () =>{this.sprite.isReady = true
          this.sprite.frameW = Math.floor(this.sprite.width/this.sprite.vFrames)
          this.sprite.frameH = Math.floor(this.sprite.height/this.sprite.hFrames)
        }
        this.drawCount = 4
    }
    groundTo(groundY){
      this.y = groundY -this.h
      this.ground =groundY

    }
    LimiteSueloSuperiorTo(LimiteY){
      this.x= LimiteY
    }
    limiteDerechoTo(limiteX){
      this.limiteX = limiteX

    }

    draw(){
      if(this.sprite.isReady){
        this.ctx.drawImage(
        this.sprite,
        this.sprite.vFrameIndex*this.sprite.frameW,
        this.sprite.hFrameIndex*this.sprite.frameH,
        this.sprite.frameW,
        this.sprite.frameH,
        this.x,
        this.y - this.z,
        this.w,
        this.h
        )
        
      }
    this.animate()
    this.drawCount++
      
    }

    move (){
        let velocidad = TORTUGA_VX
        if (this.isRunning){velocidad= TORTUGA_RUN}
        this.x += Math.sign(this.vx) * velocidad
        this.y += this.vy

        if(this.y + this.h > this.ground){ // limite del suelo

          this.vy = 0
          this.ay = 0

          this.groundTo(this.ground)

        
        }
        if (this.y+ this.h <this.limiteSuperior){ // limite superior
          this.y = this.limiteSuperior- this.h
          this.vy=0
        }



         if( this.x<0){ // limite izquierdo
          this.x=0
         }

         if( this.x+this.w >this.ctx.canvas.width){ // limite derecho con margen 
          this.x = this.ctx.canvas.width- this.w
         }
         if (this.x + this.w > this.ctx.canvas.width- this.margenDerecho){
          this.x= this.ctx.canvas.width - this.margenDerecho - this.w
          if (this.vx !== 0) {}
         }
        // salto con gravedad
        if (this.isJumping || this.z>0) {
            this.z += this.vz
            this.vz -= TORTUGA_AY
            this.isJumping = true 
            if (this.z <= 0) {          
                this.z = 0
                this.vz = 0
                this.isJumping = false
            }
        }
        
        }

    onKeyEvent(event){
        const isPressed = event.type === "keydown"
      
        switch (event.keyCode){
          case KEY_RIGHT:
          if( isPressed){
            this.vx = TORTUGA_VX
          }else{
            this.vx = 0
          }
            break
          case KEY_LEFT:
             if( isPressed){
            this.vx = -TORTUGA_VX
          }else{
            this.vx = 0
          }
            break
          case KEY_UP:  
          if(isPressed){
              this.vy = -TORTUGA_VY}else{this.vy=0}
              break
          case KEY_DOWN:
            if(isPressed){
              this.vy = TORTUGA_VY}else{this.vy=0}
              break
           case KEY_S:
            if(isPressed && !event.repeat && !this.isJumping){
            this.vz =TORTUGA_SALTO
            this.isJumping =true
          }break
          case KEY_D:this.isRunning= isPressed
            break
          }   
    }  
       animate (){
    if (this.isJumping){
      this.sprite.hFrameIndex = 3
      if (this.vz > 5)        this.sprite.vFrameIndex = 0
      else if (this.vz > 0)   this.sprite.vFrameIndex = 1
      else if (this.vz > -5)  this.sprite.vFrameIndex = 2
      else                    this.sprite.vFrameIndex = 3
    }
    //sprite corriendo
    else if (this.vx >0 && this.isRunning){
      this.animateFrame(0, 2, 4, 8)
    }
     else if (this.vx < 0 && this.isRunning){
      this.animateFrame(0, 4, 4, 8)
    }
    //sprite andando hacia delante
    else if (this.vx !== 0 || this.vy !== 0){
      this.animateFrame(0, 0, 6, 20)    
    }
    else {
      this.sprite.vFrameIndex = 0
      this.sprite.hFrameIndex = 0
    }
}
animateFrame(initialVFrame, initialHFrame, frames, frequency){
    if (this.sprite.hFrameIndex !== initialHFrame){
      this.sprite.vFrameIndex = initialVFrame
      this.sprite.hFrameIndex = initialHFrame
      this.drawCount = 0
    }
    else if (this.drawCount % frequency === 0){
      this.drawCount = 0
      this.sprite.vFrameIndex = (this.sprite.vFrameIndex + 1) % frames
    }
}
  }
