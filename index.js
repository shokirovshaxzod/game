let inputNum = document.getElementById("id")
let btn = document.getElementById("submit")
let veluHtml = document.getElementById("velu")
let boxvl = document.getElementById("boxvelu")
let number = Math.floor(Math.random() * 100)

console.log('rndNumber', number);


btn.addEventListener("click", function () {
    veluHtml.innerHTML = inputNum.value
    if (number < inputNum.value) {
        console.log(boxvl.innerHTML = "ko'p");
    } else if (number > inputNum.value) {
        console.log(boxvl.innerHTML = "kam");
    } else if (number == inputNum.value) {
        console.log(boxvl.innerHTML = "to'g'ri");
    }
    else{
        console.log(boxvl.innerHTML = "Son kiriting");
    }
    inputNum.value = ''
})