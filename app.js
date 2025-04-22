let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string).toString();
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(0 , -1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});


// let input = document.getElementById("inputBox"); // Get input field
// let buttons = document.querySelectorAll("button"); // Get all buttons

// let expression = ""; // Store user input

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         let value = e.target.innerText; // Get button text

//         if (value === "=") {
//             try {
//                 expression = eval(expression); // Calculate result
//             } catch {
//                 expression = "Error"; // Show error if invalid input
//             }
//         } else if (value === "AC") {
//             expression = ""; // Clear input
//         } else if (value === "DEL") {
//             expression = expression.slice(0, -1); // Remove last character
//         } else {
//             expression += value; // Add button text to expression
//         }

//         input.value = expression || "0"; // Show "0" when input is empty
//     });
// });