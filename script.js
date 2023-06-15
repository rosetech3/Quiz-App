const quizData = [{
        question: "which language run on the browser",
        a: "python",
        b: "java",
        c: "C/C++",
        d: "javascript",
        correct: "d",
    },
    {
        question: "what does CSS stands for ?",
        a: "cascading style sheet",
        b: "cars suvs sallboots",
        c: "central style sheet",
        d: "cascading simple sheet",
        correct: "a",

    },
    {
        question: "what year was javascript launch",
        a: "1987",
        b: "1996",
        c: "1995",
        d: "none of the above",
        correct: "c",
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deSelectAnswer();

    const currentQuizData = quizData[currentQuiz];
    let question
    questionEl = question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deSelectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;

}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData(currentQuiz).correct) {
            score++;

        }
        currentQuiz++;
    }
    if (currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>you answer $(score)/$(quizData.length) questions correct </h2>
        
        <button onclick="location.reload()">Reload</button>
        `;
    }

})