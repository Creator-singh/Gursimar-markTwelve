const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answer-btn");
const scoreOutput = document.querySelector("#score-output");

const correctAnswer = ["90°", "right angled", "equilateral triangle", "isosceles triangle", "scalene triangle", "acute", "obtuse", "3", "180°", "hypotenuse"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formAnswer = new FormData(quizForm);
    for(let answer of formAnswer.values())
    {
        if(answer === correctAnswer[index])
        {
            score = score + 1;
        }
        index = index + 1;
    }
    scoreOutput.innerText = "Your Final score is " + score;
}

submitBtn.addEventListener("click", calculateScore);