import html from './css.js'

let n = 0
let time = 100
const play = () => {
    n++
    const demo1 = document.querySelector('#demo1')
    const demo2 = document.querySelector('#demo2')
    demo1.innerHTML = html.substring(0, n)
    demo2.innerText = html.substring(0, n)
    if (n > html.length) {
        window.clearInterval(id)
    }
    demo2.scrollTop = demo2.scrollHeight
}

let id = setInterval(play, time)


const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')

btn1.onclick = () => {
    window.clearInterval(id)
}

btn2.onclick = () => {
    id = setInterval(play, time)
}

btn3.onclick = () => {
    time = 300
    window.clearInterval(id)
    id = setInterval(play, time)
}

btn4.onclick = () => {
    time = 100
    window.clearInterval(id)
    id = setInterval(play, time)
}

btn5.onclick = () => {
    time = 0
    window.clearInterval(id)
    id = setInterval(play, time)
}