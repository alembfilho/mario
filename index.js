const mario = document.querySelector('.mario')
const canvas = document.querySelector('.canvas')

let playing = true

document.addEventListener('keydown', e => {
    if (!playing) location.reload()

    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
})

const checkForCollision = setInterval(() => {
    const marioPosition = +window.getComputedStyle(mario).bottom.slice(0, -2)

    document.querySelectorAll('.pipe').forEach(pipe => {
        const pipePosition = pipe.offsetLeft
        if (pipe.offsetLeft < 5) pipe.remove()

        if (pipePosition < 70 && pipePosition > 20 && marioPosition < 65) {
            pipe.style.animation = 'none'
            pipe.style.left = pipePosition + 'px'

            mario.style.animation = 'none'
            mario.style.bottom = marioPosition + 'px'
            mario.src = './images/dead.png'
            mario.style.width = '45px'
            mario.style.marginLeft = '25px'

            document.querySelectorAll('.pipe').forEach(pipe => {
                const pipePosition = pipe.offsetLeft
                pipe.style.animation = 'none'
                pipe.style.left = pipePosition + 'px'
            })

            playing = false
            clearInterval(checkForCollision)
            clearInterval(newPipes)
        }
    })

}, 10)

const newPipes = setInterval(() => {
    if (Math.random() < .4) {
        const newPipe = document.createElement('img')
        newPipe.src = './images/pipe.png'
        newPipe.classList.add('pipe')
        newPipe.style.animationDuration = window.innerWidth / 500 + 's'

        canvas.appendChild(newPipe)
    }
}, 600)