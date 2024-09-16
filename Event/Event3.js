
var dice = [1,2,3,4,5,6]
const getData = ()=>{

    let randamNo = Math.floor(Math.random() * dice.length)
    console.log(randamNo+1);


    var txt = document.getElementById("txt")
    txt.innerHTML = dice[randamNo]

    if(dice[randamNo] === 1){
        txt.innerHTML = " * "
    }
    else if(dice[randamNo] === 2){
        txt.innerHTML = " ** "
    }
    else if(dice[randamNo] === 3){
        txt.innerHTML = " *** "
    }
    else if(dice[randamNo] === 4){
        txt.innerHTML = " **** "
    }
    else if(dice[randamNo] === 5){
        txt.innerHTML = " ***** "
    }
    else if(dice[randamNo] === 6){
        txt.innerHTML = " ****** "
    }
    

}