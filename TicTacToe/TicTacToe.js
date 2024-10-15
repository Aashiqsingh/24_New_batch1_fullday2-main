var box = document.querySelectorAll(".box");
var messageContainer = document.querySelector(".msg-container");


var playerO = false;
var count = 0;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
box.forEach((box)=>{

    box.addEventListener("click",()=>{
    if(playerO === false){
        box.innerText = "0";
        playerO = true;
    }
    else{
        box.innerText = "X";
        playerO = false;
    }
    // box.disabled = true;
    count++;

    checkWinner()

    if(count == 9){
        console.log("Match draw..");
        
    }

})
    
})


const showWinner = (winner)=>{

    console.log("winner ", winner);
    messageContainer.innerText = "Congo.. Winner is " + winner;
    messageContainer.classList.remove("hide");
    
}


const checkWinner = ()=>{
    for(let pattern of winPatterns){

        let val1 = box[pattern[0]].innerText
        let val2 = box[pattern[1]].innerText
        let val3 = box[pattern[2]].innerText

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                console.log("You winner!!! ",val1);
                showWinner(val1);
                return false;
            }
        }
    }
}