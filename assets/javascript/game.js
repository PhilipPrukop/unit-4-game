
var target = 55;
var loss = 0;
var win = 0;
var gemValues = new Array();
var playerTotal = 0;

for (i=0; i < 4; i++){
    gemValues[i] = Math.floor(Math.random() * 6) + 5;
}

//$("#myid").click(function() { myfunction(arg1, arg2); });
window.onload = function() {
    $("#gem0").click(function() { playTheGame(gemValues[0]); });
    $("#gem1").click(function() { playTheGame(gemValues[1]); });
    $("#gem2").click(function() { playTheGame(gemValues[2]); });
    $("#gem3").click(function() { playTheGame(gemValues[3]); });
};


function playTheGame(x) {
  playerTotal = x + playerTotal;
  $("#playerTotal").text(playerTotal.toString());
  console.log(playerTotal);  
  if (playerTotal == target) {
      console.log("You win!");
      win = win + 1;
      $("#win").text(win.toString());
      reset();
  } else if (playerTotal > target) {
      loss = loss + 1;
      console.log("You suck!");
      $("#loss").text(loss.toString());
      reset();
  }  else {
    return;
  }
  return;
}

function reset() {
    playerTotal = 0;
    for (i=0; i < 4; i++){
        gemValues[i] = Math.floor(Math.random() * 6) + 5;
    }
    return;
}



//Speudo code

//a game with 4 crystals and a Random Result
//every crystal needs to have a random number
//A new random number should be generated every time we win or lose
//to those 4 crystals
//When we click any Crystal it should be adding with the previous result
//Until it equals the total score
//If it is not equal then we start over
//If it is equal then we increment a win counter