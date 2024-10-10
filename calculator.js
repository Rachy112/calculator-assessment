// const form = document.querySelector("#form")
// let firstInput = document.querySelector("#firstInput")
// let secondInput = document.querySelector("#secondInput")
// let operator = document.querySelector("#operation")
// const calculateBtn = document.querySelector("#calculateBtn")
// let resultNo = document.querySelector(".resultNo")
// let result;

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     if(firstInput.value === "" || secondInput.value === "") {
//         alert("Input must be a Number")
//     } else if (operator.value === "add") {
//         result = Number(firstInput.value) + Number(secondInput.value)
//         resultNo.innerHTML = result;
//     }



// //     switch (firstInput.value === "" || secondInput.value === "") {
// //         case operator.value === "add":
// //         result = Number (firstInput.value) + Number (secondInput.value);
// }
// )


// function calculator() {

// let firstInput = document.getElementById("firstInput").value
// let secondInput = document.getElementById("secondInput").value
// let operator = document.getElementById("operator").value

// let result;

// if(operator == "add"){
//     result = Number(firstInput) + Number(secondInput)
// } else if(operator == "subtract"){
//     result = Number(firstInput) - Number(secondInput)
// }  else if(operator == "divide"){
//     result = Number(firstInput) / Number(secondInput)
// }    else if(operator == "multiply"){
//     result = Number(firstInput) * Number(secondInput)
// }  else {
//     result = Number(firstInput) ** Number(secondInput)
// }

// let resultTag = document.getElementById("result")
// resultTag.innerHTML = "Result: " + result


// }


function calculator() {

    let firstInput = document.getElementById("firstInput").value
    let secondInput = document.getElementById("secondInput").value
    let operator = document.getElementById("operator").value
    
    let result;
    
    switch (operator) {
        case  'add':
        result = Number(firstInput) + Number(secondInput);
        break;
        case  'subtract':
            result = Number(firstInput) - Number(secondInput);
            break;
            case 'divide':
            result = Number(firstInput) / Number(secondInput);
            break;
            case 'multiply':
            result = Number(firstInput) * Number(secondInput);
            break;
            case 'exponential':
            result = Number(firstInput) ** Number(secondInput) 
        }

        let resultTag = document.getElementById("result")
         resultTag.innerHTML = "Result: " + result
    }
