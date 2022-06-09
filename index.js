const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

let playing = true

document.addEventListener('keydown', e => {
    if (!playing) location.reload()

    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.slice(0, -2)

    if (pipePosition < 70 && pipePosition > 20 && marioPosition < 65) {
        pipe.style.animation = 'none'
        pipe.style.left = pipePosition + 'px'

        mario.style.animation = 'none'
        mario.style.bottom = marioPosition + 'px'
        mario.src = './images/dead.png'
        mario.style.width = '45px'
        mario.style.marginLeft = '25px'

        playing = false
        clearInterval(loop)
    }

}, 10)