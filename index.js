"use strict"

import {QUESTIONS} from "./questions.const.js";
import {OPTION_IDS} from "./options.const.js";
import {getRandomInt} from "./utils.js";

const question = QUESTIONS[getRandomInt(0, QUESTIONS.length - 1)];
let answer = '?';

const questionDisplay = document.getElementById('question');
const answerDisplay = document.getElementById('answer')

questionDisplay.innerText = question[0];
answerDisplay.innerText = answer;

OPTION_IDS.forEach(id => {
    document.getElementById(id).addEventListener('click', (mouseEvent) => {
        const id = mouseEvent.composedPath()[0].id;
        switch(mouseEvent.composedPath()[0].id) {
            case 'stringAnswerSubmitButton':
                answer = JSON.stringify(String(document.getElementById('stringAnswer').value));
                break;
            case 'numberAnswerSubmitButton':
                answer = Number(document.getElementById('numberAnswer').value);
                break;
            case 'trueAnswer':
                answer = true;
                break;
            case 'falseAnswer':
                answer = false;
                break;
            case 'nanAnswer':
                answer = NaN;
                break;
            case 'undefinedAnswer':
                answer = undefined;
                break;
            case 'nullAnswer':
                answer = JSON.stringify(null);
                break;
        }

        answerDisplay.innerText = answer;

        if (answer === question[1]) {
            document.getElementById(id).style.background = '#c8ffc8';
            document.getElementById(id).style.borderColor = '#94ff94';
        } else {
            document.getElementById(id).style.background = '#ffa4a4';
            document.getElementById(id).style.borderColor = '#ff8989';
        }
    })
})