const container = document.getElementById("container")
const changeBtn = document.getElementById("numSquare")
let numSquares = 0
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.add("square")
    container.appendChild(newDiv)
}

let squares = document.querySelectorAll(".square")

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black"
    })
})

function userSquares() {
    let input = Number(window.prompt("How many squares?"))
    input = Math.pow(input, 2)
    let temp = Math.pow(input, 0.5)
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 0; i < input; i++) {
        const addDiv = document.createElement("div")
        addDiv.classList.add("square")
        container.appendChild(addDiv)
    }
    container.style.setProperty('grid-template-columns', `repeat(${temp}, ${500/temp}px)`);
    container.style.setProperty('grid-template-rows', `repeat(${temp}, ${500/temp})px`);
    draw()
}


changeBtn.addEventListener("click", userSquares)

function draw () {
    squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black"
        })
    })
}




























function temp() {
    if (input > 10000) {
        alert("That is too many squares")
    }
    else if (input < numSquares) {
        for (let i = numSquares; i > numSquares; i--) {
            container.removeChild(container.firstChild)
        }
        numSquares = input
        let temp = Math.pow(numSquares, 0.5)
        container.style.gridTemplateColumns = "repeat(" + temp + ", " + 500/temp + "px);"
    }
    else {
        for (let i = numSquares; i < numSquares; i++) {
            const addDiv = document.createElement("div")
            addDiv.classList.add("square")
            container.appendChild(addDiv)
        }
        numSquares = input
        let temp = Math.pow(numSquares, 0.5)
        container.style.gridTemplateColumns = "repeat(" + temp + ", " + 500/temp + "px);"
    }
}

