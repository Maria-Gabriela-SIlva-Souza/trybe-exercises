let clickCount = 0;
let textToDisplay = document.getElementById("span");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);

