window.addEventListener("click", function () {
    console.log("== The window was clicked")
})

window.addEventListener("contextmenu", function () {
    console.log("== The window was right-clicked")
})

function buttonClickHandler(event) {
    console.log("== A button was clicked")
    console.log(" -- event:", event)
    var clickedButton = event.target
    var box = clickedButton.parentNode
    box.classList.toggle("highlighted")
}

var buttons = document.getElementsByClassName("in-box-button")
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", buttonClickHandler)
}
