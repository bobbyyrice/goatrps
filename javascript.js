const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")

const textBox = document.getElementById("bigboxfortext")

function addElement(theText) {
    const addText = document.createElement("p");
    addText.innerHTML = theText;
    document.getElementById("bigboxfortext").appendChild(addText);
}

button1.addEventListener("click", function(){})
button2.addEventListener("click", function(){})
button3.addEventListener("click", function(){})
button4.addEventListener("click", function(){})