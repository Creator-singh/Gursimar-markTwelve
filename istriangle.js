const input = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#btn-is-triangle");
const outputDiv = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    if (Number(input[0].value) > 0 && Number(input[1].value) > 0 && Number(input[2].value > 0)) {
        const sumOfAngles = calculateSumOfAngles(Number(input[0].value), Number(input[1].value), Number(input[2].value));
        if (sumOfAngles === 180) {
            outputDiv.innerText = "Yay!! these angles forms a triangle🔺"
        } else {
            outputDiv.innerText = "Oops! these angles doesn't form a triangle😢."
        }
    }
    else{
        outputDiv.innerText = "Please enter all the Angles😒."
    }

}

isTriangleBtn.addEventListener("click", isTriangle);