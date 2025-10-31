console.log('Hello World!');
/*let cartQuantity = 0;
console.log(cartQuantity);

*/
let computerMove = '';

function movementMade() {
  let randomNumber = Math.random();
  console.log(randomNumber);

  if (randomNumber >= 0 && randomNumber < 1/3) {computerMove = 'rock';
    
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
    
  } else if (randomNumber >= 2/3 && randomNumber < 1) {computerMove = 'scissors'
   
  }
  console.log(randomNumber);

  console.log(computerMove);
}



/*
const score = {
  wins: 0,
  losses: 0,
  Ties: 2,
}




let result = '';

function outPut(decision){
  
  console.log(decision);
  
  if (decision === 'rock') {
    
    if(computerMove === 'rock'){result = 'A Tie.';
      
      }else if(computerMove === 'paper'){result = 'You Win.';
      
      }else if(computerMove === 'scissors'){result = 'You Lose.';
      }
      console.log(result);
      
      
      
      
  if (result === 'You Win.') {score.wins += 1;
    
  }else if (result === 'You Lose.') {score.losses = score.losses + 1;
    
  } else if (result === 'A Tie.') {score.Ties += 1;
  
    
  }


alert(`You picked ${decision}. Computer picked ${computerMove}, ${result}`)


console.log(score.wins);

} else if (decision === 'paper') {result = 'You Win.';
      
      } else if(computerMove === 'paper'){result = 'A Tie.';
      
      }else if(computerMove === 'scissors'){result = 'You Lose.';
      
      
      
      
      
      console.log(result);
      Console.log(score);

alert(`You picked ${decision}. Computer picked ${computerMove}, ${result}`)


} else if (decision ===  'scissors') {
  
if(computerMove === 'rock'){result = 'You lose.';
      
      }else if(computerMove === 'paper'){result = 'You Win.';
      
      }else if(computerMove === 'scissors'){result = 'A Tie.';
      }
      console.log(result);    
      console.log(score);
      
alert(`You picked ${decision}. Computer picked ${computerMove}, ${result}`)


}
}
*/

const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};


let result = '';
function outPut(decision) {
  console.log(decision);
  
  

  // Compare player decision vs computer move
  if (decision === 'rock') {
    
    if (computerMove === 'rock') {
      result = 'A Tie.';
      score.ties += 1;
      
      
      
    } else if (computerMove === 'paper') {
      result = 'You Lose.';
      score.losses += 1;
      
      
      
    } else if (computerMove === 'scissors') {
      result = 'You Win.';
      score.wins += 1;
    }
    
    
    
  } else if (decision === 'paper') {
    
    if (computerMove === 'rock') {
      result = 'You Win.';
      score.wins += 1;
      
      
      
    } else if (computerMove === 'paper') {
      result = 'A Tie.';
      score.ties += 1;
      
      
    } else if (computerMove === 'scissors') {
      result = 'You Lose.';
      score.losses += 1;
    }
    
    
    
  } else if (decision === 'scissors') {
    
    if (computerMove === 'rock') {
      result = 'You Lose.';
      score.losses += 1;
      
      
      
    } else if (computerMove === 'paper') {
      result = 'You Win.';
      score.wins += 1;
      
      
      
    } else if (computerMove === 'scissors') {
      result = 'A Tie.';
      score.ties += 1;
    }
  }

  console.log(score);
  
  /* The pop-up */
  alert(`You picked ${decision}. Computer picked ${computerMove}. ${result}
 wins: ${score.wins},losses: ${score.losses},Ties: ${score.ties}`);
}
