// var num = 1;



// var color = ["red","green","blue","yellow","aqau","magenta","black","grey"]

var images = ["img.jpg","img2.avif","img3.jpg","img4.webp","img5.jpg"]
var div = document.getElementById("div")

function changetext(){
    // alert("Hello, World!");
    // console.log("hello, world!");

//    console.log(num++);
   
    var randomIndex = Math.floor(Math.random() * images.length);

    console.log(randomIndex);

    var path = "../Images/" +images[randomIndex]
    div.src = path
    
    
}