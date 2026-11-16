class Game {
    constructor(canvasID){
        this.canvas = document.getElementById(canvasID)
        this.canvas.width = CANVAS_W
        this.canvas.height = CANVAS_H

        this.fps = FPS
        this.drawIntervalId = null

        this.healt = HEALT_INICIAL
        this.ctx = this.canvas.getContext('2d')
        this.fp = new Fondos_Pantalla(this.ctx)
        this.tortuga = new Tortuga(this.ctx, TORTUGA_W, TORTUGA_H)
        this.tortuga.groundTo(this.canvas.height - SUELO)
        this.tortuga.limiteDerechoTo(this.canvas.width - MARGEN_DERECHO)

        this.piza = []
        this.pizaTimeoutId = null
        this.enemies = []
        this.enemiesTimeoutId = null
        this.score = 0
        this.audioGame= new Audio('./activos/musica/musica_pantallas/musicaJuego.ogg')
        this.audioGame.volume =0.1
        this.audioGame.loop = true
        this.audioGame.onload = ()=>{}
        this.audioEnemigo = new Audio('./activos/musica/sonidos/daño.mp3')
        this.audioEnemigo.volume=1
        this.audioPizza = new Audio('./activos/musica/sonidos/choque_pizza.mp3')
        this.audioPizza.volume =1
        this.audioScore = new Audio('./activos/musica/sonidos/colision_enemigo.wav')
        this.audioScore.volume =1
        this.audioGameOver = new Audio ('./activos/musica/sonidos/Game_over.mp3')
        this.audioGameOver.volume=1
      
      

    }
      sonar(audio){
          audio.currentTime =0
          audio.play().catch(()=>{})
        }
        
        

    start(){
      if (this.drawIntervalId === null) {
        this.audioGame.play()
        this.setupListeners()
        this.drawIntervalId = setInterval(() => {
          this.clear()
          this.move()
          this.draw()
          this.generateElements()
          this.checkBounds()
          this.CheckColisions()
        }, this.fps)
      }
    }

    draw(){
      this.fp.draw()
      this.tortuga.draw()
      this.piza.forEach(piza => piza.draw())
      this.enemies.forEach(enemigo => enemigo.draw())
      this.drawHealt()
      this.drawScore() 
                     // NUEVO
    }

    move(){
      this.fp.move()
      this.tortuga.move()
      this.piza.forEach(piza => piza.move())
      this.enemies.forEach(enemigo => enemigo.move())
    }

    clear(){
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    stop(){
      clearInterval(this.drawIntervalId)
      this.drawIntervalId = null
      this.audioGame.pause()
      this.audioGame.currentTime=0
    }

    setupListeners(){
      addEventListener('keydown', (event) => {
        this.tortuga.onKeyEvent(event)
      })
      addEventListener('keyup', (event) => {
        this.tortuga.onKeyEvent(event)
      })
      addEventListener('keypress', (event) => {
        this.tortuga.onKeyEvent(event)
      })
    }

    generateElements(){
      if (this.pizaTimeoutId === null) {
        this.pizaTimeoutId = setTimeout(() => {
          const randomY = Math.floor(Math.random() * 167)
          this.piza.push(new Piza(
            this.ctx,
            this.canvas.width,
            this.canvas.height - SUELO - PIZZA_H - randomY)
          )
          this.pizaTimeoutId = null
        }, 4000)
      }

      if (this.enemiesTimeoutId === null) {
        let tiempo = 3000
        let Up_vx = 0
        let N = 1
        if(this.score>=20)  {tiempo= 3000,Up_vx= 0.5,N=2}
        if(this.score>=60)  {tiempo= 2500,Up_vx= 1,N=3}
        if(this.score>=100) {tiempo= 2000,Up_vx= 1.5,N=4}
        if(this.score>=150) {tiempo= 1500,Up_vx= 2,N=4}

        this.enemiesTimeoutId = setTimeout(() => {
          const ninja = NINJAS[Math.floor(Math.random()*N)]
          const randomY = Math.floor(Math.random() * 167)
          this.enemies.push(new Enemigos(
            this.ctx,
            this.canvas.width,
            this.canvas.height - SUELO - ninja.h - randomY,   // CAMBIO: añadido "- SUELO"
            ninja.w,
            ninja.h,
            ninja.sprite,
            ninja.vFrames,
            ninja.hFrames,
            ninja.score,
            ninja.damage,
            ninja.frames 
           ))

            // CAMBIO: antes pasabas ENEMY_VX aq)
          this.enemies[this.enemies.length-1].vx = -(ENEMY_VX + Up_vx)
          this.enemiesTimeoutId = null
        },tiempo)
      }
    }

    
  
    checkBounds(){
      this.piza = this.piza.filter(piza => !(piza.x + piza.w < 0))
      this.enemies = this.enemies.filter(e => e.x + e.w > 0)        // NUEVO
    }

    CheckColisions(){
      if (this.invulnerable > 0) this.invulnerable--                // NUEVO

      // PIZZAS: se cogen al tocarlas (sin cambios)
      this.piza = this.piza.filter(piza => {
        if (this.tortuga.collidesWith(piza)) {
          this.sonar(this.audioPizza)
          this.healt = Math.min(HEALT_MAX, this.healt + PIZZA_HEALT)
          return false
        }
        return true
      })

      // ENEMIGOS: dependen del carril y del salto           // CAMBIO: todo el bloque
        this.enemies = this.enemies.filter(e => {
        const resultado = this.tortuga.choque(e)

        if (resultado === 'golpe') {
          this.sonar(this.audioEnemigo)
          this.healt = Math.max(0, this.healt - e.damage)
          return false
        }

        if (resultado === 'salto') {
          this.sonar(this.audioScore)
          this.score += e.score
          return false
        }

        return true
      })

      if (this.healt <= 0) {
        this.stop()
        this.sonar(this.audioGameOver)
        document.getElementById('puntuacion-final').textContent = `Score: ${this.score}`
        document.getElementById('gameover').hidden = false
      }

  


      /*this.enemies = this.enemies.filter(e => {
        const resultado = this.tortuga.choque(e)

         if (resultado !== null && e.ultimoLog !== resultado) {
    e.ultimoLog = resultado
   
  }
        if (resultado === 'golpe' && this.invulnerable === 0) {
          this.sonar(this.audioEnemigo)
          this.healt = Math.max(0, this.healt - e.damage)
          this.invulnerable = 60
          return false
        }

        if (resultado === 'salto' && !e.saltado) {
          this.sonar(this.audioScore)
          e.saltado = true
          this.score += e.score
                  return false

        }
        return true
      })

      if (this.healt <= 0) {this.stop()
        document.getElementById('puntuacion-final').textContent = `Score: ${this.score}`
        document.getElementById('gameover').hidden = false}  */                            // NUEVO
  


    }


    drawHealt(){
      this.ctx.font = "40px 'Bangers'"
      this.ctx.lineWidth = 10
      this.ctx.lineJoin = "round"
      this.ctx.strokeStyle = "black"
      this.ctx.strokeText(`Healt: ${this.healt}`, 10, 40)
      this.ctx.fillStyle = "#f2ff3f"
      this.ctx.fillText(`Healt: ${this.healt}`, 10, 40)
    }

    drawScore(){                                                    // NUEVO
      this.ctx.font = "40px 'Bangers'"
      this.ctx.lineWidth = 10
      this.ctx.lineJoin = "round"
      this.ctx.strokeStyle = "black"
      this.ctx.strokeText(`Score: ${this.score}`, 260, 40)
      this.ctx.fillStyle = "#f2ff3f"
      this.ctx.fillText(`Score: ${this.score}`, 260, 40)
    }
  
  }

