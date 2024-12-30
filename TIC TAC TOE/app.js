let boxs = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turn  = true //playerX, playerO

const winPattens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn = true;
    enableBoxs();
    msgContainer.classList.add('hide');
}

boxs.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn){ //playerO
            box.innerText = 'O';
            turn = false;
        }else{ //playerX
            box.innerText = 'X';;
            turn =true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disabledbtn = () => {
    for(let box of boxs){
        box.disabled = true;
    }
}
const enableBoxs = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = '';
    }
}

const showWinner =  (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledbtn();
}

const checkWinner = () => {
    for(let pattern of winPattens){

        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if(pos1Val !='' && pos2Val !='' && pos3Val !=''){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val)
            }
        }
    }
}

newGameBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)