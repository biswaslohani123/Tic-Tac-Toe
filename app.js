let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn")
let newBtn = document.querySelector("#new-Btn")
let msgContainer =document.querySelector(".message-container")
let message = document.querySelector('#msg')


let turnO = true; //player O 

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],  
];

const resetGame = () => {
    turnO = true;
    EnabledBoxes()
    msgContainer.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener('click', () => {
       if (turnO === true) {
            box.innerText = "O";
            turnO = false;
       }else{
        box.innerText = "X";
        turnO = true
       }
       box.disabled = true

       checkWinner();
        
    })
})
const disabledBoxes = () => {
    for(let box of boxes ){
        box.disabled = true
    }
}
const EnabledBoxes = () => {
    for(let box of boxes ){
        box.disabled = false
        box.innerText =""
    }
}
const showWinner= (Winner)=> {
    message.innerText = `Congratulation Winner is ${Winner}`
    msgContainer.classList.remove("hide")
    disabledBoxes()
}

const checkWinner = () => {
    let isDraw = true;
    for(let pattern of winPattern){
       
            let posVal1 = boxes[pattern[0]].innerText;
            let posVal2 =  boxes[pattern[1]].innerText;
            let posVal3 =  boxes[pattern[2]].innerText;

            if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
                if (posVal1 === posVal2 && posVal2 === posVal3 ) {
                    console.log('Winner',posVal1);
                    
                    showWinner(posVal1);
                    return; //exit if you have winner
                    
                }
            }
            for (let box of boxes) {
                if (box.innerText === "") {
                    isDraw =false;
                    break
                }
            }

            if (isDraw) {
                message.innerText = "It is Draw!";
                msgContainer.classList.remove("hide")
                disabledBoxes()
                
            }
        
    }
}

newBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)