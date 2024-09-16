function changeText(){

    var head = document.getElementById("head")

    head.innerHTML = "Royal technosoft pvt ltd."
    head.style.color = "white"
    head.style.backgroundColor = "red"
    console.log(head.innerHTML);
    
    


}

function changeHref(){

    var anchor = document.getElementById("anchor")
    anchor.href = "https://www.netflix.com"
    anchor.innerHTML = "Netflix"
    
}

function changeSize(){
    var image = document.getElementById("image")
    image.style.height = "400px"
    image.style.width = "400px"
}