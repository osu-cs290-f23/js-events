var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  console.log("== New text was added")

  var text = event.target.value;
  console.log("  -- text:", text)
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  console.log("  -- allWords:", allWords)
  currentWord = 0;
}

function generateWordElem(word, highlightColor) {
	var wordElem = document.createElement('span');
  wordElem.classList.add('word');
  wordElem.textContent = word;
  if (highlightColor) {
  	wordElem.classList.add('highlight');
  	wordElem.classList.add(highlightColor);
  }
  return wordElem;
}

function getHighlightColor() {
  var selectedRadioButton = document.querySelector(
    "input[name='highlight-color']:checked"
  )
  console.log("== selectedRadioButton:", selectedRadioButton)
  return selectedRadioButton.value
}

function addWordButtonClickHandler(event) {
  var word = allWords[currentWord]
  if (word) {
    var clickedButton = event.target
    var container = clickedButton.parentNode.parentNode
    var wordsContainer = container.getElementsByClassName("words-container")[0]

    var everyNthSelect = document.getElementById("every-nth-select")
    var everyNth = parseInt(everyNthSelect.value)
    var highlightColor = null
    if (!((currentWord + 1) % everyNth)) {
      highlightColor = getHighlightColor()
    }

    var wordElem = generateWordElem(word, highlightColor)
    wordsContainer.appendChild(wordElem)
    currentWord = (currentWord + 1) % allWords.length
  }
}

var wordsEntryArea = document.getElementById("words-input")
wordsEntryArea.addEventListener(
  // "input",
  "change",
  handleNewWordsEntered
)

var addWordButtons = document.getElementsByClassName("add-word-button")
for (var i = 0; i < addWordButtons.length; i++) {
  addWordButtons[i].addEventListener("click", addWordButtonClickHandler)
}
