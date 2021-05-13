const quizData = [
    {
        question: 'What does LBW stand for?',
        a: 'Long Ball Wide',
        b: 'Leg Before Wicket',
        c: 'Leg Beyond Width',
        d: 'Lol about to win',
        correct: 'b'
    }, {
        question: 'Who did England beat in the final of the 2019 Cricket World Cup?',
        a: 'Australia',
        b: 'Sri Lanka',
        c: 'New Zealand',
        d: 'West Indies',
        correct: 'c'
    }, {
        question: 'Which of these places is cricket NOT a popular sport?',
        a: 'Myanmar',
        b: 'Sri Lanka',
        c: 'Pakistan',
        d: 'Ireland',
        correct: 'a'
    }, {
        question: 'How long do test cricket matches usually go on for?',
        a: '90 Minutes',
        b: '6 Hours',
        c: '3-5 Days',
        d: 'Over a week',
        correct: 'c'
    }, {
        question: 'In which year was cricket included as part of the Olympic Games?',
        a: '1896',
        b: '1900',
        c: '1908',
        d: '1924',
        correct: 'b'
    }
]

const question = document.getElementById('question')
const a = document.getElementById('optA')
const b = document.getElementById('optB')
const c = document.getElementById('optC')
const d = document.getElementById('optD')
const options = document.querySelectorAll('.options')
const submit = document.getElementById('submit')

let currentQuestion = 0;
let answer = undefined;
let score = 0;


function loadQuiz() {
    const currentQuestionData = quizData[currentQuestion]
    question.innerText = currentQuestionData.question
    a.innerText = currentQuestionData.a
    b.innerText = currentQuestionData.b
    c.innerText = currentQuestionData.c
    d.innerText = currentQuestionData.d
    answer = currentQuestionData.correct
}
loadQuiz()

function check() {
    if (currentQuestion < quizData.length) {
        loadQuiz()
    }
    else {
        if (score <= 1) {
            marks = 'Correct Question'
        }
        else {
            marks = 'Correct Questions'
        }
        alert(`You got ${score} ${marks} out of 5 Questions!`)
        location.reload()
    }

}

function checkAnswer() {
    if (options[0].checked || options[1].checked || options[2].checked || options[3].checked) {
        options.forEach(element => {
            if (element.checked) {
                if (element.id == answer) {
                    score++
                    currentQuestion++
                }
                else {
                    currentQuestion++
                }
                element.checked = false
            }
        });
    }
    else {
        if (confirm('No option selected! Do you want to jump to next question?')) {
            currentQuestion++
        }
    }
    check()
}

submit.addEventListener('click', () => {
    checkAnswer()
})