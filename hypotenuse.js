const perpendicular = document.querySelector("#perpendicular");
const base = document.querySelector("#base");
const calHypotenuse = document.querySelector("#btn-hypotenuse");
const hypotenuseOutput = document.querySelector("#hypotenuse-output");

function calculateSumOfSquares(perpendicular,base){
    const sumOfSquares = perpendicular*perpendicular + base*base;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(perpendicular.value), Number(base.value));
    const result = Math.sqrt(sumOfSquares);
    hypotenuseOutput.innerText = "Hypotenuse is " + result;
}

calHypotenuse.addEventListener("click", calculateHypotenuse);