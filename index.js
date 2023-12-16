
// STEP 1: Create a random number1 between 1 and 6.
/* var randomNumber1 = Math.floor(Math.random()*6 + 1);

/* STEP 2: Use the random number1, pick out a random dice image
between dice1.png to dice 6.png then place this image inside the left <img> element . That is player 1*/
/*    if (randomNumber1 === 1){
        document.querySelector(".dice .img1").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber1 === 2) {
        document.querySelector(".dice .img1").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1 === 3){
        document.querySelector(".dice .img1").setAttribute("src", "./images/dice3.png");
    }else if (randomNumber1 === 4) {
        document.querySelector(".dice .img1").setAttribute("src", "./images/dice4.png");
    }else if (randomNumber1 === 5){
        document.querySelector(".dice .img1").setAttribute("src", "./images/dice5.png");
    }else if (randomNumber1 === 6){
        document.querySelector(".dice .img1").setAttribute("src", "./images/dice6.png");
    }

/* STEP 3: Do the same for the right hand side image element. */
/*    var randomNumber2 = Math.floor(Math.random()*6 + 1);
    if (randomNumber2 === 1){
        document.querySelector(".dice .img2").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber2 === 2) {
        document.querySelector(".dice .img2").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber2 === 3){
        document.querySelector(".dice .img2").setAttribute("src", "./images/dice3.png");
    }else if (randomNumber2  === 4) {
        document.querySelector(".dice .img2").setAttribute("src", "./images/dice4.png");
    }else if (randomNumber2  === 5){
        document.querySelector(".dice .img2").setAttribute("src", "./images/dice5.png");
    }else if (randomNumber2  === 6){
        document.querySelector(".dice .img2").setAttribute("src", "./images/dice6.png");
    }

/* STEP 4: Change the Title to Display a Winner
Change the text in the h1, (which currently says Refresh Me) to show which user won or 
if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
*/
/*
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
} else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";   
}

*/




/* The code above works as intended. However, it is too long. We can squeeze as shown below */

// STEP 1,2 and 3: 
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

/* Create a function to get rid of one of the if blocks*/
function changeImage(Numero){
    if (Numero === 1){
        var randomNumber = randomNumber1;
    } else if (Numero === 2){
        var randomNumber = randomNumber2;
    }
    document.querySelector(`.dice .img${Numero}`).setAttribute("src", `./images/dice${randomNumber}.png`); 
};

changeImage(1);
changeImage(2);

/* STEP 4: Change the Title to Display a Winner
Change the text in the h1, (which currently says Refresh Me) to show which user won or 
if there was a draw depending on the dice values of player 1 (left) and player 2 (right).
*/

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
} else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";   
}



