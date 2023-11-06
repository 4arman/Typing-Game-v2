const text = document.querySelector('.type-text')
const textWord = document.querySelector('#text')
const inputText = document.querySelector('#mainInput')
const time = document.querySelector('.time')
const modeBtn = document.querySelector('.bx-moon')
const wrapper = document.querySelector('.wrapper') 
const modeBlock = document.querySelector('.mode-block')

function textFlying(text) {
    return (pixel, time) => {
        setInterval(() => {
            text.style = `transform: translate(0, ${pixel}px)`
        }, time)
    }
}

const flyingText = textFlying(text)

flyingText(-8,150)
flyingText(0, 300)

let words = ['train', 'umbrella', 'cat', 'dog', 'super', 'training', 'work', 'apple', 'grid', 'virus', 'hacker', 'join', 'noise', 'check', 'watch', 'stand', 'tournament', 'goal', 'mecha', 'technique', 'arc', 'install', 'game', 'enginner', 'caramel', 'chocolate', 'eat', 'pineapple', 'remember', 'soccer', 'language', 'gym', 'portal', 'qwerty', 'yellow', 'green', 'blue', 'main', 'function', 'array', 'type', 'america', 'russia', 'sukablyat']
console.log(words.length)

let randomIndex = Math.floor(Math.random() * words.length)
let randomLetter = words[randomIndex]

textWord.textContent = randomLetter

inputText.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        if (inputText.value == textWord.textContent) {
            inputText.value = ''
            text.textContent = 'CORRECT'
            text.style = `
            transition: none;
            color: GREEN;`
            let newRandomIndex = Math.floor(Math.random() * words.length)
            let newRandomLetter = words[newRandomIndex]
            setTimeout(() => {
                text.textContent = `Type: " ${textWord.textContent = newRandomLetter} "`
                inputText.addEventListener('keydown', (event) => {
                    if (event.code =='Enter') {
                        if (inputText.value == newRandomLetter) {
                        }
                    }
                })
            },200)
        } else {
            text.textContent = 'ERROR'
            text.style = `
            transition: none;
            color: red;`
            setTimeout(() => {
                textWord.textContent = "r"
                text.textContent = 'Type " r " To Restart'
                document.addEventListener('keydown', (event) => {
                })
            },200)

        inputText.value = ''
        }
    }
})

modeBtn.addEventListener('click', () => {
    wrapper.style = `background-color: #111;`
    modeBtn.style = `color: #fff;`
    inputText.style = `background-color: #222; color: #fff;`
    text.style = 'color: #5555ff;'  
})
