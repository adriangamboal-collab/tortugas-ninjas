document.addEventListener('DOMContentLoaded', () => {
    const game = new Game ('proyecto')
    document.getElementById('btn-jugar').addEventListener('click',()=>{
        document.getElementById('menu').hidden = true
        game.start()
    })
    document.getElementById('btn-reiniciar').addEventListener('click',()=>{
        location.reload()
    })
})