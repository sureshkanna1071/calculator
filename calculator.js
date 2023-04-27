
let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let equal = document.querySelector(".equal");
let clear = document.querySelectorAll(".button")[0];
let del = document.querySelectorAll(".button")[1];

let displayValue = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonValue = button.innerHTML
        if (buttonValue === "Del" || buttonValue === "AC") {
            return
        } else {
            displayValue += buttonValue;
            display.value = displayValue;
        }
        console.log()
    })
})

equal.addEventListener("click", () => {
    let result = eval(displayValue);
    displayValue = result;
    display.value = result;
})

clear.addEventListener("click", () => {
    display.value = "";
    displayValue = "";
})

del.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1)
    display.value = displayValue;
})
