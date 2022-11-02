const send = document.getElementById("send");
const content = document.getElementById("content");
const userInput1 = document.getElementById("userInput1");
const userInput2 = document.getElementById("userInput2");
const changeColorBtn = document.getElementById("changeColorBtn");
const userInputColor = document.getElementById("userInputColor");

const changeColor = () =>{
    const userInputColorValue = userInputColor.value;
    content.style.backgroundColor = userInputColorValue;
}

send.onclick = () => {
    const x = userInput1.value;
    const y = userInput2.value;
    content.style.left = x + "px";
    content.style.top = y + "px";
};

changeColorBtn.onclick = () => {
    changeColor();
};

content.onmouseover = () => {
   changeColor();
};

window.onload = () =>{
    changeColor();
};
