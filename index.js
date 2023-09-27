let homeScore=0;
let guestScore=0;

document.getElementById("home-score").textContent = homeScore;
document.getElementById("guest-score").textContent = guestScore;


let homer=document.getElementById("home-score");

let guesser=document.getElementById("guest-score");

function plusOneHome(){
    homeScore=homeScore+1;
    homer.textContent=homeScore;
}

function plusTwoHome(){
    homeScore+=2;
    homer.textContent=homeScore;
}

function plusThreeHome(){
    homeScore+=3;
    homer.textContent=homeScore;
}

function plusOneGuest(){
    guestScore+=1;
    guesser.textContent=guestScore;
}

function plusTwoGuest(){
    guestScore+=2;
    guesser.textContent=guestScore;
}

function plusThreeGuest(){
    guestScore+=3;
    guesser.textContent=guestScore;
}

function startNewGame() {
	homeScore = 0;
	guestScore = 0;
	homer.textContent = '0';
	guesser.textContent = '0';

	
}