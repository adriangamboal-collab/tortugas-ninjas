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
    }

    onKeyEvent(event){
        const isPressed = event.type === "keydown"
        console.log(isPressed)

        switch (event.keyCode){
          case KEY_RIGHT:
            this.vx = TORTUGA_VX
            break
          case KEY_LEFT:
            this.vx = -TORTUGA_VX
            break
          case KEY_UP:
            this.vy = -TORTUGA_VY
            break
          case KEY_DWON:
            this.vy = TORTUGA_VY
        }

    }
}