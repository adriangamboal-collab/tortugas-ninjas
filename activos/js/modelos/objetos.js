/*class Objeto {

   constructor(ctx, sx, sy, sw, sh, x, y, vx = 0) {
    this.ctx = ctx
    this.image = Objeto.cargarHoja()
    this.sx = sx
    this.sy = sy
    this.sw = sw
    this.sh = sh
    this.x = x
    this.y = y
    this.vx = vx
    
  }
  static hoja = null

  static cargarHoja() {
    if (!Objeto.hoja) {
      Objeto.hoja = new Image()
      Objeto.hoja.src = '/activos/imagenes/fondo_pantalla/Leve_objets.png'
      Objeto.hoja.onload = () => { Objeto.hoja.isReady = true }
    }
    return Objeto.hoja
  }

  // Crea todos los objetos del nivel
  static crearTodos(ctx) {
    return [
      new Objeto(ctx, 1186, 228, 414, 94, 2000, 215, -VEL_BG),  // reja
      new Objeto(ctx, 258, 228, 26, 48, 750, 350, - VEL_BG),    // hidrante
      new Objeto(ctx, 258, 228, 26, 48, 1400, 310,-VEL_BG ), // otro hidrante
      new Objeto(ctx, 255, 293, 71, 18, 770, 350,  ),   // otro hidrante

    ]
  }

  draw() {
    if (this.image.isReady) {
      this.ctx.drawImage(
        this.image,
        this.sx, this.sy, this.sw, this.sh,
        this.x, this.y, this.sw, this.sh
      )
    }
  }

  move() {
  this.x -= this.vx                      // con vx = 0 no se mueve
  if (this.x + this.w < 0) {            // salió por la izquierda
    this.x += this.w   //vuelve a entrar por la derecha
  }
}
  }*/
