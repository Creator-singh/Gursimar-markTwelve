const baseTriangle = document.querySelector("#base-area");
const heightTriangle = document.querySelector("#height");
const calArea = document.querySelector("#btn-area");
const areaOutput = document.querySelector("#area-output");

function calculateArea(){
    if(Number(baseTriangle.value) > 0 && Number(heightTriangle.value) > 0)
    {
        const area = 0.5 * Number(baseTriangle.value) * Number(heightTriangle.value);
        console.log(area);
        areaOutput.innerText = "Area of Triangle is " + area + " unit²";
    }
    else{
        areaOutput.innerText = "Please Enter both the fields 🤨";
    }
}

calArea.addEventListener("click", calculateArea);