var images = ["img.jpg","img2.avif","img3.jpg","img4.webp","img5.jpg"]

var currentIndex = 0;
function prev(){

    currentIndex = (currentIndex - 1 + images.length)%images.length;
    console.log(currentIndex);

    var img = document.getElementById("img")

    var path = "../Images/"+images[currentIndex]
    img.src = path;
    
}