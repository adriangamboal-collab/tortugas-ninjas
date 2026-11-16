// constantes de pantalla y jugador
const CANVAS_W= 2434
const CANVAS_H= 402
const FPS = 1000/60
const MARGEN_DERECHO =100
const LIMITE_SUPERIOR =230
const SUELO = 5
const TORTUGA_W = 44
const TORTUGA_H = 61
const TORTUGA_VX = 5
const TORTUGA_VY = 5
const TORTUGA_RUN= TORTUGA_VX*2
const TORTUGA_SALTO = 10
const TORTUGA_AY = 0.35
const VEL_BG = 0
const KEY_RIGHT = 39
const KEY_LEFT = 37
const KEY_UP= 38
const KEY_DOWN = 40
const KEY_S = 83
const KEY_D = 68
// constante de accesorios 
const PIZZA_SPRITE = "./activos/imagenes/Accesorios/piza.png"
const PIZZA_W =32
const PIZZA_H =32
const HEALT_INICIAL= 50
const HEALT_MAX = 100
const PIZZA_HEALT = 2
const PIZZA_FREQ = 10
const PIZZA_VX =  3
//const PIZZA_VY = 1
const PIZZA_MAX_GAME =4
// constantes de los enemigos 
const ENEMY_VX = 3
const NINJA_BLUE_W =96*1.4
const NINJA_BLUE_H =96*1.4
const ENEMY_SPRITE_FREQ = 22
const NINJA_BLUE_DAMAGE = 20
const NINJA_BLUE_SPRITE = './activos/imagenes/sprite_enemigos/Sprite_definitivos/enemigos_efecto_espejo/soldado_azul_normal_y_espejo.png'
const NINJA_BLUE_SPRITE_VFRAMES = 6
const NINJA_BLUE_SPRITE_HFRAMES = 4
const NINJA_BLUE_SCORE = 10
//añado diferentes enemigos
//ninja blanco
const NINJA_WHITE_DAMAGE = 15
const NINJA_WHITE_SPRITE = './activos/imagenes/sprite_enemigos/Sprite_definitivos/enemigos_efecto_espejo/ninja_blanco_normal_y_espejo.png'
const NINJA_WHITE_SCORE = 7.5
const NINJA_WHITE_SPRITE_VFRAMES = 8
const NINJA_WHITE_SPRITE_HFRAMES = 2
//ninja amarillo
const NINJA_YELLOW_DAMAGE = 5
const NINJA_YELLOW_SPRITE = './activos/imagenes/sprite_enemigos/Sprite_definitivos/enemigos_efecto_espejo/ninja_amarillo_normal_y_espejo.png'
const NINJA_YELLOW_SCORE = 2.5
const NINJA_YELLOW_SPRITE_VFRAMES = 5
const NINJA_YELLOW_SPRITE_HFRAMES = 2
//ninja rojo
const NINJA_RED_DAMAGE = 10
const NINJA_RED_SPRITE = './activos/imagenes/sprite_enemigos/Sprite_definitivos/enemigos_efecto_espejo/ninja_naranja_normal_y_espejo.png'
const NINJA_RED_SCORE = 5
const NINJA_RED_SPRITE_VFRAMES = 13
const NINJA_RED_SPRITE_HFRAMES = 4
const NINJA_RED_FRAMES =5

const NINJAS =[ 
    //azul
    {sprite:NINJA_BLUE_SPRITE,
    vFrames:NINJA_BLUE_SPRITE_VFRAMES,
    hFrames:NINJA_BLUE_SPRITE_HFRAMES,
    damage:NINJA_BLUE_DAMAGE,
    score:NINJA_BLUE_SCORE,
    w: NINJA_BLUE_W,
    h: NINJA_BLUE_H},
    //blanco
    {sprite:NINJA_WHITE_SPRITE,
    vFrames:NINJA_WHITE_SPRITE_VFRAMES,
    hFrames:NINJA_WHITE_SPRITE_HFRAMES,
    damage:NINJA_WHITE_DAMAGE,
    score:NINJA_WHITE_SCORE,
    w: NINJA_BLUE_W*115/102,
    h: NINJA_BLUE_H},
    //amarillo
    {sprite:NINJA_YELLOW_SPRITE,
    vFrames:NINJA_YELLOW_SPRITE_VFRAMES,
    hFrames:NINJA_YELLOW_SPRITE_HFRAMES,
    damage:NINJA_YELLOW_DAMAGE,
    score:NINJA_YELLOW_SCORE,
    w: NINJA_BLUE_W*4,
    h: NINJA_BLUE_H*4},
    {
        //rojo
    sprite:NINJA_RED_SPRITE,
    vFrames:NINJA_RED_SPRITE_VFRAMES,
    hFrames:NINJA_RED_SPRITE_HFRAMES,
    frames:NINJA_RED_FRAMES,
    damage:NINJA_RED_DAMAGE,
    score:NINJA_RED_SCORE,
    w: NINJA_BLUE_W*190/88,
    h: NINJA_BLUE_H}]









