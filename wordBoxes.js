var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  console.log("== New text was added")

  var text = event.target.value;
  console.log("  -- text:", text)
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  console.log("  -- allWords:", allWords)
    // currentWord = 0;
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

var wordsEntryArea = document.getElementById("words-input")
wordsEntryArea.addEventListener(
  // "input",
  "change",
  handleNewWordsEntered
)
