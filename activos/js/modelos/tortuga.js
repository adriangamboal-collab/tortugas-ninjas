class Tortuga {
    constructor(ctx,x,y ){
        this.ctx = ctx
        this.x = x
        this.y= y
        this.ground = 0
        this.w = 30
        this.h = 30
        this.vx = 0
        this.vy = 0
        this.ay = 0
        this.isJumping = false 
        this.margenDerecho = MARGEN_DERECHO

    }
    groundTo(groundY){
      this.y = groundY -this.h
      this.ground =groundY

    }
    limiteDerechoTo(limiteX){
      this.limiteX = limiteX

    }

    draw(){
      this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    move (){
        this.x += this.vx
        this.y += this.vy
        this.vy += this.ay

        if(this.y + this.h > this.ground){

          this.vy = 0
          this.ay = 0

          this.groundTo(this.ground)

          this.isJumping = false 
        }
         if( this.x<0){
          this.x=0
         }

         if( this.x+this.w >this.ctx.canvas.width){
          this.x = this.ctx.canvas.width- this.w
         }
         /*if (this.x + this.w > this.ctx.canvas.width- this.margenDerecho){
          this.x= this.ctx.canvas.width - this.margenDerecho - this.w
          if (this.vx !== 0) {
      console.log(
        'x:', this.x,
        '| lado derecho:', this.x + this.w,
        '| distancia al borde del canvas:', this.ctx.canvas.width - (this.x + this.w)
      )
    }
        
         }*/
        
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
            if(!this.isJumping){
            this.isJumping = true
            this.vy = -TORTUGA_VY
            this.ay =  TORTUGA_AY
          }
            break
          case KEY_DOWN:
            if(isPressed){
              this.vy = TORTUGA_VY
            
            }
            
        }

    }
}