const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")

const words = document.getElementById("textinthebox")

let test = document.createTextNode(" gang gang gangsta");
words.appendChild(test);

function displayDate() {    
    let date = " The date is : " + Date();
    return date;
}

button1.addEventListener("click", function(){words.textContent += displayDate();})
button2.addEventListener("click", function(){words.textContent += " hello gang"})
button3.addEventListener("click", function(){words.textContent += " hello world"})

