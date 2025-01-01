let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');


let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');


const genCompChoice = () => {
    const options = ['rock','paper','scissor'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log('Game was draw');
    msg.innerText = 'Game was Draw. Play Again!';
    msg.style.backgroundColor = '#081b31';

}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){

        userScore++;
        userScorePara.innerText = userScore;
        // console.log('you win');
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log('you lose');
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}


const playGame = (userChoice) => {
    console.log('user choice = ',userChoice);

    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log('comp choice = ',compChoice)

    if(userChoice === compChoice){

        //draw grame
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            //paper, scissor
            userWin = compChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            //rock, scissor
            userWin = compChoice === 'scissor' ? false : true;
        }else{
            //paper, rock
            userWin = compChoice === 'rock' ? false : true;
        }

        showWinner(userWin,userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {;
        const userChoice = choice.getAttribute('id')
        // console.log('choice was clicked',userChoice);
        playGame(userChoice);
    })
})