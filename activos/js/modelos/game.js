class Game {
    constructor(canvasID){
        this.canvas = document.getElementById(canvasID)
        this.canvas.width = CANVAS_W
        this.canvas.height = CANVAS_H

        this.fps = FPS
        this.drawIntervalId = null
        
        this.healt= HEALT_INICIAL
        this.ctx = this.canvas.getContext('2d')
        this.fp= new Fondos_Pantalla(this.ctx)
        this.tortuga =  new Tortuga (this.ctx,TORTUGA_W , TORTUGA_H  )
        this.tortuga.groundTo(this.canvas.height-SUELO)
        this.tortuga.limiteDerechoTo(this.canvas.width-MARGEN_DERECHO)

        this.piza = []
        this.pizaTimeoutId = null
        this.enemies= [ ]
        this.enemiesTimeoutId = null
    }


    start(){
      if (this.drawIntervalId === null) {
      this.setupListeners()
      this.drawIntervalId = setInterval(() =>{
        this.clear()
        this.move()
        this.draw()
        this.generateElements()
        this.checkBounds()
        this.CheckColisions()
        },this.fps)
      }
    } 

    draw(){
      this.fp.draw()
      this.tortuga.draw()
      this.piza.forEach(piza =>piza.draw())
      this.enemies.forEach(enemigo =>enemigo.draw())
      this.drawHealt()

    }

    move(){
      this.fp.move()
      this.tortuga.move()
      this.piza.forEach(piza =>piza.move())
      this.enemies.forEach(enemigo =>enemigo.move())

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

    generateElements(){
      if(this.pizaTimeoutId === null) {
      this.pizaTimeoutId= setTimeout(()=> {
        const randomY =Math.floor(Math.random()*167)
        this.piza.push(new Piza (this.ctx,
        this.canvas.width,
        this.canvas.height-SUELO-PIZZA_H-randomY)
      )
      this.pizaTimeoutId = null
      },4000)
      }

      if(this.enemiesTimeoutId === null) {
      this.enemiesTimeoutId= setTimeout(()=> {
        const randomY =Math.floor(Math.random()*167)
        this.enemies.push(new Enemigos(
            this.ctx,
            this.canvas.width,
            this.canvas.height-NINJA_BlUE_H-randomY,
            NINJA_BLUE_W,
            NINJA_BlUE_H,
            NINJA_BLUE_SPRITE,
            NINJA_BLUE_SPRITE_VFRAMES,
            NINJA_BLUE_SPRITE_HFRAMES,
            NINJA_BLUE_DAMAGE,
            ENEMY_VX)
      )
      this.enemiesTimeoutId =null
    },3000
  )
      
      }
    }
    checkBounds(){
      this.piza = this.piza.filter(piza =>!(piza.x+piza.w<0))
    }

    CheckColisions(){
      this.piza = this.piza.filter(piza=>{
        if(this.tortuga.collidesWith(piza)){
          this.healt = Math.min(HEALT_MAX,this.healt+PIZZA_HEALT)
          return false
        }
        return true
      })
    
       this.enemies = this.enemies.filter(enemigos=>{
        if(this.tortuga.collidesWith(enemigos)){
          this.healt = Math.min(HEALT_MAX,this.healt-NINJA_BLUE_DAMAGE)
          return false
        }
        return true
          })
        }
  
    drawHealt (){
        this.ctx.font = "40px 'Bangers'"
        this.ctx.lineWidth = 10
        this.ctx.lineJoin = "round"
        this.ctx.strokeStyle = "black"
        this.ctx.strokeText(`Healt: ${this.healt}`, 10, 40)
        this.ctx.fillStyle = "#f2ff3f"
        this.ctx.fillText(`Healt: ${this.healt}`, 10, 40)
    }
    
  }
        
      

