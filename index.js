
let user_nums = []
let computer_num
let tentativas = 0

function reload() {
    window.location.reload()
}

function init() {
    computer_num = Math.floor(Math.random() * 100 + 1) //gerar numero random 
    console.log(computer_num)
}

function comparar() {
    const user_num = Number(document.getElementById("inputBox").value)
    user_nums.push(" " + user_num)
    document.getElementById("guesses").innerHTML = user_nums
    

    if (user_num > computer_num) {
        document.getElementById("textOutput").innerHTML = "Seu número é muito alto..."
        document.getElementById("inputBox").value = " "
        tentativas++
        document.getElementById("attempts").innerHTML = tentativas
    }
    else if (user_num < computer_num) {
        document.getElementById("textOutput").innerHTML = "Seu número é muito baixo..."
        document.getElementById("inputBox").value = " "
        tentativas++
        document.getElementById("attempts").innerHTML = tentativas
    }
    else {
        document.getElementById("textOutput").innerHTML = "Parabéns! Você acertou!"
        document.getElementById("inputBox").value = " "
        tentativas++
        document.getElementById("attempts").innerHTML = tentativas
        document.getElementById("inputBox").setAttribute("Readonly", "Readonly")
    }
}