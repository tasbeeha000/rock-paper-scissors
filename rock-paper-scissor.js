let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScore();

  function resetScore() {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
    localStorage.removeItem('score');
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }
  function updateScore(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins},
     Losses: ${score.losses}, 
     Ties: ${score.ties}`;

  }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'Bad Luck! You lose.'; 
      } else if (computerMove === 'paper') {
        result = 'Hurray! You won.';
      } else if (computerMove === 'scissors') {
        result = 'Its a Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'Hurray! You won.';
      } else if (computerMove === 'paper') {
        result = 'Its a Tie.';
      } else if (computerMove === 'scissors') {
        result = 'Bad Luck! You lose.';
      }

    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Its a Tie.';
      } else if (computerMove === 'paper') {
        result = 'Bad Luck! You lose.';
      } else if (computerMove === 'scissors') {
        result = 'Hurray! You won.';
      }
    }

    if (result === 'Hurray! You won.') {
      score.wins += 1;
    } else if (result === 'Bad Luck! You lose.') {
      score.losses += 1;
    } else if (result === 'Its a Tie.') {
      score.ties += 1;
    }


    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML=`${result}`;

    document.querySelector('.js-moves').innerHTML=`You Chosed:
   <img src="imagess/${playerMove}-emoji.png" class="move-icon-res"> Computer Choosed:
   <img src="imagess/${computerMove}-emoji.png" class="move-icon-res">`;



  }