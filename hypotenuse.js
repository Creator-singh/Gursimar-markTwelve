const perpendicular = document.querySelector("#perpendicular");
const base = document.querySelector("#base");
const calHypotenuse = document.querySelector("#btn-hypotenuse");
const hypotenuseOutput = document.querySelector("#hypotenuse-output");

function calculateSumOfSquares(perpendicular,base){
    const sumOfSquares = perpendicular*perpendicular + base*base;
    return sumOfSquares;
}

function calculateHypotenuse(){
    if(Number(perpendicular.value) > 0 && Number(base.value) > 0)
    {
        const sumOfSquares = calculateSumOfSquares(Number(perpendicular.value), Number(base.value));
        const result = Math.sqrt(sumOfSquares);
        hypotenuseOutput.innerText = "The Length of Hypotenuse is " + result + " unit";
    }
    else{
        hypotenuseOutput.innerText = "Please Enter both the fields🤦‍♂️";
    }
    
}

calHypotenuse.addEventListener("click", calculateHypotenuse);