function funC(){

    var body = document.getElementById("body");
    body.style.backgroundColor = "red";



    setTimeout(green,2000);
}

function green(){
    var body = document.getElementById("body");
    body.style.backgroundColor = "green";


    setTimeout(pink,2000)
}

function pink(){
    var body = document.getElementById("body");
    body.style.backgroundColor = "pink";


    setTimeout(yellow,2000)
}

function yellow(){
    var body = document.getElementById("body");
    body.style.backgroundColor = "yellow";


    setTimeout(clrInt,2000)
}

function clrInt(){
    var body = document.getElementById("body");
    body.style.backgroundColor = "white";
    clearInterval();
}