let player = {
     name :  "Dhinakar",
     chips : 50
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")




let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + playerChips

function startGame(){
    cardsEl.textContent = "Cards: " + cards[0] +" "+ cards[1]
    sumEl.textContent = "Sum: " + sum
    if(sum<=20){
        message = "Do yo want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
    card = getRandomCard()
     sum += card
     cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + card
     startGame()
    }
}

function getRandomCard () {
     let randomNumber = Math.floor(Math.random()*13)+1
     if(randomNumber > 10){
        return 10
     }else if(randomNumber === 1){
        return 11
     }else{
        return randomNumber
     }
}

