const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Dream big and dare to fail.",
    "Action is the foundational key to all success.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn't just find you. You have to go out and get it."
  ];


const quoteBox = document.getElementById('quoteBox')
const newQuoteBtn = document.getElementById('newQuoteBtn')

function displyaQuotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex]
    
    quoteBox.textContent = quote
    
}

newQuoteBtn.addEventListener('click', displyaQuotes)
