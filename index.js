// home
let homeScoreStr = document.getElementById("home-score")
let totalHomeScore = 0

function homeAdd1() {
    totalHomeScore += 1
    homeScoreStr.textContent = totalHomeScore
}

// guest
let guestScoreStr = document.getElementById("guest-score")
let totalGuestScore = 0

function guestAdd1() {
    totalGuestScore += 1
    guestScoreStr.textContent = totalGuestScore
}

// period counter
let periodStr = document.getElementById("period")
let periodCounter = 0

function incrementPeriod() {
    periodCounter += 1
    periodStr.textContent = periodCounter
}

// new game
function newGame() {
    totalHomeScore = 0
    totalGuestScore = 0
    periodCounter = 0
    homeScoreStr.textContent = totalHomeScore
    guestScoreStr.textContent = totalGuestScore
    periodStr.textContent = periodCounter
}
