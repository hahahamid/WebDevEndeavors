var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 


var randomDiceImage1 = "/Dice Game/images/dice" + randomNumber1 + ".png"; 
var randomDiceImage2 = "/Dice Game/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1); 

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.getElementById("idk").textContent = "Player 1 wins!"
}
else if(randomNumber1 < randomNumber2){
    document.getElementById("idk").textContent = "Player 2 wins!"   
}
else document.getElementById("idk").textContent = "Its a tie lol :/"   




 