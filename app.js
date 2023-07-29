// set variables
let min = 1,
  max = 10,
  winningNum = Math.floor((Math.random()*max)+min),
  guessLeft = 3;

const minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  input = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-value");
  game = document.querySelector("#game");
  msg = document.querySelector(".message");


  // assign min and max num

  
  minNum.textContent= min;
  maxNum.textContent= max;



  // Add event listener on the guessBtn
  guessBtn.addEventListener('click', runClick);
 game.addEventListener('mousedown', function(e){
    if(e.target.className ==='play-again'){
      window.location.reload();
    }
  });

  function runClick(){
    let guess=parseInt(input.value);
if(isNaN(guess) || guess < min ||  guess > max ){

  setMessage(`Enter Number Between ${min} and ${max}`,'red' )
}
else{
  if(guess === winningNum){
    // Game won
    

    GameOver(true,`${guess} is correct Number  , You Won..Play Again`);
   }else{
    guessLeft =guessLeft - 1;
    // or guessLeft -=1;
    if(guessLeft === 0){
      // Game Lost
      GameOver(false,`Game Over, You Lost. The correct number is ${winningNum}`);
      input.disabled=true;
      input.value=''
    }else{
      setMessage(`${guess} is incorrect, You have ${guessLeft} guess left.`,'red');
      input.value=''
    }
   }
}

  }

  function setMessage(message,color){
msg.textContent=message;
msg.style.color=color;


input.style.borderColor=color;

  }

 function GameOver(Won,message){
    Won=== true? color='green': color='red';

msg.style.color=color;
    input.disabled=true;
    input.style.borderColor=color;
   setMessage(message);
   guessBtn.value='PLAY AGAIN';
   guessBtn.className = 'play-again';



  }
