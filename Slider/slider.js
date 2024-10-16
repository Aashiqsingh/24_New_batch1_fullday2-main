var images = ["img.jpg","img2.avif","img3.jpg","img4.webp","img5.jpg"];

var currentIndex = 0;
var image = document.getElementById("image");


var prev = document.getElementById("prev");

prev.addEventListener("click",()=>{
                       // (2 - 1 + 5) % 5
                    // 4 - 1 + 5 % 5
                    // 0 - 1 + 5 % 5 = -1 + 5 % 5  = 4 % 5
    currentIndex = (currentIndex - 1 + images.length)%images.length;

    image.src = "../Images/" + images[currentIndex]
    
    
})

var next = document.getElementById("next");
next.addEventListener("click",()=>{

                    3 + 1 % 5
    currentIndex = (currentIndex + 1) % images.length;
    image.src = "../Images/" + images[currentIndex]
})