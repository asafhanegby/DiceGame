document.querySelector(".btn").addEventListener("click",handleClick);

function handleClick(){
  var randomNumber1 = Math.random();
  randomNumber1 *= 6;
  randomNumber1=Math.ceil(randomNumber1);

  var randomNumber2 = Math.random();
  randomNumber2 *= 6;
  randomNumber2=Math.ceil(randomNumber2);


  document.querySelector(".dice .img1").setAttribute("src","images/dice"+randomNumber1+".png");

  document.querySelector(".dice .img2").setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML  = "<img class='red-flag' src='images/flag.png' alt='red flag'> Player 1 wins! ";
    document.querySelector("h4").innerHTML="Next time player 2😋";
    document.querySelector(".btn").innerHTML="Try again?";
  }
  else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML  = "Player 2 wins <img class='red-flag' src='images/flag.png' alt='red flag'>";
    document.querySelector("h4").innerHTML="Next time player 1🙃";
    document.querySelector(".btn").innerHTML="Try again?";
  } else{document.querySelector(".container h1").innerHTML  = "Draw!";
  document.querySelector("h4").innerHTML="We have two winners👌";
  document.querySelector(".btn").innerHTML="Try again?";
}

}
