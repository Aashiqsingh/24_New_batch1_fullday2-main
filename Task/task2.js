

var images = ["img.jpg","img2.avif","img3.jpg","img4.webp","img5.jpg"]

function changeImg(){

    var randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);

    var path = "../Images/"+images[randomIndex]

    var image = document.getElementById("image")
    image.src = path

}