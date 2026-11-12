class Enemigos {
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
        this.margenDerecho = MA0RGEN_DERECHO
    }
}