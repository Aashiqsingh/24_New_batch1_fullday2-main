
// var flag = 0;
// const callFun = ()=>{

//     // console.log("hello world!");
//     console.log(flag++);
    
    
// }


var colors = ["red","green","yellow","pink","purple","orange","black","grey","skyblue","violet","blue"]

// console.log(colors[1]);


function callFun(){

    var randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex);
    
    var mydiv = document.getElementById("mydiv");
    
    mydiv.style.backgroundColor = colors[randomIndex]

}