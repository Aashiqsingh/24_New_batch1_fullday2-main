var box = document.getElementsByClassName("box");


var color = ["red","green","blue","yellow","darkblue","lightblue","grey"];

// console.log(color[4]);


box[0].addEventListener("mousemove",()=>{
    
    var randomIndex = Math.floor(Math.random() * color.length)
    // console.log(randomIndex);

    box[0].style.backgroundColor = color[randomIndex];
        
})

box[0].addEventListener("click",()=>{

    box[0].style.height = "400px";
    box[0].style.width = "400px";
})
box[0].addEventListener("dblclick",()=>{

    box[0].style.height = "100px";
    box[0].style.width = "100px";
})