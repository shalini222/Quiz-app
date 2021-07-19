const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const qce = document.getElementById('question-container')

let sQ
let cQ
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
 cQ++
 setNextQuestion()
})

function startGame() {
    //    console.log('Started')
    startButton.classList.add('hide')
    qce.classList.remove('hide')
    sQ = question.sort(() => Math.random - 0.5)
    cQ = 0
    setNextQuestion()


}

function setNextQuestion() {
    resetState()
    showQ(sQ[cQ])

}


function showQ(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
            
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)

    })
    if (sQ.length > cQ+  1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }



}

function  setStatusClass(element, correct){
   clearStatusClass(element)
   if(correct){
       element.classList.add('correct')
    }else{
    element.classList.add('wrong')
   }
}

function  clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [

    {

        question: "what is 2 + 2 ?",
        answer: [
            { text: '4', correct: true },
            { text: '40', correct: false },
            { text: '400', correct: false },
            { text: '40000', correct: false },
        ]
    },

    {

        question: "what is 4 * 2 ?",
        answer: [
            { text: '8', correct: true },
            { text: '440', correct: false },
            { text: '800', correct: false },
            { text: '4000', correct: false },
        ]
    },





]

