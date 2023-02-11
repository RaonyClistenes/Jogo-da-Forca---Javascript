const select = document.querySelector('select');
const pontos = document.querySelector('#pontuacao');
const valores = document.querySelectorAll('.btn');
const boneco = document.querySelector('.resposta');
const reiniciar = document.querySelector('.reload')
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');
const reiniciar02 = document.querySelector('.two');
const textResultado = document.querySelector('.titulo-2')
const win = new Audio('/assets/audios/ganhou.mp3');
const lose = new Audio('/assets/audios/perdeu.mp3');
const displayTentativas = document.querySelector('#tentativas');




const teclasPressionadas = [];
const coletor = [];
const animais = ['cavalo', 'abelha', 'cachorro', 'coelho'];
const objetos = ['escova', 'tênis', 'bola', 'cardápio'];
const lugares = ['delegacia', 'praia', 'escola', 'hospital'];
const corpo = ['orelha', 'boca', 'naris', 'braço', 'mãos'];
const desenhos = ['mickey', 'pateta', 'goku', 'cinderela'];


reiniciar02.addEventListener('click', () => {
    window.location.reload()
})

let tempo = 90
let sec = 1
function limite() {
    const contador = setInterval(() => {
        tempo -= sec
        pontos.value = tempo
        if (tempo === 0) {
            clearInterval(contador)
            lose.play()
            fade.classList.toggle('hide')
            modal.classList.toggle('hide')
        }
    }, 1000);
}


function selecaoAnimais() {
    let opcao = Math.floor(Math.random() * animais.length)
    let array = [];
    array.push(animais[opcao])
    let str = array.toString()
    let caps = str.toUpperCase()
    let fragmento = caps.split('')



    for (let i = 0; i < fragmento.length; i++) {
        let p = document.createElement('p');
        p.innerText = fragmento[i]
        p.style.color = 'transparent'
        p.style.borderBottom = '1px solid black'
        boneco.appendChild(p)
        for (let j = 0; j < valores.length; j++) {
            valores[j].addEventListener('click', () => {
                console.log(teclasPressionadas)
                if (valores[j].innerHTML === fragmento[i]) {
                    p.style.color = 'black'
                    coletor.push(fragmento[i])
                    if (coletor.length === fragmento.length) {
                        textResultado.innerHTML = 'Você Ganhou!'
                        modal.style.backgroundColor = 'green'
                        fade.classList.toggle('hide')
                        modal.classList.toggle('hide')
                        win.play()
                    }
                }
            })

        }
    }


}
function clicadas() {
    for (let i = 0; i < valores.length; i++) {
        valores[i].addEventListener('click', (el) => {
            valores[i].disabled = true
            valores[i].style.boxShadow = 'none'
            valores[i].style.backgroundColor = 'white'
            valores[i].style.color = 'black'
            teclasPressionadas.push(valores[i].innerHTML)
            console.log(teclasPressionadas)
            if (teclasPressionadas.length === 10) {
                fade.classList.toggle('hide')
                modal.classList.toggle('hide')
                lose.play()
            }
            displayTentativas.value -= 1
        })

    }
}

select.addEventListener('change', () => {
    if (select.value == 'animal') {
        selecaoAnimais()
        select.disabled = true
        clicadas()
        limite()


    } else if (select.value == 'lugar') {
        selecaoLugares()
        select.disabled = true
        setInterval(pontuacao, 1000);
        clicadas()
        limite()


    } else if (select.value == 'objeto') {
        selecaoObjetos()
        select.disabled = true
        setInterval(pontuacao, 1000);
        clicadas();
        limite()


    } else if (select.value == 'corpo') {
        selecaoCorpos()
        select.disabled = true
        setInterval(pontuacao, 1000);
        clicadas();
        limite()



    } else if (select.value == 'desenho') {
        selecaoDesenhos()
        select.disabled = true
        setInterval(pontuacao, 1000);
        clicadas();
        limite()


    }
    console.log(select.value)
})

reiniciar.addEventListener('click', () => {
    window.location.reload()
})

function selecaoObjetos() {
    let opcao = Math.floor(Math.random() * objetos.length)
    let array = [];
    array.push(objetos[opcao])
    let str = array.toString()
    let caps = str.toUpperCase()
    let fragmento = caps.split('')



    for (let i = 0; i < fragmento.length; i++) {
        let p = document.createElement('p');
        p.innerText = fragmento[i]
        p.style.color = 'transparent'
        p.style.borderBottom = '1px solid black'
        boneco.appendChild(p)
        for (let j = 0; j < valores.length; j++) {
            valores[j].addEventListener('click', () => {
                if (valores[j].innerHTML === fragmento[i]) {
                    p.style.color = 'black'
                    coletor.push(fragmento[i])
                    if (coletor.length === fragmento.length) {
                        textResultado.innerHTML = 'Você Ganhou!'
                        modal.style.backgroundColor = 'green'
                        fade.classList.toggle('hide')
                        modal.classList.toggle('hide')
                        win.play()

                    }
                }
            })

        }
    }
}
function selecaoLugares() {
    let opcao = Math.floor(Math.random() * lugares.length)
    let array = [];
    array.push(lugares[opcao])
    let str = array.toString()
    let caps = str.toUpperCase()
    let fragmento = caps.split('')



    for (let i = 0; i < fragmento.length; i++) {
        let p = document.createElement('p');
        p.innerText = fragmento[i]
        p.style.color = 'transparent'
        p.style.borderBottom = '1px solid black'
        boneco.appendChild(p)
        for (let j = 0; j < valores.length; j++) {
            valores[j].addEventListener('click', () => {
                if (valores[j].innerHTML === fragmento[i]) {
                    p.style.color = 'black'
                    coletor.push(fragmento[i])
                    if (coletor.length === fragmento.length) {
                        textResultado.innerHTML = 'Você Ganhou!'
                        modal.style.backgroundColor = 'green'
                        fade.classList.toggle('hide')
                        modal.classList.toggle('hide')
                        win.play()

                    }
                }
            })

        }
    }
}
function selecaoCorpos() {
    let opcao = Math.floor(Math.random() * corpo.length)
    let array = [];
    array.push(corpo[opcao])
    let str = array.toString()
    let caps = str.toUpperCase()
    let fragmento = caps.split('')



    for (let i = 0; i < fragmento.length; i++) {
        let p = document.createElement('p');
        p.innerText = fragmento[i]
        p.style.color = 'transparent'
        p.style.borderBottom = '1px solid black'
        boneco.appendChild(p)
        for (let j = 0; j < valores.length; j++) {
            valores[j].addEventListener('click', () => {
                if (valores[j].innerHTML === fragmento[i]) {
                    p.style.color = 'black'
                    coletor.push(fragmento[i])
                    if (coletor.length === fragmento.length) {
                        textResultado.innerHTML = 'Você Ganhou!'
                        modal.style.backgroundColor = 'green'
                        fade.classList.toggle('hide')
                        modal.classList.toggle('hide')
                        win.play()

                    }
                }
            })

        }
    }
}
function selecaoDesenhos() {
    let opcao = Math.floor(Math.random() * desenhos.length)
    let array = [];
    array.push(desenhos[opcao])
    let str = array.toString()
    let caps = str.toUpperCase()
    let fragmento = caps.split('')



    for (let i = 0; i < fragmento.length; i++) {
        let p = document.createElement('p');
        p.innerText = fragmento[i]
        p.style.color = 'transparent'
        p.style.borderBottom = '1px solid black'
        boneco.appendChild(p)
        for (let j = 0; j < valores.length; j++) {
            valores[j].addEventListener('click', () => {
                if (valores[j].innerHTML === fragmento[i]) {
                    p.style.color = 'black'
                    coletor.push(fragmento[i])
                    if (coletor.length === fragmento.length) {
                        textResultado.innerHTML = 'Você Ganhou!'
                        modal.style.backgroundColor = 'green'
                        fade.classList.toggle('hide')
                        modal.classList.toggle('hide')
                        win.play()

                    }
                }
            })

        }
    }
}


