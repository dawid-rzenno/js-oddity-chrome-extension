"use strict"

const questionDisplay = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');

const QUESTIONS = [
    ['2 + 2 = ?', '4']
];

const selectedQuestion = QUESTIONS[0];
questionDisplay.innerText = selectedQuestion[0];

submitButton.addEventListener('click', () => {
    if (answerInput.value === selectedQuestion[1]) {
        console.log('Yay!')
    }
})

