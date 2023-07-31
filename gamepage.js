// generation of random value

// count of attempts
// until hit
  
// function for the number sent by the user

var y=Math.floor(Math.random()*10+1);
var x=document.getElementById("guessField").value;
var guess=1;

function submit(){
    if(x==y)
{
    alert("CONGRATULATONS"+player_name+"YOU GUESSED IT RIGHT"+guess+"GUESS");
    guess=1;
}
else if(x>y)
{
    guess++;
    alert("OOPS SORRY!!TRY A SMALLER NUMBER");
}
else{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
}


function playAgain(){
    y=Math.floor(Math.random()*10+1);
}