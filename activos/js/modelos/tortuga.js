class Tortuga {
    constructor(ctx,x,y ){
        this.ctx = ctx
        this.x = x
        this.y= y
        this.ground = 0
        this.w = 20
        this.h = 20
        this.vx = 0
        this.vy = 0
        this.ay = 0
        this.isJumping = false 

    }
    groundTo(groundY){
      this.y = groundY -this.h
      this.ground =groundY

    }

    draw(){
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
          case KEY_DWON:
            if(isPressed){
              this.vy = TORTUGA_VY
            
            }
            
        }

    }
}