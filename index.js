window.addEventListener("click", function (event) {
    console.log("== The window was clicked")
    console.log(" -- event.target:", event.target)
    console.log(" -- event.currentTarget:", event.currentTarget)
})

window.addEventListener("contextmenu", function () {
    console.log("== The window was right-clicked")
})

function buttonClickHandler(event) {
    console.log("== A button was clicked")
    console.log(" -- event.target:", event.target)
    console.log(" -- event.currentTarget:", event.currentTarget)
    var clickedButton = event.target
    var box = clickedButton.parentNode
    box.classList.toggle("highlighted")
    event.stopPropagation()
}

var buttons = document.getElementsByClassName("in-box-button")
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonClickHandler)
}

var boxes = document.getElementsByClassName("box")
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function (event) {
        console.log("== A box was clicked")
        console.log(" -- event.target:", event.target)
        console.log(" -- event.currentTarget:", event.currentTarget)
    })
}

var link = document.getElementById("website-link")
link.addEventListener("click", function (event) {
    console.log("== The link was clicked")
    event.preventDefault()
})
