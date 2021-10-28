var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice"+ randomNumber1 +".png"; //dice1.png - dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Hint: You'll need to use an if statement, querySelector() and the innerHTML property to change the text in the h1.
var winner = " ";
if(randomNumber1 == randomNumber2)
{
 winner = "Draw!";
}
else if(randomNumber1 > randomNumber2)
{
 winner = "🚩 Player 1 Wins!";
}
else
{
 winner = "Player 2 Wins! 🚩";
}
document.querySelector("h1").innerHTML = winner;