
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const specialChars = ["%", "*", "/", "+", "-", "="];
let output = "";

// Define function to calculate based on button
const calculate = (btnValue) => {
    console.log(btnValue);

    if (btnValue === "=" && output !== "") {
        // If op has '%' and replace with /100 before evaluating
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        // If del button clicked remove last letter 
        output = output.toString().slice(0, -1);
    } else {
        // If op is empty and ip is special char then return 
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    display.value = output;
};

// Add event listener to buttons to call calculate() on click
buttons.forEach((button) => {
    // Button click listener call calculate
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
